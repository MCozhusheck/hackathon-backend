import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { TransactOrdersService } from './transact-orders.service';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('transact-orders')
export class TransactOrdersController {
  constructor(private readonly transactService: TransactOrdersService) {}

  @Post('all')
  @UseGuards(AuthGuard)
  TransactAllOrders(@Req() req) {
    this.transactService.transactAllOrders(+req.user.id);
  }
}
