import { publicClient } from './client'

const { domain, extensions, fields } = await publicClient.getEip712Domain({
  address: '0x57ba3ec8df619d4d243ce439551cce713bb17411'
})

console.log(domain, extensions, fields)
