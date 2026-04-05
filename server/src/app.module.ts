import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getTypeOrmConfig } from '@/config/typeorm';
import { UserModule } from '@/modules/user';
import { ProductModule } from '@/modules/product';
import { StorageModule } from '@/modules/storage';
import { AuthModule } from '@/modules/auth';
import { CartModule } from './modules/bid/bid.module';
import { FavoritesModule } from './modules/favorites/favorites.module';
import { LotModule } from './modules/lot/lot.module';

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
    CartModule,
    FavoritesModule,
    LotModule,
  ],
})
export class AppModule {}
