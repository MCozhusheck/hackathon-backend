import { Module } from '@nestjs/common';
import { ethers } from 'ethers';
import { JSON_RPC_PROVIDER } from '../helpers';
import { ConfigService } from '@nestjs/config';

@Module({
  providers: [
    {
      provide: JSON_RPC_PROVIDER,
      useFactory: (config: ConfigService) =>
        new ethers.providers.JsonRpcProvider(config.get('RPC_URL')),
      inject: [ConfigService],
    },
  ],
  exports: [JSON_RPC_PROVIDER],
})
export class EthersProviderModule {}
