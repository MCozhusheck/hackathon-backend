import { AlchemyProvider } from '@alchemy/aa-alchemy';
import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { BigNumber, ethers, providers } from 'ethers';
import { ALCHEMY_PROVIDER, JSON_RPC_PROVIDER } from 'src/helpers';
import { Permit } from 'src/permits/entities/permit.entity';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order, OrderStatus } from './entities/order.entity';
import { signPermitCreateOrder } from './utils/utils';

import { deployments } from 'sira-contracts';
import { signPermitApproveOrder } from 'sira-contracts/dist/helpers';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
    @InjectRepository(Permit)
    private readonly permitRepository: Repository<Permit>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @Inject(JSON_RPC_PROVIDER)
    private readonly jsonRpcProvider: ethers.providers.JsonRpcProvider,
    @Inject(ALCHEMY_PROVIDER)
    private readonly alchemyProvider: AlchemyProvider,
    @Inject(ConfigService) private readonly config: ConfigService,
  ) {}

  async create(input: CreateOrderDto, userId: number): Promise<Order> {
    console.log(input);
    const user = await this.userRepository.findOne({
      where: {
        id: userId as any,
      },
    });

    const provider = new providers.JsonRpcProvider(
      'https://polygon-mumbai-bor.publicnode.com',
    );

    const signer = new ethers.Wallet(user.privateKey, provider);

    const equityToken = input.tokenAddress;

    const pricePerToken = BigNumber.from(input.shares).div(
      BigNumber.from(input.price).mul(BigNumber.from(10).pow(12)),
    );

    const equityTokenAmount = BigNumber.from(input.shares);

    const owner = signer.address;

    const stableTokenAmount = BigNumber.from(input.price);

    const dep = deployments.getDeployments(80001);

    const equityTokenOwner = '0x1639805FBbC9c5039bc56BA516f396B73b480a23'; // deployer of the token
    const stablecoinAddress = dep.StableCoin;
    const orderBookAddress = dep.Orderbook;

    const block = await provider.getBlock('latest');
    const deadline = block.timestamp + 7 * 86_400;

    // const signature = await signPermitCreateOrder({
    //   provider: signer,
    //   equityToken,
    //   equityTokenOwner,
    //   pricePerToken,
    //   equityTokenAmount,
    //   tokenAddress: stablecoinAddress,
    //   tokenName: 'TestStableCoin',
    //   chainId: 80001,
    //   spender: orderBookAddress,
    //   value: stableTokenAmount.toString(),
    //   deadline: deadline,
    //   owner: owner,
    // });

    const signature = await signPermitApproveOrder(
      signer,
      equityToken,
      'TestStableCoin',
      80001,
      stablecoinAddress,
      owner,
      orderBookAddress,
      stableTokenAmount.toString(),
      deadline,
    );

    const permit = new Permit();
    permit.deadline = Number(signature.deadline);
    permit.owner = signature.owner;
    permit.spender = signature.spender;

    permit.r = signature.r;
    permit.s = signature.s;
    permit.v = signature.v;
    permit.nonce = 0; // todo

    const pp = await this.permitRepository.save(permit);

    const order = new Order();
    order.owner = user;
    order.permit = pp;
    order.price = input.price;
    order.shares = input.shares;
    order.tokenAddress = input.tokenAddress;

    console.log('order', order);

    return await this.orderRepository.save(order);
  }

  async getOrder(id: number): Promise<Order> {
    return await this.orderRepository.findOne({ where: { id } });
  }

  async findByTokenAddress(tokenAddress: string): Promise<Order[]> {
    return await this.orderRepository.find({
      where: { tokenAddress, status: OrderStatus.PpraApproved },
    });
  }

  async getOrders(): Promise<Order[]> {
    return await this.orderRepository.find();
  }
}
