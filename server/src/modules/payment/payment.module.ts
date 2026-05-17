import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { PaymentController } from './payment.controller';
import { PaymentService } from './payment.service';
import { PaymentEntity } from './entities';
import { UserEntity } from '../user/entities';
import { YookassaModule } from 'nestjs-yookassa';

@Module({
  imports: [
    TypeOrmModule.forFeature([PaymentEntity, UserEntity]),
    YookassaModule,
  ],
  controllers: [PaymentController],
  providers: [PaymentService],
})
export class PaymentModule {}
