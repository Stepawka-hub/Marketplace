import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ProductEntity } from '@/modules/product/entities';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { COMMON_API_PROPERTIES } from '@/common';
import { USER_API_PROPERTIES, USER_ROLES, USER_VALIDATION } from '../constants';
import { TUserRole } from '../types';

@Entity({ name: 'users' })
export class UserEntity {
  @ApiProperty(USER_API_PROPERTIES.ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty(USER_API_PROPERTIES.EMAIL)
  @Column({ name: 'email', length: USER_VALIDATION.EMAIL.MAX, unique: true })
  email: string;

  @ApiProperty(USER_API_PROPERTIES.FIRST_NAME)
  @Column({ name: 'first_name', length: USER_VALIDATION.NAME.MAX })
  firstName: string;

  @ApiProperty(USER_API_PROPERTIES.LAST_NAME)
  @Column({ name: 'last_name', length: USER_VALIDATION.NAME.MAX })
  lastName: string;

  @ApiPropertyOptional(USER_API_PROPERTIES.AVATAR)
  @Column({ type: 'text', nullable: true })
  avatar: string;

  @ApiPropertyOptional(USER_API_PROPERTIES.PHONE)
  @Column({ length: USER_VALIDATION.PHONE.MAX, nullable: true })
  phone: string;

  @ApiProperty(USER_API_PROPERTIES.ROLE)
  @Column({
    type: 'enum',
    enum: USER_ROLES,
    default: USER_ROLES.USER,
  })
  role: TUserRole;

  @ApiProperty(USER_API_PROPERTIES.PRODUCTS)
  @OneToMany(() => ProductEntity, (product) => product.seller)
  products: ProductEntity[];

  @ApiProperty(COMMON_API_PROPERTIES.CREATE_DATE)
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @ApiProperty(COMMON_API_PROPERTIES.UPDATE_DATE)
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
