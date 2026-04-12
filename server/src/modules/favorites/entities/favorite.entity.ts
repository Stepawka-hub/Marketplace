import {
  Entity,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  PrimaryColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { LotEntity } from '@/modules/lot/entities';
import { UserEntity } from '../../user/entities';
import { FAVORITES_API_PROPERTIES } from '../constants/favorites-api.constants';
import { COMMON_API_PROPERTIES } from '@/common';

@Entity('favorites')
export class FavoriteEntity {
  @PrimaryColumn({ type: 'uuid', name: 'user_id' })
  userId: string;

  @PrimaryColumn({ type: 'uuid', name: 'lot_id' })
  lotId: string;

  @ApiProperty(FAVORITES_API_PROPERTIES.USER)
  @ManyToOne(() => UserEntity, { onDelete: 'CASCADE', nullable: false })
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;

  @ApiProperty(FAVORITES_API_PROPERTIES.LOT)
  @ManyToOne(() => LotEntity, { onDelete: 'CASCADE', nullable: false })
  @JoinColumn({ name: 'lot_id' })
  lot: LotEntity;

  @ApiProperty(COMMON_API_PROPERTIES.CREATE_DATE)
  @CreateDateColumn()
  createdAt: Date;
}
