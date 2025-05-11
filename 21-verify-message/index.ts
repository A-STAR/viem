import { account, walletClient, publicClient } from './client'

const signature = await walletClient.signMessage({
  account,
  message: 'hello world',
})

const valid = await publicClient.verifyMessage({
  address: account,
  message: 'hello world',
  signature,
})

console.log('Valid:', valid)
