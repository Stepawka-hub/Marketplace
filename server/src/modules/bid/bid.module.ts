import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BidController } from './bid.controller';
import { BidService } from './bid.service';
import { BidEntity } from './entities';
import { LotModule } from '../lot';
import { UserModule } from '../user';
import { LotEntity } from '../lot/entities';

@Module({
  imports: [
    TypeOrmModule.forFeature([BidEntity, LotEntity]),
    LotModule,
    UserModule,
  ],
  controllers: [BidController],
  providers: [BidService],
  exports: [BidService],
})
export class BidModule {}
