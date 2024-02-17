/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  DividendVault,
  DividendVaultInterface,
} from "../../contracts/DividendVault";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_stablecoin",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "AlreadyExist",
    type: "error",
  },
  {
    inputs: [],
    name: "DividendEnded",
    type: "error",
  },
  {
    inputs: [],
    name: "DividendStillActive",
    type: "error",
  },
  {
    inputs: [],
    name: "NoEquityTokenBalance",
    type: "error",
  },
  {
    inputs: [],
    name: "OnlyCreator",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "dividendNumber",
        type: "uint256",
      },
    ],
    name: "NewDividend",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "equityToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "dividendNumber",
        type: "uint256",
      },
    ],
    name: "claimReward",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "dividends",
    outputs: [
      {
        internalType: "uint256",
        name: "startBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "endBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountToClaim",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "claimed",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "creator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "active",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "startBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "endBlock",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "equityTokenAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountToClaim",
        type: "uint256",
      },
    ],
    name: "newDividend",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_stablecoin",
        type: "address",
      },
    ],
    name: "setStablecoinAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "equityToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "dividendNumber",
        type: "uint256",
      },
    ],
    name: "withdrawLockedShares",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "equityTokenAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "dividendNumber",
        type: "uint256",
      },
    ],
    name: "withdrawRemainingFunds",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080604052670de0b6b3a76400006002553480156200001d57600080fd5b5060405162001af038038062001af08339818101604052810190620000439190620001f5565b6200006362000057620000ab60201b60201c565b620000b360201b60201c565b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505062000227565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620001a9826200017c565b9050919050565b6000620001bd826200019c565b9050919050565b620001cf81620001b0565b8114620001db57600080fd5b50565b600081519050620001ef81620001c4565b92915050565b6000602082840312156200020e576200020d62000177565b5b60006200021e84828501620001de565b91505092915050565b6118b980620002376000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c806378e11ca31161006657806378e11ca3146100f65780638da5cb5b146101125780639ecd050014610130578063f0e8f8251461014c578063f2fde38b1461018157610093565b8063174e31c41461009857806335d13d41146100b45780635cdf0a4d146100d0578063715018a6146100ec575b600080fd5b6100b260048036038101906100ad9190611303565b61019d565b005b6100ce60048036038101906100c9919061136f565b6106d3565b005b6100ea60048036038101906100e591906113af565b610973565b005b6100f4610d50565b005b610110600480360381019061010b9190611303565b610d64565b005b61011a610fa0565b6040516101279190611425565b60405180910390f35b61014a60048036038101906101459190611440565b610fc9565b005b6101666004803603810190610161919061136f565b611015565b60405161017896959493929190611497565b60405180910390f35b61019b600480360381019061019691906114f8565b61108b565b005b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082815260200190815260200160002060000154431080156102515750600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008281526020019081526020016000206001015443115b80156102c1575060001515600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083815260200190815260200160002060040160149054906101000a900460ff161515145b156102f8576040517f2a61c69700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008273ffffffffffffffffffffffffffffffffffffffff166370a08231336040518263ffffffff1660e01b81526004016103339190611425565b602060405180830381865afa158015610350573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610374919061153a565b9050600081116103b0576040517ff37702c400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008373ffffffffffffffffffffffffffffffffffffffff166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156103fd573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610421919061153a565b90508373ffffffffffffffffffffffffffffffffffffffff166323b872dd3330856040518463ffffffff1660e01b815260040161046093929190611567565b6020604051808303816000875af115801561047f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104a391906115ca565b5081600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600085815260200190815260200160002060050160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555060006002548360025484600360008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000898152602001908152602001600020600201546105a19190611655565b6105ab9190611686565b6105b59190611686565b6105bf9190611655565b905080600360008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000868152602001908152602001600020600301600082825461062491906116c8565b92505081905550600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff1660e01b81526004016106889291906116fc565b6020604051808303816000875af11580156106a7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106cb91906115ca565b505050505050565b3373ffffffffffffffffffffffffffffffffffffffff16600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083815260200190815260200160002060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146107ab576040517f47bc7cc800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083815260200190815260200160002060040160146101000a81548160ff0219169083151502179055506000600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083815260200190815260200160002060030154600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000848152602001908152602001600020600201546108cb9190611725565b9050600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff1660e01b815260040161092a9291906116fc565b6020604051808303816000875af1158015610949573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061096d91906115ca565b50505050565b60011515600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600043815260200190815260200160002060040160149054906101000a900460ff16151503610a11576040517fcfa5127400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330846040518463ffffffff1660e01b8152600401610a7093929190611567565b6020604051808303816000875af1158015610a8f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ab391906115ca565b5083600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060004381526020019081526020016000206000018190555082600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060004381526020019081526020016000206001018190555080600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000438152602001908152602001600020600201819055506000600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000438152602001908152602001600020600301819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600043815260200190815260200160002060040160146101000a81548160ff02191690831515021790555033600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600043815260200190815260200160002060040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f17afe57ad96e08de4f745100750b62d82bbc711c4ecf2facd35595e1e10538b343604051610d429190611759565b60405180910390a150505050565b610d5861110e565b610d62600061118c565b565b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082815260200190815260200160002060010154431015610df1576040517f3289a78100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083815260200190815260200160002060050160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490506000600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600084815260200190815260200160002060050160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff1660e01b8152600401610f579291906116fc565b6020604051808303816000875af1158015610f76573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f9a91906115ca565b50505050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b610fd161110e565b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6003602052816000526040600020602052806000526040600020600091509150508060000154908060010154908060020154908060030154908060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060040160149054906101000a900460ff16905086565b61109361110e565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603611102576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110f9906117f7565b60405180910390fd5b61110b8161118c565b50565b611116611250565b73ffffffffffffffffffffffffffffffffffffffff16611134610fa0565b73ffffffffffffffffffffffffffffffffffffffff161461118a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161118190611863565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600033905090565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006112888261125d565b9050919050565b600061129a8261127d565b9050919050565b6112aa8161128f565b81146112b557600080fd5b50565b6000813590506112c7816112a1565b92915050565b6000819050919050565b6112e0816112cd565b81146112eb57600080fd5b50565b6000813590506112fd816112d7565b92915050565b6000806040838503121561131a57611319611258565b5b6000611328858286016112b8565b9250506020611339858286016112ee565b9150509250929050565b61134c8161127d565b811461135757600080fd5b50565b60008135905061136981611343565b92915050565b6000806040838503121561138657611385611258565b5b60006113948582860161135a565b92505060206113a5858286016112ee565b9150509250929050565b600080600080608085870312156113c9576113c8611258565b5b60006113d7878288016112ee565b94505060206113e8878288016112ee565b93505060406113f98782880161135a565b925050606061140a878288016112ee565b91505092959194509250565b61141f8161127d565b82525050565b600060208201905061143a6000830184611416565b92915050565b60006020828403121561145657611455611258565b5b6000611464848285016112b8565b91505092915050565b611476816112cd565b82525050565b60008115159050919050565b6114918161147c565b82525050565b600060c0820190506114ac600083018961146d565b6114b9602083018861146d565b6114c6604083018761146d565b6114d3606083018661146d565b6114e06080830185611416565b6114ed60a0830184611488565b979650505050505050565b60006020828403121561150e5761150d611258565b5b600061151c8482850161135a565b91505092915050565b600081519050611534816112d7565b92915050565b6000602082840312156115505761154f611258565b5b600061155e84828501611525565b91505092915050565b600060608201905061157c6000830186611416565b6115896020830185611416565b611596604083018461146d565b949350505050565b6115a78161147c565b81146115b257600080fd5b50565b6000815190506115c48161159e565b92915050565b6000602082840312156115e0576115df611258565b5b60006115ee848285016115b5565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611660826112cd565b915061166b836112cd565b92508261167b5761167a6115f7565b5b828204905092915050565b6000611691826112cd565b915061169c836112cd565b92508282026116aa816112cd565b915082820484148315176116c1576116c0611626565b5b5092915050565b60006116d3826112cd565b91506116de836112cd565b92508282019050808211156116f6576116f5611626565b5b92915050565b60006040820190506117116000830185611416565b61171e602083018461146d565b9392505050565b6000611730826112cd565b915061173b836112cd565b925082820390508181111561175357611752611626565b5b92915050565b600060208201905061176e600083018461146d565b92915050565b600082825260208201905092915050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b60006117e1602683611774565b91506117ec82611785565b604082019050919050565b60006020820190508181036000830152611810816117d4565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b600061184d602083611774565b915061185882611817565b602082019050919050565b6000602082019050818103600083015261187c81611840565b905091905056fea2646970667358221220e681635f451cc41501cb49a147a49b0cb5154ebbe60d3cdc39f84e25ff64775e64736f6c63430008120033";

type DividendVaultConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DividendVaultConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DividendVault__factory extends ContractFactory {
  constructor(...args: DividendVaultConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _stablecoin: string,
    overrides?: Overrides & { from?: string }
  ): Promise<DividendVault> {
    return super.deploy(_stablecoin, overrides || {}) as Promise<DividendVault>;
  }
  override getDeployTransaction(
    _stablecoin: string,
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(_stablecoin, overrides || {});
  }
  override attach(address: string): DividendVault {
    return super.attach(address) as DividendVault;
  }
  override connect(signer: Signer): DividendVault__factory {
    return super.connect(signer) as DividendVault__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DividendVaultInterface {
    return new utils.Interface(_abi) as DividendVaultInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DividendVault {
    return new Contract(address, _abi, signerOrProvider) as DividendVault;
  }
}