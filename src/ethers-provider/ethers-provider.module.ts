import { Module } from '@nestjs/common';
import { ethers } from 'ethers';
import { ALCHEMY_PROVIDER, JSON_RPC_PROVIDER } from '../helpers';
import { ConfigService } from '@nestjs/config';
import {
  LocalAccountSigner,
  SmartAccountSigner,
  getChain,
} from '@alchemy/aa-core';
import { AlchemyProvider } from '@alchemy/aa-alchemy';
import {
  LightSmartContractAccount,
  getDefaultLightAccountFactoryAddress,
} from '@alchemy/aa-accounts';

@Module({
  providers: [
    {
      provide: JSON_RPC_PROVIDER,
      useFactory: (config: ConfigService) =>
        new ethers.providers.JsonRpcProvider(config.get('RPC_URL')),
      inject: [ConfigService],
    },
    {
      provide: ALCHEMY_PROVIDER,
      useFactory: (config: ConfigService) => {
        const chain = getChain(80001);
        const eoaSigner: SmartAccountSigner =
          LocalAccountSigner.privateKeyToAccountSigner(
            config.get('PRIVATE_KEY'),
          );

        const provider = new AlchemyProvider({
          apiKey: config.get('ALCHEMY_API_KEY'),
          chain,
        }).connect(
          (rpcClient) =>
            new LightSmartContractAccount({
              rpcClient,
              owner: eoaSigner,
              chain,
              factoryAddress: getDefaultLightAccountFactoryAddress(chain),
            }),
        );

        return provider;
      },
      inject: [ConfigService],
    },
  ],
  exports: [JSON_RPC_PROVIDER, ALCHEMY_PROVIDER],
})
export class EthersProviderModule {}
