import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { TransactOrdersService } from './transact-orders.service';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('transact-orders')
export class TransactOrdersController {
  constructor(private readonly transactService: TransactOrdersService) {}

  @Post('all')
  @UseGuards(AuthGuard)
  TransactAllOrders(@Req() req, @Body('orderIds') orderIds: string[]) {
    this.transactService.transactAllOrders(orderIds, Number(req.user.sub));
  }
}
