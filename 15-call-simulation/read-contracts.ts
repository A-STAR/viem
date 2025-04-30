import { parseAbi } from 'viem'
import { client } from './config'

const abi = parseAbi([
  'function totalSupply() returns (uint256)',
  'function ownerOf(uint256) returns (address)',
])

const { results } = await client.simulateCalls({
  calls: [
    {
      to: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
      abi,
      functionName: 'totalSupply',
    },
    {
      to: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
      abi,
      functionName: 'ownerOf',
      args: [69420n],
    },
    {
      to: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
      abi,
      functionName: 'ownerOf',
      args: [13371337n],
    },
  ],
})

console.log(results)
