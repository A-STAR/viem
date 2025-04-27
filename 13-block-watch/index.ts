import { publicClient } from './client'

const unwatchBlockNumber = publicClient.watchBlockNumber(
  { onBlockNumber: blockNumber => console.log(blockNumber) }
)

const unwatchBlock = publicClient.watchBlocks(
  { onBlock: block => console.log(block) }
)
