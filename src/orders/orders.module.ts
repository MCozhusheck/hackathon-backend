import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { OrdersController } from './orders.controller';
import { EthersProviderModule } from 'src/ethers-provider/ethers-provider.module';

@Module({
  imports: [TypeOrmModule.forFeature([Order]), EthersProviderModule],
  providers: [OrdersService],
  controllers: [OrdersController],
})
export class OrdersModule {}
