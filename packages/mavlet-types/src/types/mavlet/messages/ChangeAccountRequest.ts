import {
  MavletBaseMessage,
  MavletMessageType,
  Network,
  PermissionScope,
  Threshold
} from '@mavrykdynamics/mavlet-types'
import { Notification } from '../../Notification'

export interface ChangeAccountRequest extends MavletBaseMessage {
  type: MavletMessageType.ChangeAccountRequest
  address?: string
  walletType: 'implicit' | 'abstracted_account'
  verificationType?: 'proof_of_event'
  publicKey?: string
  network: Network
  scopes: PermissionScope[]
  threshold?: Threshold
  notification?: Notification
}
