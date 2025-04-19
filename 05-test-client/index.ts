import { parseEther, formatEther } from "viem"
import { client } from "./client"

const blockNumber = await client.getBlockNumber() // Public Action

const address = '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266';
const to = '0x70997970C51812dc3A010C7d01b50e0d17dc79C8'

// Wallet Action
const hash = await client.sendTransaction({
  account: address,
  to,
  value: parseEther('1')
})

const balance = await client.getBalance({ address })
const toBalance = await client.getBalance({ address: to })

await client.mine({ blocks: 1 }) // Test Action

console.log(blockNumber, hash, formatEther(balance), formatEther(toBalance))
