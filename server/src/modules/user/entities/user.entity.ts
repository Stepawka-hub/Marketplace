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
import { USER_API_PROPERTIES, USER_VALIDATION } from '../constants';
import { LotEntity } from '@/modules/lot/entities';
import { BidEntity } from '@/modules/bid/entities';
import { SellerRequestEntity } from '@/modules/seller-requests/entities';
import { UserRoleEntity } from './user-roles.entity';
import { decimalToNumber } from '@/common/utils';

@Entity({ name: 'users' })
export class UserEntity {
  @ApiProperty(USER_API_PROPERTIES.ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty(USER_API_PROPERTIES.EMAIL)
  @Column({ name: 'email', length: USER_VALIDATION.EMAIL.MAX, unique: true })
  email: string;

  @ApiPropertyOptional(USER_API_PROPERTIES.PHONE)
  @Column({ length: USER_VALIDATION.PHONE.MAX, nullable: true })
  phone: string;

  @ApiProperty(USER_API_PROPERTIES.FIRST_NAME)
  @Column({ name: 'first_name', length: USER_VALIDATION.NAME.MAX })
  firstName: string;

  @ApiProperty(USER_API_PROPERTIES.LAST_NAME)
  @Column({ name: 'last_name', length: USER_VALIDATION.NAME.MAX })
  lastName: string;

  @ApiProperty(USER_API_PROPERTIES.PASSWORD)
  @Column({ length: USER_VALIDATION.PASSWORD.MAX })
  password: string;

  @ApiPropertyOptional(USER_API_PROPERTIES.AVATAR)
  @Column({ type: 'text', nullable: true })
  avatar: string;

  @ApiProperty(USER_API_PROPERTIES.BALANCE)
  @Column({
    type: 'decimal',
    precision: USER_VALIDATION.BALANCE.PRECISION,
    scale: USER_VALIDATION.BALANCE.SCALE,
    default: USER_VALIDATION.BALANCE.DEFAULT,
    transformer: decimalToNumber,
  })
  balance: number;

  @ApiProperty(USER_API_PROPERTIES.FROZEN_BALANCE)
  @Column({
    name: 'frozen_balance',
    type: 'decimal',
    precision: USER_VALIDATION.FROZEN_BALANCE.PRECISION,
    scale: USER_VALIDATION.FROZEN_BALANCE.SCALE,
    default: USER_VALIDATION.FROZEN_BALANCE.DEFAULT,
    transformer: decimalToNumber,
  })
  frozenBalance: number;

  @OneToMany(() => UserRoleEntity, (userRole) => userRole.user)
  userRoles: UserRoleEntity[];

  @ApiProperty(USER_API_PROPERTIES.PRODUCTS)
  @OneToMany(() => ProductEntity, (product) => product.seller)
  products: ProductEntity[];

  @ApiProperty(USER_API_PROPERTIES.LOTS)
  @OneToMany(() => LotEntity, (lot) => lot.seller)
  lots: LotEntity[];

  @ApiProperty(USER_API_PROPERTIES.BIDS)
  @OneToMany(() => BidEntity, (bid) => bid.user)
  bids: BidEntity[];

  @ApiProperty(USER_API_PROPERTIES.WON_LOTS)
  @OneToMany(() => LotEntity, (lot) => lot.winner)
  wonLots: LotEntity[];

  @OneToMany(() => SellerRequestEntity, (request) => request.user)
  sellerRequests: SellerRequestEntity[];

  @ApiProperty(COMMON_API_PROPERTIES.CREATE_DATE)
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @ApiProperty(COMMON_API_PROPERTIES.UPDATE_DATE)
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
