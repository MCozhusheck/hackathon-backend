import { Module } from '@nestjs/common';
import { TransactOrdersService } from './transact-orders.service';
import { TransactOrdersController } from './transact-orders.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from 'src/orders/entities/order.entity';
import { EthersProviderModule } from 'src/ethers-provider/ethers-provider.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Order]),
    EthersProviderModule,
    UsersModule,
  ],
  providers: [TransactOrdersService],
  controllers: [TransactOrdersController],
})
export class TransactOrdersModule {}
