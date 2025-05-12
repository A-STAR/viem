import { Address } from 'viem'
import { account, walletClient, publicClient } from './client'
import { domain, types } from './data'

const message = {
  from: {
    name: 'Cow',
    wallet: '0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826' as Address,
  },
  to: {
    name: 'Bob',
    wallet: '0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB' as Address,
  },
  contents: 'Hello, Bob!',
}

const signature = await walletClient.signTypedData({
  account,
  domain,
  types,
  primaryType: 'Mail',
  message,
})

const valid = await publicClient.verifyTypedData({
  address: account,
  domain,
  types,
  primaryType: 'Mail',
  message,
  signature,
})

console.log('Valid:', valid)
