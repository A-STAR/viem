import { encodeFunctionData, parseAbi } from 'viem'
import { publicClient } from './config'
import contract from './contract.json'

const data = await publicClient.call({
  // Bytecode of the contract. Accessible here: https://etherscan.io/address/0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2#code
  code: `0x${contract.bytecode}`,
  // Function to call on the contract.
  data: encodeFunctionData({
    abi: parseAbi(['function name() view returns (string)']),
    functionName: 'name'
  }),
})

console.log(data)
