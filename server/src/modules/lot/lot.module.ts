import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { LotService } from './lot.service';
import { LotController } from './lot.controller';
import { LotEntity } from './entities';
import { ProductModule } from '@/modules/product';
import { BidEntity } from '../bid/entities';
import { StorageModule } from '../storage';
import { UserModule } from '../user';
import { LotCronService } from './lot-cron.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([LotEntity, BidEntity]),
    ProductModule,
    StorageModule,
    UserModule,
  ],
  controllers: [LotController],
  providers: [LotService, LotCronService],
  exports: [LotService],
})
export class LotModule {}
