import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getTypeOrmConfig } from '@/config/typeorm';
import { UserModule } from '@/modules/user';
import { ProductModule } from '@/modules/product';
import { StorageModule } from '@/modules/storage';
import { AuthModule } from '@/modules/auth';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: getTypeOrmConfig,
      inject: [ConfigService],
    }),
    UserModule,
    AuthModule,
    ProductModule,
    StorageModule,
  ],
})
export class AppModule {}
