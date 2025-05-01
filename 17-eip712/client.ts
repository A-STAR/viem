import { createPublicClient, http, parseAbi } from 'viem'
import { mainnet } from 'viem/chains'

export const factory = {
  address: '0xE8Df82fA4E10e6A12a9Dab552bceA2acd26De9bb',
  abi: parseAbi(['function createAccount(address owner, uint256 salt)']),
} as const

export const publicClient = createPublicClient({
  // chain: mainnet,
  chain: {
    ...mainnet,
    rpcUrls: {
      default: {
        http: ['https://eth.drpc.org'],
      },
    },
  },
  transport: http(),
})
