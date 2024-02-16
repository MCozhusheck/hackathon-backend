export const types = {
  Permit: [
    {
      name: 'owner',
      type: 'address',
    },
    {
      name: 'spender',
      type: 'address',
    },
    {
      name: 'value',
      type: 'uint256',
    },
    {
      name: 'nonce',
      type: 'uint256',
    },
    {
      name: 'deadline',
      type: 'uint256',
    },
  ],
};

export const supportedChains = {
  ethereum: 1,
};

export const domain = {
  name: 'Test Token',
  version: '1',
  chainId: supportedChains['ethereum'],
  verifyingContract: 'Test Token Address',
};
