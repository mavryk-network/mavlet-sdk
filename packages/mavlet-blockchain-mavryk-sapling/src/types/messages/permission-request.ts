import { AppMetadata, NetworkType, PermissionRequestV3 } from '@mavrykdynamics/mavlet-types'
import { MavrykSaplingPermissionScope } from '../permission-scope'

export interface MavrykSaplingPermissionRequest extends PermissionRequestV3<'mavryk-sapling'> {
  blockchainData: {
    scopes: MavrykSaplingPermissionScope[] // enum
    appMetadata: AppMetadata
    network: {
      contract: string // sapling contract
      type: NetworkType
      name?: string
      rpcUrl?: string
    }
  }
}
