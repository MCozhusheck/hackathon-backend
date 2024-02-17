/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../common";

export interface DividendVaultInterface extends utils.Interface {
  functions: {
    "claimReward(address,uint256)": FunctionFragment;
    "dividends(address,uint256)": FunctionFragment;
    "newDividend(uint256,uint256,address,uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setStablecoinAddress(address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "withdrawLockedShares(address,uint256)": FunctionFragment;
    "withdrawRemainingFunds(address,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "claimReward"
      | "dividends"
      | "newDividend"
      | "owner"
      | "renounceOwnership"
      | "setStablecoinAddress"
      | "transferOwnership"
      | "withdrawLockedShares"
      | "withdrawRemainingFunds"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "claimReward",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "dividends",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "newDividend",
    values: [BigNumberish, BigNumberish, string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setStablecoinAddress",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawLockedShares",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawRemainingFunds",
    values: [string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "claimReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "dividends", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "newDividend",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setStablecoinAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawLockedShares",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawRemainingFunds",
    data: BytesLike
  ): Result;

  events: {
    "NewDividend(uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "NewDividend"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export interface NewDividendEventObject {
  dividendNumber: BigNumber;
}
export type NewDividendEvent = TypedEvent<[BigNumber], NewDividendEventObject>;

export type NewDividendEventFilter = TypedEventFilter<NewDividendEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface DividendVault extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: DividendVaultInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    claimReward(
      equityToken: string,
      dividendNumber: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    dividends(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, string, boolean] & {
        startBlock: BigNumber;
        endBlock: BigNumber;
        amountToClaim: BigNumber;
        claimed: BigNumber;
        creator: string;
        active: boolean;
      }
    >;

    newDividend(
      startBlock: BigNumberish,
      endBlock: BigNumberish,
      equityTokenAddress: string,
      amountToClaim: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    setStablecoinAddress(
      _stablecoin: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    withdrawLockedShares(
      equityToken: string,
      dividendNumber: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    withdrawRemainingFunds(
      equityTokenAddress: string,
      dividendNumber: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;
  };

  claimReward(
    equityToken: string,
    dividendNumber: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  dividends(
    arg0: string,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber, string, boolean] & {
      startBlock: BigNumber;
      endBlock: BigNumber;
      amountToClaim: BigNumber;
      claimed: BigNumber;
      creator: string;
      active: boolean;
    }
  >;

  newDividend(
    startBlock: BigNumberish,
    endBlock: BigNumberish,
    equityTokenAddress: string,
    amountToClaim: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  setStablecoinAddress(
    _stablecoin: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  withdrawLockedShares(
    equityToken: string,
    dividendNumber: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  withdrawRemainingFunds(
    equityTokenAddress: string,
    dividendNumber: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  callStatic: {
    claimReward(
      equityToken: string,
      dividendNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    dividends(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, string, boolean] & {
        startBlock: BigNumber;
        endBlock: BigNumber;
        amountToClaim: BigNumber;
        claimed: BigNumber;
        creator: string;
        active: boolean;
      }
    >;

    newDividend(
      startBlock: BigNumberish,
      endBlock: BigNumberish,
      equityTokenAddress: string,
      amountToClaim: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setStablecoinAddress(
      _stablecoin: string,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawLockedShares(
      equityToken: string,
      dividendNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawRemainingFunds(
      equityTokenAddress: string,
      dividendNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "NewDividend(uint256)"(dividendNumber?: null): NewDividendEventFilter;
    NewDividend(dividendNumber?: null): NewDividendEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    claimReward(
      equityToken: string,
      dividendNumber: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    dividends(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    newDividend(
      startBlock: BigNumberish,
      endBlock: BigNumberish,
      equityTokenAddress: string,
      amountToClaim: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    setStablecoinAddress(
      _stablecoin: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    withdrawLockedShares(
      equityToken: string,
      dividendNumber: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    withdrawRemainingFunds(
      equityTokenAddress: string,
      dividendNumber: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    claimReward(
      equityToken: string,
      dividendNumber: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    dividends(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    newDividend(
      startBlock: BigNumberish,
      endBlock: BigNumberish,
      equityTokenAddress: string,
      amountToClaim: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    setStablecoinAddress(
      _stablecoin: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    withdrawLockedShares(
      equityToken: string,
      dividendNumber: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    withdrawRemainingFunds(
      equityTokenAddress: string,
      dividendNumber: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;
  };
}
