/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  TokenCallbackHandler,
  TokenCallbackHandlerInterface,
} from "../../../../contracts/accountAbstraction/core/TokenCallbackHandler";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155BatchReceived",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "tokensReceived",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506107ff806100206000396000f3fe608060405234801561001057600080fd5b50600436106100565760003560e01c806223de291461005b57806301ffc9a714610077578063150b7a02146100a7578063bc197c81146100d7578063f23a6e6114610107575b600080fd5b610075600480360381019061007091906103c1565b610137565b005b610091600480360381019061008c91906104e8565b610141565b60405161009e9190610530565b60405180910390f35b6100c160048036038101906100bc919061054b565b61027b565b6040516100ce91906105e2565b60405180910390f35b6100f160048036038101906100ec9190610653565b610290565b6040516100fe91906105e2565b60405180910390f35b610121600480360381019061011c919061072f565b6102a8565b60405161012e91906105e2565b60405180910390f35b5050505050505050565b60007f150b7a02000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061020c57507f4e2312e0000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b8061027457507f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b9050919050565b600063150b7a0260e01b905095945050505050565b600063bc197c8160e01b905098975050505050505050565b600063f23a6e6160e01b90509695505050505050565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006102f3826102c8565b9050919050565b610303816102e8565b811461030e57600080fd5b50565b600081359050610320816102fa565b92915050565b6000819050919050565b61033981610326565b811461034457600080fd5b50565b60008135905061035681610330565b92915050565b600080fd5b600080fd5b600080fd5b60008083601f8401126103815761038061035c565b5b8235905067ffffffffffffffff81111561039e5761039d610361565b5b6020830191508360018202830111156103ba576103b9610366565b5b9250929050565b60008060008060008060008060c0898b0312156103e1576103e06102be565b5b60006103ef8b828c01610311565b98505060206104008b828c01610311565b97505060406104118b828c01610311565b96505060606104228b828c01610347565b955050608089013567ffffffffffffffff811115610443576104426102c3565b5b61044f8b828c0161036b565b945094505060a089013567ffffffffffffffff811115610472576104716102c3565b5b61047e8b828c0161036b565b92509250509295985092959890939650565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6104c581610490565b81146104d057600080fd5b50565b6000813590506104e2816104bc565b92915050565b6000602082840312156104fe576104fd6102be565b5b600061050c848285016104d3565b91505092915050565b60008115159050919050565b61052a81610515565b82525050565b60006020820190506105456000830184610521565b92915050565b600080600080600060808688031215610567576105666102be565b5b600061057588828901610311565b955050602061058688828901610311565b945050604061059788828901610347565b935050606086013567ffffffffffffffff8111156105b8576105b76102c3565b5b6105c48882890161036b565b92509250509295509295909350565b6105dc81610490565b82525050565b60006020820190506105f760008301846105d3565b92915050565b60008083601f8401126106135761061261035c565b5b8235905067ffffffffffffffff8111156106305761062f610361565b5b60208301915083602082028301111561064c5761064b610366565b5b9250929050565b60008060008060008060008060a0898b031215610673576106726102be565b5b60006106818b828c01610311565b98505060206106928b828c01610311565b975050604089013567ffffffffffffffff8111156106b3576106b26102c3565b5b6106bf8b828c016105fd565b9650965050606089013567ffffffffffffffff8111156106e2576106e16102c3565b5b6106ee8b828c016105fd565b9450945050608089013567ffffffffffffffff811115610711576107106102c3565b5b61071d8b828c0161036b565b92509250509295985092959890939650565b60008060008060008060a0878903121561074c5761074b6102be565b5b600061075a89828a01610311565b965050602061076b89828a01610311565b955050604061077c89828a01610347565b945050606061078d89828a01610347565b935050608087013567ffffffffffffffff8111156107ae576107ad6102c3565b5b6107ba89828a0161036b565b9250925050929550929550929556fea2646970667358221220e3dc9e0d5a4c731088103f2b2b2e7660d537e433d1b2c1bfce3a1fdec1dc2c0764736f6c63430008120033";

type TokenCallbackHandlerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TokenCallbackHandlerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TokenCallbackHandler__factory extends ContractFactory {
  constructor(...args: TokenCallbackHandlerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string }
  ): Promise<TokenCallbackHandler> {
    return super.deploy(overrides || {}) as Promise<TokenCallbackHandler>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TokenCallbackHandler {
    return super.attach(address) as TokenCallbackHandler;
  }
  override connect(signer: Signer): TokenCallbackHandler__factory {
    return super.connect(signer) as TokenCallbackHandler__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TokenCallbackHandlerInterface {
    return new utils.Interface(_abi) as TokenCallbackHandlerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TokenCallbackHandler {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TokenCallbackHandler;
  }
}
