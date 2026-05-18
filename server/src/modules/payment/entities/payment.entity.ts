import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { UserEntity } from '@/modules/user/entities';
import { PAYMENT_STATUSES } from '../constants';
import { TPaymentStatus } from '../types';
import { decimalToNumber } from '@/common/utils';

@Entity('payments')
export class PaymentEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    name: 'user_id',
  })
  userId: string;

  @ManyToOne(() => UserEntity)
  @JoinColumn({
    name: 'user_id',
  })
  user: UserEntity;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    transformer: decimalToNumber,
  })
  amount: number;

  @Column({
    name: 'yookassa_payment_id',
    unique: true,
  })
  yookassaPaymentId: string;

  @Column({
    enum: PAYMENT_STATUSES,
    default: PAYMENT_STATUSES.PENDING,
  })
  status: TPaymentStatus;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}
