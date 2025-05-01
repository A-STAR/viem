import { publicClient } from './client'

const chainId = await publicClient.getChainId()

console.log(chainId)
