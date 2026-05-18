import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { StorageService } from '../storage';
import { Repository } from 'typeorm';
import { hash } from 'argon2';

import { ApiPaginatedResponse, ApiResponse, PaginationDto } from '@/common';
import { formatMediaUrl, generateFileName } from '@/common/utils';
import { RoleEntity, UserEntity, UserRoleEntity } from './entities';
import { UpdateUserDto } from './dto';
import {
  TFreezeAction,
  TUploadAvatarResponse,
  TUserDataResponse,
  TUserRole,
} from './types';
import { BALANCE_ACTIONS } from './constants';

@Injectable()
export class UserService {
  private readonly avatarBaseUrl: string;

  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    @InjectRepository(UserRoleEntity)
    private readonly userRolesRepository: Repository<UserRoleEntity>,
    @InjectRepository(RoleEntity)
    private readonly roleRepository: Repository<RoleEntity>,
    private readonly storageService: StorageService,
    private readonly configService: ConfigService,
  ) {
    const domain = this.configService.getOrThrow<string>('S3_PUBLIC_DOMAIN');
    this.avatarBaseUrl = domain.endsWith('/') ? domain : domain + '/';
  }

  async findById(id: string): Promise<UserEntity> {
    const user = await this.userRepository.findOne({
      where: { id },
      relations: ['userRoles', 'userRoles.role'],
    });

    if (!user) {
      throw new NotFoundException('Пользователь не найден!');
    }

    return user;
  }

  async getCurrentUser(id: string): Promise<TUserDataResponse> {
    const user = await this.userRepository.findOne({
      where: { id },
      relations: ['userRoles', 'userRoles.role'],
    });

    if (!user) {
      throw new NotFoundException('Пользователь не найден!');
    }

    return ApiResponse.success(
      this.formatUserResponse(user),
      'Данные пользователя успешно получены',
    );
  }

  async updateUser(
    id: string,
    updateData: UpdateUserDto,
  ): Promise<TUserDataResponse> {
    const user = await this.userRepository.findOne({
      where: { id },
      relations: ['userRoles', 'userRoles.role'],
    });

    if (!user) {
      throw new NotFoundException('Пользователь не найден!');
    }

    if (updateData.phone && updateData.phone !== user.phone) {
      const existingUser = await this.userRepository.findOne({
        where: { phone: updateData.phone },
      });

      if (existingUser) {
        throw new ConflictException('User with this phone already exists.');
      }
    }

    if (updateData.password) {
      updateData.password = await hash(updateData.password);
    }

    Object.assign(user, updateData);
    const updatedUser = await this.userRepository.save(user);

    return ApiResponse.success(
      this.formatUserResponse(updatedUser),
      'Данные пользователя успешно обновлены',
    );
  }

  async uploadAvatar(
    userId: string,
    file: Express.Multer.File,
  ): Promise<TUploadAvatarResponse> {
    const user = await this.userRepository.findOne({
      where: { id: userId },
    });

    if (!user) {
      throw new NotFoundException('Пользователь не найден!');
    }

    const key = generateFileName(file, 'avatars/');
    await this.storageService.uploadFile(key, file);

    user.avatar = key;
    await this.userRepository.save(user);

    return ApiResponse.success(
      { avatar: formatMediaUrl(key, this.avatarBaseUrl) },
      'Аватар успешно обновлен',
    );
  }

  async updateBalance(userId: string, amount: number) {
    const user = await this.findById(userId);

    user.balance = Number(user.balance) + amount;
    await this.userRepository.save(user);

    return user;
  }

  async updateFrozenBalance(
    userId: string,
    amount: number,
    action: TFreezeAction,
  ): Promise<void> {
    const user = await this.findById(userId);

    const currentBalance = Number(user.balance);
    const currentFrozen = Number(user.frozenBalance);

    if (action === BALANCE_ACTIONS.FREEZE) {
      if (currentBalance < amount) {
        throw new BadRequestException(
          `Недостаточно средств: ${currentBalance} < ${amount}`,
        );
      }

      user.balance = currentBalance - amount;
      user.frozenBalance = currentFrozen + amount;
    } else if (action === BALANCE_ACTIONS.UNFREEZE) {
      user.balance = currentBalance + amount;
      user.frozenBalance = Math.max(0, currentFrozen - amount);
    }

    await this.userRepository.save(user);
  }

  async getAllUsers(paginationDto: PaginationDto) {
    const { page = 1, limit = 10 } = paginationDto;
    const skip = (page - 1) * limit;

    const [users, total] = await this.userRepository.findAndCount({
      relations: ['userRoles', 'userRoles.role'],
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        phone: true,
        avatar: true,
        balance: true,
        frozenBalance: true,
        createdAt: true,
      },
      order: {
        createdAt: 'DESC',
      },
      skip,
      take: limit,
    });

    const result = users.map((user) => ({
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      phone: user.phone,
      avatar: formatMediaUrl(user.avatar, this.avatarBaseUrl),
      balance: user.balance,
      frozenBalance: user.frozenBalance,
      createdAt: user.createdAt,
      roles: user.userRoles?.map((ur) => ur.role.name) || [],
    }));

    return ApiPaginatedResponse.success(
      result,
      total,
      page,
      limit,
      'Пользователи получены',
    );
  }

  async updateUserRoles(userId: string, roleNames: string[]) {
    const user = await this.userRepository.findOne({
      where: { id: userId },
      relations: ['userRoles'],
    });

    if (!user) {
      throw new NotFoundException('Пользователь не найден');
    }

    await this.userRolesRepository.delete({ userId });

    for (const roleName of roleNames) {
      const role = await this.roleRepository.findOne({
        where: {
          name: roleName as TUserRole,
        },
      });

      if (role) {
        await this.userRolesRepository.save({
          userId,
          roleId: role.id,
        });
      }
    }

    return ApiResponse.success(
      {
        userId,
        roles: roleNames,
      },
      'Роли обновлены',
    );
  }

  private formatUserResponse(user: UserEntity) {
    const roles = user.userRoles?.map((ur) => ur.role.name) || [];

    return {
      id: user.id,
      email: user.email,
      phone: user.phone,
      firstName: user.firstName,
      lastName: user.lastName,
      avatar: formatMediaUrl(user.avatar, this.avatarBaseUrl),
      roles,
      balance: user.balance,
      frozenBalance: user.frozenBalance,
    };
  }
}
