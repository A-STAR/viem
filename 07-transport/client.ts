import { createPublicClient, http, webSocket, custom, fallback } from 'viem'
import { mainnet } from 'viem/chains'
import { ipc } from 'viem/node'
// import { customRpc } from './rpc'

const client = createPublicClient({
  chain: mainnet,
  // transport: http('https://1.rpc.thirdweb.com/<clientId>'),
  // transport: webSocket('wss://1.rpc.thirdweb.com/<clientId>'),
  // transport: custom(window.ethereum!),
  // transport: custom({
  //   async request({ method, params }) {
  //     const response = await customRpc.request(method, params)
  //     return response
  //   }
  // }),
  // transport: ipc('/tmp/reth.ipc'),
  transport: fallback([
    http('https://1.rpc.thirdweb.com/<clientId>'),
    http('https://mainnet.infura.io/v3/<clientId>')
  ]),
})
