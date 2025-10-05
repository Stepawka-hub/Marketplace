import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { API_PROPERTY, USER_ROLES, VALIDATION } from '../constants';
import { ProductEntity } from '@/modules/product';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

@Entity({ name: 'users' })
export class UserEntity {
  @ApiProperty(API_PROPERTY.ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty(API_PROPERTY.EMAIL)
  @Column({ name: 'email', length: VALIDATION.EMAIL.MAX, unique: true })
  email: string;

  @ApiProperty(API_PROPERTY.FIRST_NAME)
  @Column({ name: 'first_name', length: VALIDATION.NAME.MAX })
  firstName: string;

  @ApiProperty(API_PROPERTY.LAST_NAME)
  @Column({ name: 'last_name', length: VALIDATION.NAME.MAX })
  lastName: string;

  @ApiPropertyOptional(API_PROPERTY.AVATAR)
  @Column({ type: 'text', nullable: true })
  avatar: string;

  @ApiPropertyOptional(API_PROPERTY.PHONE)
  @Column({ length: VALIDATION.PHONE.MAX, nullable: true })
  phone: string;

  @ApiProperty(API_PROPERTY.ROLE)
  @Column({
    type: 'enum',
    enum: USER_ROLES,
    default: USER_ROLES.USER,
  })
  role: string;

  @ApiProperty(API_PROPERTY.PRODUCTS)
  @OneToMany(() => ProductEntity, (product) => product.owner)
  products: ProductEntity[];

  @ApiProperty(API_PROPERTY.CREATE_DATE)
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @ApiProperty(API_PROPERTY.UPDATE_DATE)
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
