/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Finalizer, FinalizerInterface } from "../../contracts/Finalizer";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "equityToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferEquityToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "equityToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenOwner",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "transferEquityTokenWithPermit",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5061075c806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806338afbe341461003b578063aef6c13d1461006b575b600080fd5b61005560048036038101906100509190610347565b610087565b6040516100629190610418565b60405180910390f35b61008560048036038101906100809190610433565b6101ae565b005b60008873ffffffffffffffffffffffffffffffffffffffff1663d505accf893089898989896040518863ffffffff1660e01b81526004016100ce97969594939291906104d6565b600060405180830381600087803b1580156100e857600080fd5b505af19250505080156100f9575060015b61019157610105610552565b806308c379a00361012e57506101196105e5565b806101245750610155565b60009150506101a2565b634e487b710361015557610140610675565b9061014b5750610155565b60009150506101a2565b3d8060008114610181576040519150601f19603f3d011682016040523d82523d6000602084013e610186565b606091505b5060009150506101a2565b61019d898989896101ae565b600190505b98975050505050505050565b8373ffffffffffffffffffffffffffffffffffffffff166323b872dd8484846040518463ffffffff1660e01b81526004016101eb93929190610696565b6020604051808303816000875af115801561020a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061022e91906106f9565b5050505050565b6000604051905090565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061026f82610244565b9050919050565b61027f81610264565b811461028a57600080fd5b50565b60008135905061029c81610276565b92915050565b6000819050919050565b6102b5816102a2565b81146102c057600080fd5b50565b6000813590506102d2816102ac565b92915050565b600060ff82169050919050565b6102ee816102d8565b81146102f957600080fd5b50565b60008135905061030b816102e5565b92915050565b6000819050919050565b61032481610311565b811461032f57600080fd5b50565b6000813590506103418161031b565b92915050565b600080600080600080600080610100898b0312156103685761036761023f565b5b60006103768b828c0161028d565b98505060206103878b828c0161028d565b97505060406103988b828c0161028d565b96505060606103a98b828c016102c3565b95505060806103ba8b828c016102c3565b94505060a06103cb8b828c016102fc565b93505060c06103dc8b828c01610332565b92505060e06103ed8b828c01610332565b9150509295985092959890939650565b60008115159050919050565b610412816103fd565b82525050565b600060208201905061042d6000830184610409565b92915050565b6000806000806080858703121561044d5761044c61023f565b5b600061045b8782880161028d565b945050602061046c8782880161028d565b935050604061047d8782880161028d565b925050606061048e878288016102c3565b91505092959194509250565b6104a381610264565b82525050565b6104b2816102a2565b82525050565b6104c1816102d8565b82525050565b6104d081610311565b82525050565b600060e0820190506104eb600083018a61049a565b6104f8602083018961049a565b61050560408301886104a9565b61051260608301876104a9565b61051f60808301866104b8565b61052c60a08301856104c7565b61053960c08301846104c7565b98975050505050505050565b60008160e01c9050919050565b600060033d11156105715760046000803e61056e600051610545565b90505b90565b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6105bd82610574565b810181811067ffffffffffffffff821117156105dc576105db610585565b5b80604052505050565b600060443d10610672576105f7610235565b60043d036004823e80513d602482011167ffffffffffffffff8211171561061f575050610672565b808201805167ffffffffffffffff81111561063d5750505050610672565b80602083010160043d03850181111561065a575050505050610672565b610669826020018501866105b4565b82955050505050505b90565b60008060233d1115610692576020600460003e6001915060005190505b9091565b60006060820190506106ab600083018661049a565b6106b8602083018561049a565b6106c560408301846104a9565b949350505050565b6106d6816103fd565b81146106e157600080fd5b50565b6000815190506106f3816106cd565b92915050565b60006020828403121561070f5761070e61023f565b5b600061071d848285016106e4565b9150509291505056fea2646970667358221220cb1027720663a896609ccd43a34da4e652258a20a976abbfa7d139c06ae89eb964736f6c63430008120033";

type FinalizerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FinalizerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Finalizer__factory extends ContractFactory {
  constructor(...args: FinalizerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string }
  ): Promise<Finalizer> {
    return super.deploy(overrides || {}) as Promise<Finalizer>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Finalizer {
    return super.attach(address) as Finalizer;
  }
  override connect(signer: Signer): Finalizer__factory {
    return super.connect(signer) as Finalizer__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FinalizerInterface {
    return new utils.Interface(_abi) as FinalizerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Finalizer {
    return new Contract(address, _abi, signerOrProvider) as Finalizer;
  }
}
