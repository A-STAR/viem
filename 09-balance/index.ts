import { publicClient } from './client'
import { formatEther } from 'viem'

const balance = await publicClient.getBalance({
  address: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
})

const balanceAsEther = formatEther(balance)

console.log(balanceAsEther)
