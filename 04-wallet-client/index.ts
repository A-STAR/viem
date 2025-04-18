import { createWalletClient, custom } from 'viem'
import { mainnet, sepolia } from 'viem/chains'

// eg: Metamask
export const client = createWalletClient({
  // chain: mainnet,
  chain: sepolia,
  transport: custom(window.ethereum!)
})
