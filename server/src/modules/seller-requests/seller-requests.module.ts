import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SellerRequestsService } from './seller-requests.service';
import { SellerRequestsController } from './seller-requests.controller';
import { SellerRequestEntity } from './entities';
import { RoleEntity, UserEntity, UserRoleEntity } from '../user/entities';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      SellerRequestEntity,
      UserEntity,
      RoleEntity,
      UserRoleEntity,
    ]),
  ],
  controllers: [SellerRequestsController],
  providers: [SellerRequestsService],
})
export class SellerRequestsModule {}
