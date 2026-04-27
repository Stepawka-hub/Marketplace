import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { RoleSeederService } from './role-seeder.service';
import { UserController } from './user.controller';
import { StorageModule } from '../storage';
import { RoleEntity, UserEntity, UserRoleEntity } from './entities';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity, RoleEntity, UserRoleEntity]),
    StorageModule,
  ],
  controllers: [UserController],
  providers: [UserService, RoleSeederService],
  exports: [UserService],
})
export class UserModule {}
