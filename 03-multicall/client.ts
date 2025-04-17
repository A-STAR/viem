import { http, createPublicClient } from 'viem'
import { mainnet } from 'viem/chains'

export const publicClient = createPublicClient({
  batch: {
    multicall: true,
  },
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
