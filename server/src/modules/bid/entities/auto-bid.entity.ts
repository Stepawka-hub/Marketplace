import { LotEntity } from '@/modules/lot/entities';
import { UserEntity } from '@/modules/user/entities';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('auto_bids')
export class AutoBidEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'user_id' })
  userId: string;

  @Column({ name: 'lot_id' })
  lotId: string;

  @Column({ name: 'max_amount' })
  maxAmount: number;

  @Column({ default: true })
  active: boolean;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;

  @ManyToOne(() => LotEntity)
  @JoinColumn({ name: 'lot_id' })
  lot: LotEntity;
}
