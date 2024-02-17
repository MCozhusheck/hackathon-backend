import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { Repository } from 'typeorm';
import { ALCHEMY_PROVIDER, JSON_RPC_PROVIDER } from 'src/helpers';
import { ethers, providers } from 'ethers';
import { AlchemyProvider } from '@alchemy/aa-alchemy';
import { CreateOrderDto } from './dto/create-order.dto';
import { Permit } from 'src/permits/entities/permit.entity';
import { User } from 'src/users/entities/user.entity';
import { ConfigService } from '@nestjs/config';
// import { helpers } from 'sira-contracts/dist';

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
    const user = await this.userRepository.findOne({
      where: {
        id: userId as any,
      },
    });

    // const provider = new providers.JsonRpcProvider(this.config.get('RPC_URL'));

    // const equityToken = input.tokenAddress;
    // const pricePerToken =
    //   (BigInt(input.share) / BigInt(input.price)) * BigInt(10 ** 12);
    // const equityTokenAmount = input.share;

    // const owner = await provider.getSigner().getAddress();
    // const stableTokenAmount = BigInt(input.share) * BigInt(10 ** 6);

    // const equityTokenOwner = '0x'; // ! FIX
    // const token = '0x'; // ! FIX
    // const orderBookAddress = '0x'; // ! FIX

    // const block = await provider.getBlock('latest');
    // const deadline = block.timestamp + 7 * 86_400;

    // const t = helpers.signPermitCreateOrder(
    //   provider,
    //   equityToken,
    //   equityTokenOwner,
    //   pricePerToken,
    //   equityTokenAmount,
    //   token,
    //   owner,
    //   orderBookAddress,
    //   stableTokenAmount,
    //   deadline,
    // );

    return await this.orderRepository.save({ ...input, owner: user });
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
