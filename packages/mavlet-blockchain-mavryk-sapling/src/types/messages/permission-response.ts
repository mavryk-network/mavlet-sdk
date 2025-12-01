import { AppMetadata, NetworkType, PermissionResponseV3 } from '@mavrykdynamics/mavlet-types'
import { MavrykSaplingPermissionScope } from '../permission-scope'

export interface MavrykSaplingPermissionResponse extends PermissionResponseV3<'mavryk-sapling'> {
  blockchainData: {
    appMetadata: AppMetadata
    scopes: MavrykSaplingPermissionScope[] // enum
    accounts: {
      accountId: string
      address: string
      viewingKey?: string // If the "viewing key" scope is not set, this value has to be removed by the SDK
      network: {
        contract: string // sapling contract
        type: NetworkType
        name?: string
        rpcUrl?: string
      }
    }[]
  }
}
