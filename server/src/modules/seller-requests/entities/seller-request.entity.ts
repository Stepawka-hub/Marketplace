import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { UserEntity } from '@/modules/user/entities';
import {
  SELLER_REQUEST_API_PROPERTIES,
  SELLER_REQUEST_STATUSES,
  REGISTRATION_TYPES,
  SELLER_REQUEST_VALIDATION,
} from '../constants';
import { COMMON_API_PROPERTIES } from '@/common';
import { TRegistrationType } from '../types';

@Entity('seller_requests')
export class SellerRequestEntity {
  @ApiProperty(SELLER_REQUEST_API_PROPERTIES.ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty(SELLER_REQUEST_API_PROPERTIES.USER_ID)
  @Column({ name: 'user_id', type: 'uuid' })
  userId: string;

  @ApiProperty(SELLER_REQUEST_API_PROPERTIES.USER)
  @ManyToOne(() => UserEntity, (user) => user.sellerRequests)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;

  @ApiProperty(SELLER_REQUEST_API_PROPERTIES.REGISTRATION_TYPE)
  @Column({
    type: 'enum',
    enum: REGISTRATION_TYPES,
    default: REGISTRATION_TYPES.IP,
  })
  registrationType: TRegistrationType;

  @ApiProperty(SELLER_REQUEST_API_PROPERTIES.COMPANY_NAME)
  @Column({
    name: 'company_name',
    length: SELLER_REQUEST_VALIDATION.COMPANY_NAME.MAX,
  })
  companyName: string;

  @ApiProperty(SELLER_REQUEST_API_PROPERTIES.INN)
  @Column({
    length: SELLER_REQUEST_VALIDATION.INN.MAX,
  })
  inn: string;

  @ApiProperty(SELLER_REQUEST_API_PROPERTIES.PHONE)
  @Column({
    length: SELLER_REQUEST_VALIDATION.PHONE.MAX,
  })
  phone: string;

  @ApiProperty(SELLER_REQUEST_API_PROPERTIES.EMAIL)
  @Column({
    length: SELLER_REQUEST_VALIDATION.EMAIL.MAX,
  })
  email: string;

  @ApiPropertyOptional(SELLER_REQUEST_API_PROPERTIES.DESCRIPTION)
  @Column({
    nullable: true,
    type: 'text',
  })
  description: string;

  @ApiProperty(SELLER_REQUEST_API_PROPERTIES.STATUS)
  @Column({
    default: SELLER_REQUEST_STATUSES.PENDING,
    length: SELLER_REQUEST_VALIDATION.STATUS.MAX,
  })
  status: string;

  @ApiPropertyOptional(SELLER_REQUEST_API_PROPERTIES.REJECTION_REASON)
  @Column({
    name: 'rejection_reason',
    nullable: true,
    length: SELLER_REQUEST_VALIDATION.REJECTION_REASON.MAX,
  })
  rejectionReason: string;

  @ApiProperty(COMMON_API_PROPERTIES.CREATED_AT)
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @ApiProperty(COMMON_API_PROPERTIES.UPDATED_AT)
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
