import { http, createPublicClient, stringify } from 'viem'
import { mainnet, optimism, polygon } from 'viem/chains'

const publicClients = [
  createPublicClient({
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
  }),
  createPublicClient({
    chain: polygon,
    transport: http(),
  }),
  createPublicClient({
    chain: optimism,
    transport: http(),
  }),
]

export default await Promise.all(
  publicClients.flatMap(async (client) =>
    [
      `<h2>${client.chain?.name}</h2>`,
      `<p>Current Block Number: ${await client.getBlockNumber()}</p>`,
      `<p>Client: <pre><code>${stringify(
        client,
        null,
        2,
      )}</code></pre></p>`,
    ].join('\n'),
  ),
)
