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
import { Order } from './entities/order.entity';
import { signPermitCreateOrder } from './utils/utils';

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
    console.log('test', user.privateKey);
    const signer = new ethers.Wallet(user.privateKey, provider);

    const equityToken = input.tokenAddress;

    console.log('here 1');

    const pricePerToken = BigNumber.from(input.shares).div(
      BigNumber.from(input.price).mul(BigNumber.from(10).pow(12)),
    );
    console.log('here 2');
    const equityTokenAmount = BigNumber.from(input.shares);
    console.log('here 3');

    const owner = signer.address;

    console.log('here 4');
    const stableTokenAmount = BigNumber.from(input.price);
    console.log('here 5');

    const equityTokenOwner = '0x1639805FBbC9c5039bc56BA516f396B73b480a23'; // ! FIX
    const stablecoinAddress = '0x56343864296972A1573952dd9AD9fb59467442b6'; // ! FIX
    const orderBookAddress = '0x47e70e809371137C9d0eA0624969ba80f5561F35'; // ! FIX

    const block = await provider.getBlock('latest');
    const deadline = block.timestamp + 7 * 86_400;

    console.log({
      equityToken,
      equityTokenAmount,
      owner,
      equityTokenOwner,
      stablecoinAddress,
      orderBookAddress,
      deadline,
    });

    const signature = await signPermitCreateOrder({
      provider,
      equityToken,
      equityTokenOwner,
      pricePerToken,
      equityTokenAmount,
      tokenAddress: stablecoinAddress,
      tokenName: 'TestStableCoin',
      chainId: 80001,
      spender: orderBookAddress,
      value: stableTokenAmount.toString(),
      deadline: deadline,
      owner: owner,
    });

    console.log(signature);
    const permit = new Permit();
    permit.deadline = Number(signature.deadline);
    permit.owner = signature.owner;
    permit.spender = signature.spender;

    return await this.orderRepository.save({
      ...input,
      owner: user,
      permit,
    });
  }

  async getOrder(id: number): Promise<Order> {
    return await this.orderRepository.findOne({ where: { id } });
  }

  async findByTokenAddress(tokenAddress: string): Promise<Order[]> {
    return await this.orderRepository.find({ where: { tokenAddress } });
  }

  async getOrders(): Promise<Order[]> {
    return await this.orderRepository.find();
  }
}
