import {
  Body,
  Controller,
  Get,
  Param,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Put()
  @UseGuards(AuthGuard)
  create(@Body() createOrderDto: CreateOrderDto, @Req() req: Request) {
    console.log(req);
    const userId = (req as any).user.sub;

    return this.ordersService.create(createOrderDto, userId);
  }

  @Get('tokenAddress/:tokenAddress')
  findOneByTokenAddress(@Param('tokenAddress') tokenAddress: string) {
    return this.ordersService.findByTokenAddress(tokenAddress);
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
