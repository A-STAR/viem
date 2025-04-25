import { publicClient } from './client'

const block = await publicClient.getBlock()

console.log(block)

const blockNumber = await publicClient.getBlockNumber()

console.log(blockNumber)

const count = await publicClient.getBlockTransactionCount()

console.log(count)
