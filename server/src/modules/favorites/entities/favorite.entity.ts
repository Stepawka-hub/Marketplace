import {
  Entity,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  PrimaryColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { UserEntity } from '../../user/entities/user.entity';
import { ProductEntity } from '../../product/entities/product.entity';
import { FAVORITES_API_PROPERTIES } from '../constants/favorites-api.constants';
import { COMMON_API_PROPERTIES } from '@/common';

@Entity('favorites')
export class FavoriteEntity {
  @PrimaryColumn({ type: 'uuid', name: 'user_id' })
  userId: string;

  @PrimaryColumn({ type: 'uuid', name: 'product_id' })
  productId: string;

  @ApiProperty(FAVORITES_API_PROPERTIES.USER)
  @ManyToOne(() => UserEntity, { onDelete: 'CASCADE', nullable: false })
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;

  @ApiProperty(FAVORITES_API_PROPERTIES.PRODUCT)
  @ManyToOne(() => ProductEntity, { onDelete: 'CASCADE', nullable: false })
  @JoinColumn({ name: 'product_id' })
  product: ProductEntity;

  @ApiProperty(COMMON_API_PROPERTIES.CREATE_DATE)
  @CreateDateColumn()
  createdAt: Date;
}
