import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { StorageService } from '../storage';
import { Repository } from 'typeorm';

import { ApiResponse } from '@/common';
import { generateFileName } from '@/common/utils';
import { UserEntity } from './entities';
import { UpdateUserDto } from './dto';
import { TUploadAvatarResponse, TUserDataResponse } from './types';

@Injectable()
export class UserService {
  private readonly avatarBaseUrl: string;

  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    private readonly storageService: StorageService,
    private readonly configService: ConfigService,
  ) {
    const domain = this.configService.getOrThrow<string>('S3_PUBLIC_DOMAIN');
    this.avatarBaseUrl = domain.endsWith('/') ? domain : domain + '/';
  }

  async findById(id: string): Promise<UserEntity> {
    const user = await this.userRepository.findOne({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException('User not found!');
    }

    return user;
  }

  async getCurrentUser(id: string): Promise<TUserDataResponse> {
    const user = await this.userRepository.findOne({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException('User not found!');
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
    });

    if (!user) {
      throw new NotFoundException('User not found!');
    }

    if (updateData.phone && updateData.phone !== user.phone) {
      const existingUser = await this.userRepository.findOne({
        where: { phone: updateData.phone },
      });

      if (existingUser) {
        throw new ConflictException('User with this phone already exists.');
      }
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
      throw new NotFoundException('User not found!');
    }

    const key = generateFileName(file, 'avatars/');
    await this.storageService.uploadFile(key, file);

    user.avatar = key;
    await this.userRepository.save(user);

    return ApiResponse.success(
      { avatar: this.formatAvatarUrl(key) },
      'Аватар успешно обновлен',
    );
  }

  private formatAvatarUrl(avatar: string | null): string | null {
    return avatar ? `${this.avatarBaseUrl}${avatar}` : null;
  }

  private formatUserResponse(user: UserEntity) {
    return {
      id: user.id,
      email: user.email,
      phone: user.phone,
      firstName: user.firstName,
      lastName: user.lastName,
      avatar: this.formatAvatarUrl(user.avatar),
      role: user.role,
    };
  }
}
