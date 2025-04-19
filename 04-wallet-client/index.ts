import { createWalletClient, custom } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { mainnet, sepolia } from 'viem/chains'

export const [account] = await window.ethereum!.request({ method: 'eth_requestAccounts' })
// const account = privateKeyToAccount('0x...')

// eg: Metamask
export const client = createWalletClient({
  // account,
  // account: '0x...',
  // chain: mainnet,
  chain: sepolia,
  transport: custom(window.ethereum!)
})

// export const account = privateKeyToAccount('0x...')
