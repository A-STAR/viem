import { createPublicClient, createWalletClient, custom, http } from 'viem'
import { mainnet, sepolia } from 'viem/chains'

export const publicClient = createPublicClient({
  // chain: mainnet,
  chain: {
    ...sepolia,
    rpcUrls: {
      default: {
        http: ['https://eth.drpc.org'],
      },
    },
  },
  transport: http(),
})

export const walletClient = createWalletClient({
  transport: custom(window.ethereum!)
})

// JSON-RPC Account
// Some Wallets (like MetaMask) may require you to request access to Account addresses via client.`requestAddresses` first.
let [account] = await walletClient.requestAddresses();
[account] = await walletClient.getAddresses()

// Local Account
// const account = privateKeyToAccount(...)

export { account }
