import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, LessThan } from 'typeorm';

import { UserService } from '@/modules/user';
import { BidEntity } from '../bid/entities';

import { LotEntity } from './entities';

import { BID_STATUSES } from '../bid/constants';
import { BALANCE_ACTIONS } from '../user/constants';
import { LOT_STATUSES } from './constants';

@Injectable()
export class LotCronService {
  private readonly logger = new Logger(LotCronService.name);

  constructor(
    @InjectRepository(LotEntity)
    private readonly lotRepository: Repository<LotEntity>,
    @InjectRepository(BidEntity)
    private readonly bidRepository: Repository<BidEntity>,
    private readonly userService: UserService,
  ) {}

  @Cron(CronExpression.EVERY_MINUTE)
  async closeExpiredLots() {
    this.logger.log('Поиск истёкших лотов...');

    const expiredLots = await this.lotRepository.find({
      where: {
        status: LOT_STATUSES.ACTIVE,
        endTime: LessThan(new Date()),
      },
      relations: ['bids', 'bids.user', 'seller'],
    });

    this.logger.log(`Найдено ${expiredLots.length} законченных лотов`);

    for (const lot of expiredLots) {
      try {
        // Находим самую большую ставку
        let highestBid: BidEntity | null = null;
        for (const bid of lot.bids || []) {
          if (!highestBid || bid.amount > highestBid.amount) {
            highestBid = bid;
          }
        }

        if (highestBid && highestBid.amount > 0 && highestBid.userId) {
          // Есть победитель — завершаем лот
          lot.status = LOT_STATUSES.COMPLETED;
          lot.currentWinnerId = highestBid.userId;

          // Переводим деньги от победителя продавцу
          const winnerId = highestBid.userId;
          const sellerId = lot.sellerId;
          const amount = highestBid.amount;

          // Размораживаем деньги у победителя
          await this.userService.updateFrozenBalance(
            winnerId,
            amount,
            BALANCE_ACTIONS.UNFREEZE,
          );

          // Списываем с баланса победителя
          await this.userService.updateBalance(winnerId, -amount);

          // Зачисляем продавцу
          await this.userService.updateBalance(sellerId, amount);

          this.logger.log(
            `Лот ${lot.id} завершён. Победитель: ${winnerId}, Продавец: ${sellerId}, Сумма: ${amount}`,
          );

          // Обновляем статус ставки победителя
          highestBid.status = BID_STATUSES.WINNING;
          await this.bidRepository.save(highestBid);
        } else {
          // Ставок не было — лот истёк
          lot.status = LOT_STATUSES.EXPIRED;
          this.logger.log(`Лот ${lot.id} истёк (нет ставок)`);
        }

        // Меняем статус всех оставшихся активных ставок на LOST и размораживаем деньги
        for (const bid of lot.bids || []) {
          if (bid.id !== highestBid?.id && bid.status === BID_STATUSES.ACTIVE) {
            bid.status = BID_STATUSES.LOST;
            await this.bidRepository.save(bid);

            // Возвращаем замороженные деньги проигравшим
            await this.userService.updateFrozenBalance(
              bid.userId,
              bid.amount,
              BALANCE_ACTIONS.UNFREEZE,
            );
          }
        }

        await this.lotRepository.save(lot);
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : 'Unknown error';
        this.logger.error(`Failed to close lot ${lot.id}: ${errorMessage}`);
      }
    }
  }
}
