import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProductEntity } from './product.entity';
import { MEDIA_TYPE, TMediaType } from '@/common';

@Entity({ name: 'product_media' })
export class ProductMediaEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  url: string;

  @Column()
  filename: string;

  @Column({ name: 'is_preview', default: false })
  isPreview: boolean;

  @Column({
    type: 'enum',
    enum: MEDIA_TYPE,
    default: MEDIA_TYPE.IMAGE,
  })
  type: TMediaType;

  @ManyToOne(() => ProductEntity, (product) => product.media, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'product_id' })
  product: ProductEntity;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}
