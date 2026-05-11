import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getTypeOrmConfig } from '@/config/typeorm';
import { getYokassaConfig } from '@/config/yookassa';
import { UserModule } from '@/modules/user';
import { ProductModule } from '@/modules/product';
import { StorageModule } from '@/modules/storage';
import { AuthModule } from '@/modules/auth';
import { BidModule } from '@/modules/bid';
import { FavoritesModule } from '@/modules/favorites';
import { LotModule } from '@/modules/lot';
import { SellerRequestsModule } from '@/modules/seller-requests';
import { StatsModule } from '@/modules/stats';
import { PaymentModule } from '@/modules/payment';
import { YookassaModule } from 'nestjs-yookassa';

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
    YookassaModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: getYokassaConfig,
      inject: [ConfigService],
    }),
    UserModule,
    AuthModule,
    ProductModule,
    StorageModule,
    BidModule,
    FavoritesModule,
    LotModule,
    SellerRequestsModule,
    StatsModule,
    PaymentModule,
  ],
})
export class AppModule {}
