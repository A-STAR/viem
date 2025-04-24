import { publicClient } from './client'
import { formatEther } from 'viem'

const transactionCount = await publicClient.getTransactionCount({
  address: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
})

console.log(transactionCount)
