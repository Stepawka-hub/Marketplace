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
import { UserEntity } from '@/modules/user';
import { ProductImageEntity } from './product-image.entity';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { PRODUCT_API_PROPERTIES } from '../constants';
import { COMMON_API_PROPERTIES } from '@/common';

@Entity({ name: 'products' })
export class ProductEntity {
  @ApiProperty(PRODUCT_API_PROPERTIES.ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty(PRODUCT_API_PROPERTIES.NAME)
  @Column({ length: 255 })
  name: string;

  @ApiProperty(PRODUCT_API_PROPERTIES.SHORT_DESCRIPTION)
  @Column({ name: 'short_description', length: 255 })
  shortDescription: string;

  @ApiPropertyOptional(PRODUCT_API_PROPERTIES.DESCRIPTION)
  @Column({ type: 'text' })
  description: string;

  @ApiProperty(PRODUCT_API_PROPERTIES.CATEGORY)
  @Column({ length: 32 })
  category: string;

  @ApiProperty(PRODUCT_API_PROPERTIES.PRICE)
  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    unsigned: true,
  })
  price: number;

  @ApiProperty(PRODUCT_API_PROPERTIES.RATING)
  @Column({
    type: 'decimal',
    precision: 3,
    scale: 2,
    default: 0.0,
    unsigned: true,
  })
  rating: number;

  @ApiProperty(PRODUCT_API_PROPERTIES.IMAGES)
  @OneToMany(() => ProductImageEntity, (image) => image.product)
  images: ProductImageEntity[];

  @ApiProperty(PRODUCT_API_PROPERTIES.OWNER)
  @ManyToOne(() => UserEntity, (user) => user.products, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'owner_id' })
  owner: UserEntity;

  @ApiProperty(COMMON_API_PROPERTIES.CREATE_DATE)
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @ApiProperty(COMMON_API_PROPERTIES.UPDATE_DATE)
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
