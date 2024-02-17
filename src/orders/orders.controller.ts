import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Put()
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.ordersService.create(createOrderDto);
  }

  @Get('tokenAddress/:tokenAddress')
  findOneByTokenAddress(@Param('tokenAddress') tokenAddress: string) {
    return this.ordersService.findOneByTokenAddress(tokenAddress);
  }

  @Get()
  findAll() {
    return this.ordersService.getOrders();
  }

  @Get(':id')
  findOne(id: number) {
    return this.ordersService.getOrder(id);
  }
}
