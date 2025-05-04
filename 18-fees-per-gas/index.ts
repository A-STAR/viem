import { publicClient } from './client'

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
