import {
  AppMetadata,
  MavletBaseMessage,
  MavletMessageType,
  Network,
  PermissionScope,
  Threshold
} from '@mavrykdynamics/mavlet-types'
import { Notification } from '../../Notification'

/**
 * @category Message
 */
export interface PermissionResponse extends MavletBaseMessage {
  address?: string // If wallet is an abstracted_account, address should be defined
  walletType: 'implicit' | 'abstracted_account'
  verificationType?: 'proof_of_event'
  type: MavletMessageType.PermissionResponse
  appMetadata: AppMetadata // Some additional information about the Wallet
  publicKey?: string // Public Key, because it can be used to verify signatures. Undefined if wallet is an abstracted_account
  network: Network // Network on which the permissions have been granted
  scopes: PermissionScope[] // Permissions that have been granted for this specific address / account
  threshold?: Threshold
  notification?: Notification
}
