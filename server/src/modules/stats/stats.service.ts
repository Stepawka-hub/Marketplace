import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Between } from 'typeorm';
import { subDays, format, addDays } from 'date-fns';
import { UserEntity } from '@/modules/user/entities';
import { LotEntity } from '@/modules/lot/entities';
import { SellerRequestEntity } from '@/modules/seller-requests/entities';
import { LOT_STATUSES } from '@/modules/lot/constants';
import { SELLER_REQUEST_STATUSES } from '@/modules/seller-requests/constants';
import { ApiResponse } from '@/common';

@Injectable()
export class StatsService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    @InjectRepository(LotEntity)
    private readonly lotRepository: Repository<LotEntity>,
    @InjectRepository(SellerRequestEntity)
    private readonly sellerRequestRepository: Repository<SellerRequestEntity>,
  ) {}

  async getSummary() {
    const [users, activeLots, pendingRequests] = await Promise.all([
      this.userRepository.count(),
      this.lotRepository.count({ where: { status: LOT_STATUSES.ACTIVE } }),
      this.sellerRequestRepository.count({
        where: { status: SELLER_REQUEST_STATUSES.PENDING },
      }),
    ]);

    return ApiResponse.success(
      { users, activeLots, pendingRequests },
      'Сводная статистика получена',
    );
  }

  async getRegistrations(days: number = 7) {
    const now = new Date();
    const registrations: { date: string; count: number }[] = [];

    for (let i = days - 1; i >= 0; i--) {
      const date = subDays(now, i);
      const nextDate = addDays(date, 1);

      const count = await this.userRepository.count({
        where: {
          createdAt: Between(date, nextDate),
        },
      });

      registrations.push({
        date: format(date, 'dd.MM'),
        count,
      });
    }

    return ApiResponse.success(
      registrations,
      'Статистика регистраций получена',
    );
  }

  async getLotsDistribution() {
    const [active, completed, expired] = await Promise.all([
      this.lotRepository.count({
        where: {
          status: LOT_STATUSES.ACTIVE,
        },
      }),
      this.lotRepository.count({
        where: {
          status: LOT_STATUSES.COMPLETED,
        },
      }),
      this.lotRepository.count({
        where: {
          status: LOT_STATUSES.EXPIRED,
        },
      }),
    ]);

    return ApiResponse.success(
      { active, completed, expired },
      'Распределение лотов получено',
    );
  }
}
