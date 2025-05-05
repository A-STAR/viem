import { parseEther } from 'viem'
import { account, publicClient } from './client'

let {
  maxFeePerGas,
  maxPriorityFeePerGas
} = await publicClient.estimateFeesPerGas()

const { gasPrice } = await publicClient.estimateFeesPerGas({
  type: 'legacy'
})

console.log(maxFeePerGas, maxPriorityFeePerGas)
console.log(gasPrice)

maxPriorityFeePerGas = await publicClient.estimateMaxPriorityFeePerGas()

console.log(maxPriorityFeePerGas)

const gas = await publicClient.estimateGas({
  account,
  to: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
  value: parseEther('1')
})

console.log(gas)
