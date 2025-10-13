import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { ProductEntity } from './product.entity';
import { COMMON_API_PROPERTIES, MEDIA_TYPE, TMediaType } from '@/common';
import {
  PRODUCT_MEDIA_API_PROPERTIES,
  PRODUCT_MEDIA_VALIDATION,
} from '../constants';

@Entity({ name: 'product_media' })
export class ProductMediaEntity {
  @ApiProperty(PRODUCT_MEDIA_API_PROPERTIES.ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty(PRODUCT_MEDIA_API_PROPERTIES.URL)
  @Column({ length: PRODUCT_MEDIA_VALIDATION.URL.MAX })
  url: string;

  @ApiProperty(PRODUCT_MEDIA_API_PROPERTIES.FILENAME)
  @Column({ length: PRODUCT_MEDIA_VALIDATION.FILENAME.MAX })
  filename: string;

  @ApiPropertyOptional(PRODUCT_MEDIA_API_PROPERTIES.IS_PREVIEW)
  @Column({ name: 'is_preview', default: false })
  isPreview: boolean;

  @ApiProperty(PRODUCT_MEDIA_API_PROPERTIES.TYPE)
  @Column({
    type: 'enum',
    enum: MEDIA_TYPE,
    default: MEDIA_TYPE.IMAGE,
  })
  type: TMediaType;

  @ApiProperty(PRODUCT_MEDIA_API_PROPERTIES.PRODUCT)
  @ManyToOne(() => ProductEntity, (product) => product.media, {
    onDelete: 'CASCADE',
    nullable: false,
  })
  @JoinColumn({ name: 'product_id' })
  product: ProductEntity;

  @ApiProperty(COMMON_API_PROPERTIES.CREATED_AT)
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}
