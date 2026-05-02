import { In, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import {
  Injectable,
  NotFoundException,
  BadRequestException,
  ConflictException,
  ForbiddenException,
} from '@nestjs/common';
import { ApiPaginatedResponse, ApiResponse, PaginationDto } from '@/common';
import { SellerRequestEntity } from './entities';
import {
  RoleEntity,
  UserEntity,
  UserRoleEntity,
} from '@/modules/user/entities';
import { CreateSellerRequestDto, UpdateSellerRequestDto } from './dto';
import { USER_ROLES } from '../user/constants';
import { SELLER_REQUEST_STATUSES } from './constants';

@Injectable()
export class SellerRequestsService {
  constructor(
    @InjectRepository(SellerRequestEntity)
    private readonly sellerRequestRepository: Repository<SellerRequestEntity>,
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    @InjectRepository(RoleEntity)
    private readonly roleRepository: Repository<RoleEntity>,
    @InjectRepository(UserRoleEntity)
    private readonly userRoleRepository: Repository<UserRoleEntity>,
  ) {}

  async create(userId: string, dto: CreateSellerRequestDto) {
    const existing = await this.sellerRequestRepository.findOne({
      where: {
        userId,
        status: In([
          SELLER_REQUEST_STATUSES.PENDING,
          SELLER_REQUEST_STATUSES.APPROVED,
        ]),
      },
    });

    if (existing) {
      throw new ConflictException('У вас уже есть активная заявка');
    }

    const user = await this.userRepository.findOne({
      where: { id: userId },
      relations: ['userRoles', 'userRoles.role'],
    });

    if (!user) {
      throw new NotFoundException('Пользователь не найден!');
    }

    const isVendor = user.userRoles.some(
      (ur) => ur.role.name === USER_ROLES.VENDOR,
    );

    if (isVendor) {
      throw new ForbiddenException('Вы уже являетесь продавцом');
    }

    const request = this.sellerRequestRepository.create({
      userId,
      ...dto,
    });

    const saved = await this.sellerRequestRepository.save(request);

    return ApiResponse.success(saved, 'Заявка успешно отправлена');
  }

  async getLatestRequestStatus(userId: string) {
    const latestRequest = await this.sellerRequestRepository.findOne({
      where: { userId },
      order: { createdAt: 'DESC' },
    });

    if (!latestRequest) {
      return ApiResponse.success({ hasRequest: false }, 'Заявки не найдены');
    }

    return ApiResponse.success(
      {
        hasRequest: true,
        id: latestRequest.id,
        status: latestRequest.status,
        rejectionReason: latestRequest.rejectionReason,
        createdAt: latestRequest.createdAt,
      },
      'Статус заявки получен',
    );
  }

  async getAllRequests(paginationDto: PaginationDto) {
    const { page = 1, limit = 10 } = paginationDto;
    const skip = (page - 1) * limit;

    const [requests, total] = await this.sellerRequestRepository.findAndCount({
      relations: ['user'],
      select: {
        user: {
          id: true,
          firstName: true,
          lastName: true,
          avatar: true,
        },
      },
      order: {
        createdAt: 'DESC',
      },
      skip,
      take: limit,
    });

    return ApiPaginatedResponse.success(
      requests,
      total,
      page,
      limit,
      'Заявки успешно получены',
    );
  }

  async updateStatus(id: string, dto: UpdateSellerRequestDto) {
    const request = await this.sellerRequestRepository.findOne({
      where: { id },
      relations: ['user'],
    });

    if (!request) {
      throw new NotFoundException('Заявка не найдена');
    }

    if (request.status !== SELLER_REQUEST_STATUSES.PENDING) {
      throw new BadRequestException('Заявка уже обработана');
    }

    request.status = dto.status;

    if (dto.rejectionReason) {
      request.rejectionReason = dto.rejectionReason;
    }

    await this.sellerRequestRepository.save(request);

    // Если заявка одобрена - добавляем роль VENDOR пользователю
    if (dto.status === SELLER_REQUEST_STATUSES.APPROVED) {
      const vendorRole = await this.roleRepository.findOne({
        where: { name: USER_ROLES.VENDOR },
      });

      if (!vendorRole) {
        throw new NotFoundException(`Роль ${USER_ROLES.VENDOR} не найдена`);
      }

      const existingUserRole = await this.userRoleRepository.findOne({
        where: {
          userId: request.userId,
          roleId: vendorRole.id,
        },
      });

      if (!existingUserRole) {
        await this.userRoleRepository.save({
          userId: request.userId,
          roleId: vendorRole.id,
        });
      }
    }

    return ApiResponse.success(request, 'Статус заявки обновлён');
  }
}
