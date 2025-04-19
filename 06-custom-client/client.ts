import {
  createClient,
  http,
  formatTransactionRequest,
  type CallParameters
} from 'viem'
import { mainnet } from 'viem/chains'

const debugClient = createClient({
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
}).extend(client => ({
  async traceCall(args: CallParameters) {
    return client.request({
      method: 'debug_traceCall',
      params: [formatTransactionRequest(args), 'latest', {}]
    })
  },
}))

const response = await debugClient.traceCall({
  account: '0xdeadbeef29292929192939494959594933929292',
  to: '0xde929f939d939d393f939393f93939f393929023',
  gas: 69420n,
  data: '0xf00d4b5d00000000000000000000000001291230982139282304923482304912923823920000000000000000000000001293123098123928310239129839291010293810',
})
