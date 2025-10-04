import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { USER_ROLES } from '../constants';
import { ProductEntity } from '@/modules/product';

@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'email', length: 128, unique: true })
  email: string;

  @Column({ name: 'first_name', length: 64 })
  firstName: string;

  @Column({ name: 'last_name', length: 64 })
  lastName: string;

  @Column({ type: 'text', nullable: true })
  avatar: string;

  @Column({ length: 20, nullable: true })
  phone: string;

  @Column({
    type: 'enum',
    enum: USER_ROLES,
    default: USER_ROLES.USER,
  })
  role: string;

  @OneToMany(() => ProductEntity, (product) => product.owner)
  products: ProductEntity[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
