import { http, createPublicClient } from 'viem'
import { mainnet } from 'viem/chains'

export const account = '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266'

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
