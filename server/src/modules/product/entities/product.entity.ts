import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
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
import { UserEntity } from '@/modules/user/entities';
import { COMMON_API_PROPERTIES } from '@/common';
import { ProductMediaEntity } from './product-media.entity';
import { PRODUCT_API_PROPERTIES, PRODUCT_VALIDATION } from '../constants';

@Entity({ name: 'products' })
export class ProductEntity {
  @ApiProperty(PRODUCT_API_PROPERTIES.ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty(PRODUCT_API_PROPERTIES.NAME)
  @Column({ length: PRODUCT_VALIDATION.NAME.MAX })
  name: string;

  @ApiProperty(PRODUCT_API_PROPERTIES.SHORT_DESCRIPTION)
  @Column({
    name: 'short_description',
    length: PRODUCT_VALIDATION.SHORT_DESCRIPTION.MAX,
  })
  shortDescription: string;

  @ApiPropertyOptional(PRODUCT_API_PROPERTIES.DESCRIPTION)
  @Column({ type: 'text', nullable: true })
  description?: string;

  // Todo: Продумать категории
  @ApiProperty(PRODUCT_API_PROPERTIES.CATEGORY)
  @Column({ length: PRODUCT_VALIDATION.CATEGORY.MAX })
  category: string;

  @ApiPropertyOptional(PRODUCT_API_PROPERTIES.MEDIA)
  @OneToMany(() => ProductMediaEntity, (media) => media.product)
  media: ProductMediaEntity[];

  @ApiProperty(PRODUCT_API_PROPERTIES.SELLER)
  @ManyToOne(() => UserEntity, (user) => user.products, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'seller_id' })
  seller: UserEntity;

  @ApiProperty(COMMON_API_PROPERTIES.CREATE_DATE)
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @ApiProperty(COMMON_API_PROPERTIES.UPDATE_DATE)
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
