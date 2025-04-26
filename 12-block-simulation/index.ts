import { parseEther } from 'viem'
import { client } from './client'

const result = await client.simulateBlocks({
  blocks: [{
    blockOverrides: {
      number: 69420n,
    },
    calls: [
      {
        from: '0x5a0b54d5dc17e482fe8b0bdca5320161b95fb929',
        to: '0xcb98643b8786950F0461f3B0edf99D88F274574D',
        value: parseEther('2'),
      },
      {
        from: '0x5a0b54d5dc17e482fe8b0bdca5320161b95fb929',
        to: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
        value: parseEther('1'),
      },
    ],
    stateOverrides: [{
      address: '0x5a0b54d5dc17e482fe8b0bdca5320161b95fb929',
      balance: parseEther('10'),
    }],
  }]
})

console.log(result)
