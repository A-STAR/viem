import { parseAbiItem } from 'viem'
import { publicClient } from './client'
import { wagmiAbi } from './abi'

const filter = await publicClient.createContractEventFilter({
  address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
  abi: wagmiAbi,
  eventName: 'Transfer'
})

let logs = await publicClient.getFilterChanges({ filter })

console.log(logs)

let eventFilter = await publicClient.createEventFilter({
  address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
  event: parseAbiItem('event Transfer(address indexed, address indexed, uint256)'),
})

let eventLogs = await publicClient.getFilterChanges({
  filter: eventFilter
})

console.log(eventLogs)

eventFilter = await publicClient.createEventFilter({
  address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
  event: parseAbiItem('event Transfer(address indexed, address indexed, uint256)'),
})

eventLogs = await publicClient.getFilterLogs({ filter: eventFilter })

console.log(eventLogs)

logs = await publicClient.getLogs()

console.log(logs)


const unwatch = publicClient.watchEvent({
  address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
  event: parseAbiItem('event Transfer(address indexed from, address indexed to, uint256 value)'),
  onLogs: logs => console.log(logs)
})

console.log(unwatch)
