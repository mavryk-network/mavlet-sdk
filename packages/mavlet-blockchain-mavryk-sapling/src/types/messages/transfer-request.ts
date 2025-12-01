import { BlockchainMessage } from '@mavrykdynamics/mavlet-types'
import { MavrykSaplingMessageType } from '../message-type'
import { MavrykSaplingPermissionScope } from '../permission-scope'

export interface MavrykSaplingTransferRequest extends BlockchainMessage<'mavryk-sapling'> {
  blockchainData: {
    type: MavrykSaplingMessageType.transfer_request
    scope: MavrykSaplingPermissionScope.transfer
    sourceAddress: string
    amount: string
    recipient: string
    // No network required because we can get it from account id
    mode: 'submit' | 'submit-and-return' | 'return' // TODO: Wording
  }
}
