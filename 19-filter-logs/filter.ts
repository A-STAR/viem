import { publicClient } from './client'

const filter = await publicClient.createBlockFilter()

console.log(filter)

const eventFilter = await publicClient.createEventFilter()

console.log(eventFilter)

const pendingFilter = await publicClient.createPendingTransactionFilter()

console.log(pendingFilter)

const hashes = await publicClient.getFilterChanges({ filter })

console.log(hashes)

const uninstalled = await publicClient.uninstallFilter({ filter })
