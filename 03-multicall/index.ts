import { getContract } from 'viem'
import { abi } from './abi'
import { publicClient } from './client'

const address: `0x${string}` = '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2'

const contract = getContract({ address, abi, client: publicClient })

// The below will send a single request to the RPC Provider.
const [name, totalSupply, symbol, balance] = await Promise.all([
  contract.read.name(),
  contract.read.totalSupply(),
  contract.read.symbol(),
  contract.read.balanceOf([address]),
])

console.log(name, totalSupply, symbol, balance)
