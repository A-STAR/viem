import { publicClient } from './client'

const {
  maxFeePerGas,
  maxPriorityFeePerGas
} = await publicClient.estimateFeesPerGas()

const { gasPrice } = await publicClient.estimateFeesPerGas({
  type: 'legacy'
})

console.log(maxFeePerGas, maxPriorityFeePerGas)
console.log(gasPrice)
