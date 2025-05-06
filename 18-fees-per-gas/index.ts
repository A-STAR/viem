import { parseEther } from 'viem'
import { account, publicClient } from './client'

let {
  maxFeePerGas,
  maxPriorityFeePerGas
} = await publicClient.estimateFeesPerGas()

let { gasPrice } = await publicClient.estimateFeesPerGas({
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

const baseFee = await publicClient.getBlobBaseFee()

console.log(baseFee)

const feeHistory = await publicClient.getFeeHistory({
  blockCount: 4,
  rewardPercentiles: [25, 75]
})

console.log(feeHistory)

gasPrice = await publicClient.getGasPrice()

console.log(gasPrice)
