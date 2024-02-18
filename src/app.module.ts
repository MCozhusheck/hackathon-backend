import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PermitsModule } from './permits/permits.module';
import { EthersProviderModule } from './ethers-provider/ethers-provider.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { Permit } from './permits/entities/permit.entity';
import { OrdersModule } from './orders/orders.module';
import { Order } from './orders/entities/order.entity';
import { TransactOrdersModule } from './transact-orders/transact-orders.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'postgres',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      entities: [User, Permit, Order],
      synchronize: true,
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PermitsModule,
    EthersProviderModule,
    AuthModule,
    UsersModule,
    OrdersModule,
    TransactOrdersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
