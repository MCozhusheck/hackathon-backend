import { AlchemyProvider } from '@alchemy/aa-alchemy';
import { BatchUserOperationCallData } from '@alchemy/aa-core';
import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { ethers } from 'ethers';
import { ALCHEMY_PROVIDER, JSON_RPC_PROVIDER } from 'src/helpers';
import { Order, OrderStatus } from 'src/orders/entities/order.entity';
import { Role } from 'src/roles/role.enum';
import { UsersService } from 'src/users/users.service';

import { In, Repository } from 'typeorm';

import { typechain } from 'sira-contracts';

@Injectable()
export class TransactOrdersService {
  constructor(
    @Inject(ConfigService)
    private readonly configService: ConfigService,
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
    @Inject(UsersService)
    private readonly userService: UsersService,
    @Inject(JSON_RPC_PROVIDER)
    private readonly provider: ethers.providers.JsonRpcProvider,
    @Inject(ALCHEMY_PROVIDER)
    private readonly alchemyProvider: AlchemyProvider,
  ) {}

  async transactAllOrders(orderIds: string[], userId: number) {
    const user = await this.userService.findOneById(userId);
    if (!user && user.role != Role.Admin) {
      throw Error();
    }
    const ids = orderIds.map((id) => +id);
    const ordersToTransact = await this.orderRepository.find({
      where: { id: In(ids) },
      relations: ['owner', 'permit'],
    });
    const tokAddress = this.configService.get('ORDERBOOK_ADDRESS') as string;
    const paymasterAddress = this.configService.get(
      'PAYMASTER_ADDRESS',
    ) as `0x${string}`;

    const Orderbook_factory = typechain.Orderbook__factory;

    const orderBook = Orderbook_factory.connect(tokAddress, this.provider);

    const batchOrders: BatchUserOperationCallData = [];
    const orders = await Promise.all(
      ordersToTransact.map(async (order) => {
        console.log(order);

        const signer = new ethers.Wallet(order.owner.privateKey, this.provider);
        const owner = await signer.getAddress();
        return {
          price: order.price,
          tokenAddress: order.tokenAddress,
          tokenAmount: order.shares,
          owner,
          permit: order.permit,
        };
      }),
    );

    for (const order of orders) {
      const populated = await orderBook.populateTransaction.createOrder(
        order.owner,
        order.price,
        order.tokenAddress,
        order.tokenAmount,
        order.owner,
        order.permit.deadline,
        order.permit.v,
        order.permit.r,
        order.permit.s,
      );

      batchOrders.push({
        data: populated.data as unknown as `0x${string}`,
        target: populated.to as `0x${string}`,
      });
    }

    await this.alchemyProvider
      .withPaymasterMiddleware({
        dummyPaymasterDataMiddleware: async () => {
          return {
            paymasterAndData: paymasterAddress,
          };
        },
        paymasterDataMiddleware: async () => {
          return {
            paymasterAndData: paymasterAddress,
          };
        },
      })
      .sendUserOperation(batchOrders);

    await Promise.all(
      ordersToTransact.map(async (order) => {
        order.status = OrderStatus.PpraApproved;
        await this.orderRepository.save(order);
      }),
    );
  }
}
