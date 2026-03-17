import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  PrimaryColumn,
} from 'typeorm';
import { UserEntity } from '@/modules/user/entities';
import { ProductEntity } from '@/modules/product/entities';
import { ApiProperty } from '@nestjs/swagger';
import { COMMON_API_PROPERTIES } from '@/common';
import { CART_API_PROPERTIES } from '../constants/cart-api.constants';

@Entity('cart')
export class CartEntity {
  @PrimaryColumn({ type: 'uuid', name: 'user_id' })
  @Column({ name: 'user_id', type: 'uuid' })
  userId: string;

  @PrimaryColumn({ type: 'uuid', name: 'product_id' })
  productId: string;

  @ApiProperty(CART_API_PROPERTIES.USER)
  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;

  @ApiProperty(CART_API_PROPERTIES.PRODUCT)
  @ManyToOne(() => ProductEntity)
  @JoinColumn({ name: 'product_id' })
  product: ProductEntity;

  @ApiProperty(CART_API_PROPERTIES.COUNT)
  @Column({ type: 'int', default: 1 })
  count: number;

  @ApiProperty(COMMON_API_PROPERTIES.CREATE_DATE)
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @ApiProperty(COMMON_API_PROPERTIES.UPDATE_DATE)
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
