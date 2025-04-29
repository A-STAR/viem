import { parseAbi, parseEther } from 'viem'
import { client } from './config'

const abi = parseAbi([
  'function mint()',
  'function transfer(address, uint256) returns (bool)',
])

const { results } = await client.simulateCalls({
  account: '0x5a0b54d5dc17e482fe8b0bdca5320161b95fb929',
  calls: [
    {
      to: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
      value: parseEther('1')
    },
    {
      to: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
      abi,
      functionName: 'mint',
    },
    {
      to: '0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE',
      abi,
      functionName: 'transfer',
      args: [
        '0xa5cc3c03994DB5b0d9A5eEdD10CabaB0813678AC',
        100n
      ],
    },
  ],
})

console.log(results)
