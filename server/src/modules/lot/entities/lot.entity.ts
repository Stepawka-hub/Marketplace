import {
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { UserEntity } from '@/modules/user/entities';
import { ProductEntity } from '@/modules/product/entities';
import { BidEntity } from '@/modules/bid/entities';
import { COMMON_API_PROPERTIES } from '@/common';
import { LOT_API_PROPERTIES, LOT_STATUSES, LOT_VALIDATION } from '../constants';
import { TLotStatus } from '../types';

@Entity('lots')
export class LotEntity {
  @ApiProperty(LOT_API_PROPERTIES.ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty(LOT_API_PROPERTIES.PRODUCT)
  @ManyToOne(() => ProductEntity, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'product_id' })
  product: ProductEntity;

  @ApiProperty(LOT_API_PROPERTIES.START_PRICE)
  @Column({
    name: 'start_price',
    type: 'decimal',
    precision: LOT_VALIDATION.PRICE.PRECISION,
    scale: LOT_VALIDATION.PRICE.SCALE,
    unsigned: true,
  })
  startPrice: number;

  @ApiProperty(LOT_API_PROPERTIES.CURRENT_PRICE)
  @Column({
    name: 'current_price',
    type: 'decimal',
    precision: LOT_VALIDATION.PRICE.PRECISION,
    scale: LOT_VALIDATION.PRICE.SCALE,
    unsigned: true,
  })
  currentPrice: number;

  @ApiProperty(LOT_API_PROPERTIES.MIN_BID_INCREMENT)
  @Column({
    name: 'min_bid_increment',
    type: 'decimal',
    precision: LOT_VALIDATION.PRICE.PRECISION,
    scale: LOT_VALIDATION.PRICE.SCALE,
    unsigned: true,
    default: LOT_VALIDATION.MIN_BID_INCREMENT.DEFAULT,
  })
  minBidIncrement: number;

  @ApiProperty(LOT_API_PROPERTIES.START_TIME)
  @Column({
    name: 'start_time',
    type: 'timestamp',
  })
  startTime: Date;

  @ApiProperty(LOT_API_PROPERTIES.END_TIME)
  @Column({
    name: 'end_time',
    type: 'timestamp',
  })
  endTime: Date;

  @ApiProperty(LOT_API_PROPERTIES.STATUS)
  @Column({
    type: 'enum',
    enum: LOT_STATUSES,
    default: LOT_STATUSES.DRAFT,
  })
  status: TLotStatus;

  @ApiProperty({
    type: () => UserEntity,
    description: 'Продавец',
  })
  @ManyToOne(() => UserEntity, (user) => user.lots, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'seller_id' })
  seller: UserEntity;

  @Column({ name: 'seller_id', type: 'uuid' })
  sellerId: string;

  @ApiPropertyOptional(LOT_API_PROPERTIES.BIDS)
  @OneToMany(() => BidEntity, (bid) => bid.lot)
  bids: BidEntity[];

  @ApiPropertyOptional({
    type: () => UserEntity,
    description: 'Победитель аукциона',
  })
  @ManyToOne(() => UserEntity, { nullable: true })
  @JoinColumn({ name: 'winner_id' })
  winner?: UserEntity;

  @ApiPropertyOptional({
    type: () => UserEntity,
    description: 'Текущий лидер (пользователь с максимальной ставкой)',
  })
  @ManyToOne(() => UserEntity, { nullable: true })
  @JoinColumn({ name: 'current_winner_id' })
  currentWinner?: UserEntity;

  @Column({ name: 'current_winner_id', type: 'uuid', nullable: true })
  currentWinnerId?: string;

  @ApiProperty(COMMON_API_PROPERTIES.CREATE_DATE)
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @ApiProperty(COMMON_API_PROPERTIES.UPDATE_DATE)
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
