import { encodeFunctionData, parseAbi } from 'viem'
import { account as owner, publicClient } from './config'

const data = await publicClient.call({
  // Address of the contract deployer (e.g. Smart Account Factory).
  factory: '0xE8Df82fA4E10e6A12a9Dab552bceA2acd26De9bb',

  // Function to execute on the factory to deploy the contract.
  factoryData: encodeFunctionData({
    abi: parseAbi(['function createAccount(address owner, uint256 salt)']),
    functionName: 'createAccount',
    args: [owner, 0n],
  }),

  // Function to call on the contract (e.g. Smart Account Contract).
  data: encodeFunctionData({
    abi: parseAbi(['function entryPoint() view returns (address)']),
    functionName: 'entryPoint'
  }),

  // Address of the contract.
  to: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
})

console.log(data)
