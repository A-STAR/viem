import { createClient, formatEther, http, parseEther } from 'viem'
import { mainnet } from 'viem/chains'
import { getBalance, getBlock, sendTransaction } from 'viem/actions'

const client = createClient({
  chain: mainnet,
  transport: http()
})

const address = '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266';
const to = '0x70997970C51812dc3A010C7d01b50e0d17dc79C8'

const block = await getBlock(client, { blockTag: 'latest' })

const hash = await sendTransaction(client, {
  account: address,
  to,
  value: parseEther('1')
})

const balance = await getBalance(client, { address })
const toBalance = await getBalance(client, { address: to })

console.log(block.number, hash, formatEther(balance), formatEther(toBalance))
