import { NetworkType } from '@mavrykdynamics/mavlet-types'

export interface Network {
  type: NetworkType
  name?: string
  rpcUrl?: string
}
