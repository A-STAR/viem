import { createWalletClient, custom } from 'viem'
import { mainnet, sepolia } from 'viem/chains'

export const [account] = await window.ethereum!.request({ method: 'eth_requestAccounts' })

// eg: Metamask
export const client = createWalletClient({
  // account,
  // chain: mainnet,
  chain: sepolia,
  transport: custom(window.ethereum!)
})
