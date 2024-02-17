import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { Repository } from 'typeorm';
import { ALCHEMY_PROVIDER, JSON_RPC_PROVIDER } from 'src/helpers';
import { ethers } from 'ethers';
import { AlchemyProvider } from '@alchemy/aa-alchemy';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
    @Inject(JSON_RPC_PROVIDER)
    private readonly jsonRpcProvider: ethers.providers.JsonRpcProvider,
    @Inject(ALCHEMY_PROVIDER)
    private readonly alchemyProvider: AlchemyProvider,
  ) {}

  async create(input: CreateOrderDto): Promise<Order> {
    // get user from session
    console.log(input);

    return await this.orderRepository.save({ ...input, owner: 'user' });
  }

  async getOrder(id: number): Promise<Order> {
    return await this.orderRepository.findOne({ where: { id } });
  }

  async findOneByTokenAddress(tokenAddress: string): Promise<Order> {
    return await this.orderRepository.findOne({ where: { tokenAddress } });
  }

  async getOrders(): Promise<Order[]> {
    return await this.orderRepository.find();
  }
}
