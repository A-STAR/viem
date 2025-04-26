import { http, createPublicClient } from 'viem'
import { mainnet } from 'viem/chains'

export const client = createPublicClient({
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
