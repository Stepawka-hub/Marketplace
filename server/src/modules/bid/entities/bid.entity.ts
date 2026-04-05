import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserEntity } from '@/modules/user/entities';
import { LotEntity } from '@/modules/lot/entities';
import { ApiProperty } from '@nestjs/swagger';
import { COMMON_API_PROPERTIES } from '@/common';
import { BID_API_PROPERTIES, BID_STATUSES, BID_VALIDATION } from '../constants';
import { TBidStatus } from '../types';

@Entity('bids')
export class BidEntity {
  @ApiProperty(BID_API_PROPERTIES.ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty(BID_API_PROPERTIES.USER)
  @ManyToOne(() => UserEntity, (user) => user.bids, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;

  @ApiProperty(BID_API_PROPERTIES.USER_ID)
  @Column({ name: 'user_id', type: 'uuid' })
  userId: string;

  @ApiProperty(BID_API_PROPERTIES.LOT)
  @ManyToOne(() => LotEntity, (lot) => lot.bids, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'lot_id' })
  lot: LotEntity;

  @ApiProperty(BID_API_PROPERTIES.LOT_ID)
  @Column({ name: 'lot_id', type: 'uuid' })
  lotId: string;

  @ApiProperty(BID_API_PROPERTIES.AMOUNT)
  @Column({
    type: 'decimal',
    precision: BID_VALIDATION.AMOUNT.PRECISION,
    scale: BID_VALIDATION.AMOUNT.SCALE,
    unsigned: true,
  })
  amount: number;

  @ApiProperty(BID_API_PROPERTIES.STATUS)
  @Column({
    type: 'enum',
    enum: BID_STATUSES,
    default: BID_STATUSES.ACTIVE,
  })
  status: TBidStatus;

  @ApiProperty(COMMON_API_PROPERTIES.CREATE_DATE)
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @ApiProperty(COMMON_API_PROPERTIES.UPDATE_DATE)
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
