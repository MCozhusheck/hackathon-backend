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
} from "../../common";

export interface TOKv2Interface extends utils.Interface {
  functions: {
    "cancelOrderByOwner(uint256)": FunctionFragment;
    "cancelOrderByTokenOwner(uint256)": FunctionFragment;
    "changeCoinTokenAddress(address)": FunctionFragment;
    "changeOrderByOwner(uint256,address)": FunctionFragment;
    "createOrder(uint256,address,uint256,address)": FunctionFragment;
    "depositEquityToken(uint256,uint256)": FunctionFragment;
    "getEquityTokenOwnerShipAmount(address)": FunctionFragment;
    "getOrderOwner(uint256)": FunctionFragment;
    "getOrders(uint256)": FunctionFragment;
    "getStableCoinBalance(address)": FunctionFragment;
    "initialize(address)": FunctionFragment;
    "lockTransaction(uint256,bool)": FunctionFragment;
    "owner()": FunctionFragment;
    "pause()": FunctionFragment;
    "paused()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "runCancelOrderByOwner(uint256)": FunctionFragment;
    "runCancelOrderByTokenOwner(uint256)": FunctionFragment;
    "runChangeOrderByOwner(uint256)": FunctionFragment;
    "runModifyOrderByPpra(uint256,uint256)": FunctionFragment;
    "totalFee()": FunctionFragment;
    "transact(uint256)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "unpause()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "cancelOrderByOwner"
      | "cancelOrderByTokenOwner"
      | "changeCoinTokenAddress"
      | "changeOrderByOwner"
      | "createOrder"
      | "depositEquityToken"
      | "getEquityTokenOwnerShipAmount"
      | "getOrderOwner"
      | "getOrders"
      | "getStableCoinBalance"
      | "initialize"
      | "lockTransaction"
      | "owner"
      | "pause"
      | "paused"
      | "renounceOwnership"
      | "runCancelOrderByOwner"
      | "runCancelOrderByTokenOwner"
      | "runChangeOrderByOwner"
      | "runModifyOrderByPpra"
      | "totalFee"
      | "transact"
      | "transferOwnership"
      | "unpause"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "cancelOrderByOwner",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "cancelOrderByTokenOwner",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "changeCoinTokenAddress",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "changeOrderByOwner",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "createOrder",
    values: [BigNumberish, string, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "depositEquityToken",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getEquityTokenOwnerShipAmount",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getOrderOwner",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getOrders",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getStableCoinBalance",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "initialize", values: [string]): string;
  encodeFunctionData(
    functionFragment: "lockTransaction",
    values: [BigNumberish, boolean]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "pause", values?: undefined): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "runCancelOrderByOwner",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "runCancelOrderByTokenOwner",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "runChangeOrderByOwner",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "runModifyOrderByPpra",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "totalFee", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transact",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "unpause", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "cancelOrderByOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "cancelOrderByTokenOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "changeCoinTokenAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "changeOrderByOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createOrder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "depositEquityToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getEquityTokenOwnerShipAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getOrderOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getOrders", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getStableCoinBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "lockTransaction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "runCancelOrderByOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "runCancelOrderByTokenOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "runChangeOrderByOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "runModifyOrderByPpra",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "totalFee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "transact", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;

  events: {
    "CancelOrderByOwnerEvent(address,uint256)": EventFragment;
    "CancelOrderByTokenOwnerEvent(address,uint256)": EventFragment;
    "ChangeOrderByOwnerEvent(address,uint256,uint256)": EventFragment;
    "DepositEquityTokenEvent(uint256,address,uint256)": EventFragment;
    "Initialized(uint8)": EventFragment;
    "LockTransactionEvent(uint256)": EventFragment;
    "NewOrderEvent(uint256,uint256,address,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Paused(address)": EventFragment;
    "RunCancelOrderByOwnerEvent(address,uint256)": EventFragment;
    "RunCancelOrderByTokenOwnerEvent(address,uint256)": EventFragment;
    "RunChangeOrderByOwnerEvent(uint256)": EventFragment;
    "RunModifyOrderByPpraEvent(address,uint256,uint256)": EventFragment;
    "TransactEvent(address,uint256,address,address,bool,uint256,uint256)": EventFragment;
    "Unpaused(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "CancelOrderByOwnerEvent"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "CancelOrderByTokenOwnerEvent"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ChangeOrderByOwnerEvent"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DepositEquityTokenEvent"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LockTransactionEvent"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewOrderEvent"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RunCancelOrderByOwnerEvent"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "RunCancelOrderByTokenOwnerEvent"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RunChangeOrderByOwnerEvent"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RunModifyOrderByPpraEvent"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TransactEvent"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
}

export interface CancelOrderByOwnerEventEventObject {
  tokenAddress: string;
  orderId: BigNumber;
}
export type CancelOrderByOwnerEventEvent = TypedEvent<
  [string, BigNumber],
  CancelOrderByOwnerEventEventObject
>;

export type CancelOrderByOwnerEventEventFilter =
  TypedEventFilter<CancelOrderByOwnerEventEvent>;

export interface CancelOrderByTokenOwnerEventEventObject {
  tokenAddress: string;
  orderId: BigNumber;
}
export type CancelOrderByTokenOwnerEventEvent = TypedEvent<
  [string, BigNumber],
  CancelOrderByTokenOwnerEventEventObject
>;

export type CancelOrderByTokenOwnerEventEventFilter =
  TypedEventFilter<CancelOrderByTokenOwnerEventEvent>;

export interface ChangeOrderByOwnerEventEventObject {
  tokenAddress: string;
  pricePerToken: BigNumber;
  totalOrderAmount: BigNumber;
}
export type ChangeOrderByOwnerEventEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  ChangeOrderByOwnerEventEventObject
>;

export type ChangeOrderByOwnerEventEventFilter =
  TypedEventFilter<ChangeOrderByOwnerEventEvent>;

export interface DepositEquityTokenEventEventObject {
  orderId: BigNumber;
  clientAddress: string;
  depositTokenAmount: BigNumber;
}
export type DepositEquityTokenEventEvent = TypedEvent<
  [BigNumber, string, BigNumber],
  DepositEquityTokenEventEventObject
>;

export type DepositEquityTokenEventEventFilter =
  TypedEventFilter<DepositEquityTokenEventEvent>;

export interface InitializedEventObject {
  version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export interface LockTransactionEventEventObject {
  orderId: BigNumber;
}
export type LockTransactionEventEvent = TypedEvent<
  [BigNumber],
  LockTransactionEventEventObject
>;

export type LockTransactionEventEventFilter =
  TypedEventFilter<LockTransactionEventEvent>;

export interface NewOrderEventEventObject {
  orderId: BigNumber;
  totalOrderAmount: BigNumber;
  tokenAddress: string;
  tokenAmount: BigNumber;
}
export type NewOrderEventEvent = TypedEvent<
  [BigNumber, BigNumber, string, BigNumber],
  NewOrderEventEventObject
>;

export type NewOrderEventEventFilter = TypedEventFilter<NewOrderEventEvent>;

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

export interface PausedEventObject {
  account: string;
}
export type PausedEvent = TypedEvent<[string], PausedEventObject>;

export type PausedEventFilter = TypedEventFilter<PausedEvent>;

export interface RunCancelOrderByOwnerEventEventObject {
  tokenAddress: string;
  orderId: BigNumber;
}
export type RunCancelOrderByOwnerEventEvent = TypedEvent<
  [string, BigNumber],
  RunCancelOrderByOwnerEventEventObject
>;

export type RunCancelOrderByOwnerEventEventFilter =
  TypedEventFilter<RunCancelOrderByOwnerEventEvent>;

export interface RunCancelOrderByTokenOwnerEventEventObject {
  tokenAddress: string;
  orderId: BigNumber;
}
export type RunCancelOrderByTokenOwnerEventEvent = TypedEvent<
  [string, BigNumber],
  RunCancelOrderByTokenOwnerEventEventObject
>;

export type RunCancelOrderByTokenOwnerEventEventFilter =
  TypedEventFilter<RunCancelOrderByTokenOwnerEventEvent>;

export interface RunChangeOrderByOwnerEventEventObject {
  orderId: BigNumber;
}
export type RunChangeOrderByOwnerEventEvent = TypedEvent<
  [BigNumber],
  RunChangeOrderByOwnerEventEventObject
>;

export type RunChangeOrderByOwnerEventEventFilter =
  TypedEventFilter<RunChangeOrderByOwnerEventEvent>;

export interface RunModifyOrderByPpraEventEventObject {
  tokenAddress: string;
  orderId: BigNumber;
  mode: BigNumber;
}
export type RunModifyOrderByPpraEventEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  RunModifyOrderByPpraEventEventObject
>;

export type RunModifyOrderByPpraEventEventFilter =
  TypedEventFilter<RunModifyOrderByPpraEventEvent>;

export interface TransactEventEventObject {
  tokenAddress: string;
  orderId: BigNumber;
  tokenOwner: string;
  newOwner: string;
  ppraFee: boolean;
  totalOrderAmount: BigNumber;
  fee: BigNumber;
}
export type TransactEventEvent = TypedEvent<
  [string, BigNumber, string, string, boolean, BigNumber, BigNumber],
  TransactEventEventObject
>;

export type TransactEventEventFilter = TypedEventFilter<TransactEventEvent>;

export interface UnpausedEventObject {
  account: string;
}
export type UnpausedEvent = TypedEvent<[string], UnpausedEventObject>;

export type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;

export interface TOKv2 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TOKv2Interface;

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
    cancelOrderByOwner(
      _orderId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    cancelOrderByTokenOwner(
      _orderId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    changeCoinTokenAddress(
      _coinAddress: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    changeOrderByOwner(
      _orderId: BigNumberish,
      _tokenAddress: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    createOrder(
      _price: BigNumberish,
      _tokenAddress: string,
      _tokenAmount: BigNumberish,
      _owner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    depositEquityToken(
      _orderId: BigNumberish,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    getEquityTokenOwnerShipAmount(
      ownerAddress: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getOrderOwner(
      orderId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getOrders(
      _orderId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, number, BigNumber, boolean, string, BigNumber] & {
        price: BigNumber;
        tokenAddress: string;
        currentState: number;
        amount: BigNumber;
        ppraFee: boolean;
        equityTokenOwner: string;
        equityTokenAmount: BigNumber;
      }
    >;

    getStableCoinBalance(
      ownerAddress: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    initialize(
      _coinAddress: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    lockTransaction(
      _orderId: BigNumberish,
      _ppraFee: boolean,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    pause(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    runCancelOrderByOwner(
      _orderId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    runCancelOrderByTokenOwner(
      _orderId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    runChangeOrderByOwner(
      _orderId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    runModifyOrderByPpra(
      _orderId: BigNumberish,
      _mode: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    totalFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    transact(
      _orderId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    unpause(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;
  };

  cancelOrderByOwner(
    _orderId: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  cancelOrderByTokenOwner(
    _orderId: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  changeCoinTokenAddress(
    _coinAddress: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  changeOrderByOwner(
    _orderId: BigNumberish,
    _tokenAddress: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  createOrder(
    _price: BigNumberish,
    _tokenAddress: string,
    _tokenAmount: BigNumberish,
    _owner: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  depositEquityToken(
    _orderId: BigNumberish,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  getEquityTokenOwnerShipAmount(
    ownerAddress: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getOrderOwner(
    orderId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  getOrders(
    _orderId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, string, number, BigNumber, boolean, string, BigNumber] & {
      price: BigNumber;
      tokenAddress: string;
      currentState: number;
      amount: BigNumber;
      ppraFee: boolean;
      equityTokenOwner: string;
      equityTokenAmount: BigNumber;
    }
  >;

  getStableCoinBalance(
    ownerAddress: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  initialize(
    _coinAddress: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  lockTransaction(
    _orderId: BigNumberish,
    _ppraFee: boolean,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  pause(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  renounceOwnership(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  runCancelOrderByOwner(
    _orderId: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  runCancelOrderByTokenOwner(
    _orderId: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  runChangeOrderByOwner(
    _orderId: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  runModifyOrderByPpra(
    _orderId: BigNumberish,
    _mode: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  totalFee(overrides?: CallOverrides): Promise<BigNumber>;

  transact(
    _orderId: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  unpause(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  callStatic: {
    cancelOrderByOwner(
      _orderId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    cancelOrderByTokenOwner(
      _orderId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    changeCoinTokenAddress(
      _coinAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    changeOrderByOwner(
      _orderId: BigNumberish,
      _tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    createOrder(
      _price: BigNumberish,
      _tokenAddress: string,
      _tokenAmount: BigNumberish,
      _owner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    depositEquityToken(
      _orderId: BigNumberish,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    getEquityTokenOwnerShipAmount(
      ownerAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getOrderOwner(
      orderId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getOrders(
      _orderId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, number, BigNumber, boolean, string, BigNumber] & {
        price: BigNumber;
        tokenAddress: string;
        currentState: number;
        amount: BigNumber;
        ppraFee: boolean;
        equityTokenOwner: string;
        equityTokenAmount: BigNumber;
      }
    >;

    getStableCoinBalance(
      ownerAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(_coinAddress: string, overrides?: CallOverrides): Promise<void>;

    lockTransaction(
      _orderId: BigNumberish,
      _ppraFee: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    pause(overrides?: CallOverrides): Promise<void>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    runCancelOrderByOwner(
      _orderId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    runCancelOrderByTokenOwner(
      _orderId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    runChangeOrderByOwner(
      _orderId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    runModifyOrderByPpra(
      _orderId: BigNumberish,
      _mode: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    totalFee(overrides?: CallOverrides): Promise<BigNumber>;

    transact(_orderId: BigNumberish, overrides?: CallOverrides): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    unpause(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "CancelOrderByOwnerEvent(address,uint256)"(
      tokenAddress?: string | null,
      orderId?: BigNumberish | null
    ): CancelOrderByOwnerEventEventFilter;
    CancelOrderByOwnerEvent(
      tokenAddress?: string | null,
      orderId?: BigNumberish | null
    ): CancelOrderByOwnerEventEventFilter;

    "CancelOrderByTokenOwnerEvent(address,uint256)"(
      tokenAddress?: string | null,
      orderId?: BigNumberish | null
    ): CancelOrderByTokenOwnerEventEventFilter;
    CancelOrderByTokenOwnerEvent(
      tokenAddress?: string | null,
      orderId?: BigNumberish | null
    ): CancelOrderByTokenOwnerEventEventFilter;

    "ChangeOrderByOwnerEvent(address,uint256,uint256)"(
      tokenAddress?: string | null,
      pricePerToken?: BigNumberish | null,
      totalOrderAmount?: BigNumberish | null
    ): ChangeOrderByOwnerEventEventFilter;
    ChangeOrderByOwnerEvent(
      tokenAddress?: string | null,
      pricePerToken?: BigNumberish | null,
      totalOrderAmount?: BigNumberish | null
    ): ChangeOrderByOwnerEventEventFilter;

    "DepositEquityTokenEvent(uint256,address,uint256)"(
      orderId?: BigNumberish | null,
      clientAddress?: string | null,
      depositTokenAmount?: BigNumberish | null
    ): DepositEquityTokenEventEventFilter;
    DepositEquityTokenEvent(
      orderId?: BigNumberish | null,
      clientAddress?: string | null,
      depositTokenAmount?: BigNumberish | null
    ): DepositEquityTokenEventEventFilter;

    "Initialized(uint8)"(version?: null): InitializedEventFilter;
    Initialized(version?: null): InitializedEventFilter;

    "LockTransactionEvent(uint256)"(
      orderId?: BigNumberish | null
    ): LockTransactionEventEventFilter;
    LockTransactionEvent(
      orderId?: BigNumberish | null
    ): LockTransactionEventEventFilter;

    "NewOrderEvent(uint256,uint256,address,uint256)"(
      orderId?: BigNumberish | null,
      totalOrderAmount?: BigNumberish | null,
      tokenAddress?: string | null,
      tokenAmount?: null
    ): NewOrderEventEventFilter;
    NewOrderEvent(
      orderId?: BigNumberish | null,
      totalOrderAmount?: BigNumberish | null,
      tokenAddress?: string | null,
      tokenAmount?: null
    ): NewOrderEventEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;

    "Paused(address)"(account?: null): PausedEventFilter;
    Paused(account?: null): PausedEventFilter;

    "RunCancelOrderByOwnerEvent(address,uint256)"(
      tokenAddress?: string | null,
      orderId?: BigNumberish | null
    ): RunCancelOrderByOwnerEventEventFilter;
    RunCancelOrderByOwnerEvent(
      tokenAddress?: string | null,
      orderId?: BigNumberish | null
    ): RunCancelOrderByOwnerEventEventFilter;

    "RunCancelOrderByTokenOwnerEvent(address,uint256)"(
      tokenAddress?: string | null,
      orderId?: BigNumberish | null
    ): RunCancelOrderByTokenOwnerEventEventFilter;
    RunCancelOrderByTokenOwnerEvent(
      tokenAddress?: string | null,
      orderId?: BigNumberish | null
    ): RunCancelOrderByTokenOwnerEventEventFilter;

    "RunChangeOrderByOwnerEvent(uint256)"(
      orderId?: BigNumberish | null
    ): RunChangeOrderByOwnerEventEventFilter;
    RunChangeOrderByOwnerEvent(
      orderId?: BigNumberish | null
    ): RunChangeOrderByOwnerEventEventFilter;

    "RunModifyOrderByPpraEvent(address,uint256,uint256)"(
      tokenAddress?: string | null,
      orderId?: BigNumberish | null,
      mode?: BigNumberish | null
    ): RunModifyOrderByPpraEventEventFilter;
    RunModifyOrderByPpraEvent(
      tokenAddress?: string | null,
      orderId?: BigNumberish | null,
      mode?: BigNumberish | null
    ): RunModifyOrderByPpraEventEventFilter;

    "TransactEvent(address,uint256,address,address,bool,uint256,uint256)"(
      tokenAddress?: null,
      orderId?: BigNumberish | null,
      tokenOwner?: string | null,
      newOwner?: string | null,
      ppraFee?: null,
      totalOrderAmount?: null,
      fee?: null
    ): TransactEventEventFilter;
    TransactEvent(
      tokenAddress?: null,
      orderId?: BigNumberish | null,
      tokenOwner?: string | null,
      newOwner?: string | null,
      ppraFee?: null,
      totalOrderAmount?: null,
      fee?: null
    ): TransactEventEventFilter;

    "Unpaused(address)"(account?: null): UnpausedEventFilter;
    Unpaused(account?: null): UnpausedEventFilter;
  };

  estimateGas: {
    cancelOrderByOwner(
      _orderId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    cancelOrderByTokenOwner(
      _orderId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    changeCoinTokenAddress(
      _coinAddress: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    changeOrderByOwner(
      _orderId: BigNumberish,
      _tokenAddress: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    createOrder(
      _price: BigNumberish,
      _tokenAddress: string,
      _tokenAmount: BigNumberish,
      _owner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    depositEquityToken(
      _orderId: BigNumberish,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    getEquityTokenOwnerShipAmount(
      ownerAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getOrderOwner(
      orderId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getOrders(
      _orderId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getStableCoinBalance(
      ownerAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(
      _coinAddress: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    lockTransaction(
      _orderId: BigNumberish,
      _ppraFee: boolean,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    pause(overrides?: Overrides & { from?: string }): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    runCancelOrderByOwner(
      _orderId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    runCancelOrderByTokenOwner(
      _orderId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    runChangeOrderByOwner(
      _orderId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    runModifyOrderByPpra(
      _orderId: BigNumberish,
      _mode: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    totalFee(overrides?: CallOverrides): Promise<BigNumber>;

    transact(
      _orderId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    unpause(overrides?: Overrides & { from?: string }): Promise<BigNumber>;
  };

  populateTransaction: {
    cancelOrderByOwner(
      _orderId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    cancelOrderByTokenOwner(
      _orderId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    changeCoinTokenAddress(
      _coinAddress: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    changeOrderByOwner(
      _orderId: BigNumberish,
      _tokenAddress: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    createOrder(
      _price: BigNumberish,
      _tokenAddress: string,
      _tokenAmount: BigNumberish,
      _owner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    depositEquityToken(
      _orderId: BigNumberish,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    getEquityTokenOwnerShipAmount(
      ownerAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getOrderOwner(
      orderId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getOrders(
      _orderId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getStableCoinBalance(
      ownerAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      _coinAddress: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    lockTransaction(
      _orderId: BigNumberish,
      _ppraFee: boolean,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pause(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    runCancelOrderByOwner(
      _orderId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    runCancelOrderByTokenOwner(
      _orderId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    runChangeOrderByOwner(
      _orderId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    runModifyOrderByPpra(
      _orderId: BigNumberish,
      _mode: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    totalFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transact(
      _orderId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    unpause(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;
  };
}