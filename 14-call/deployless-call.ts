import { encodeFunctionData, parseAbi } from 'viem'
import { account, publicClient } from './config'
import contract from './contract.json'

const data = await publicClient.call({
  account,
  data: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
  to: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
})

console.log(data)
