export * from '@mavrykdynamics/mavlet-core'
export * from '@mavrykdynamics/mavlet-transport-matrix'
export * from '@mavrykdynamics/mavlet-transport-postmessage'
export * from '@mavrykdynamics/mavlet-types'
export * from '@mavrykdynamics/mavlet-utils'
export * from '@mavrykdynamics/mavlet-ui'

import { DAppClient } from './dapp-client/DAppClient'
import { DAppClientOptions } from './dapp-client/DAppClientOptions'
import { MavletEvent, MavletEventHandler, defaultEventCallbacks } from './events'
import { BlockExplorer } from './utils/block-explorer'
import { NexusBlockExplorer } from './utils/nexus-blockexplorer'
import { getDAppClientInstance } from './utils/get-instance'

export { DAppClient, DAppClientOptions, getDAppClientInstance }

// Events
export { MavletEvent, MavletEventHandler, defaultEventCallbacks }

// BlockExplorer
export { BlockExplorer, NexusBlockExplorer }
/** @deprecated Use `NexusBlockExplorer` instead */
export { NexusBlockExplorer as MvktBlockExplorer, NexusBlockExplorer as MavblockBlockExplorer }
