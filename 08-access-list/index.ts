import { publicClient } from './config'

const result = await publicClient.createAccessList({
  data: '0xdeadbeef',
  to: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8'
})

console.log(result)
