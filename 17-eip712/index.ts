import { encodeFunctionData } from 'viem'
import { factory, publicClient } from './client'

let { domain, extensions, fields } = await publicClient.getEip712Domain({
  address: '0x57ba3ec8df619d4d243ce439551cce713bb17411'
})

console.log(domain, extensions, fields);

// read EIP-712 domain on contract that has not been deployed by providing deployment factory
({ domain, extensions, fields } = await publicClient.getEip712Domain({
  address: '0x57ba3ec8df619d4d243ce439551cce713bb17411',
  factory: factory.address,
  factoryData: encodeFunctionData({
    abi: factory.abi,
    functionName: 'createAccount',
    args: ['0x0000000000000000000000000000000000000000', 0n]
  }),
}))

console.log(domain, extensions, fields)
