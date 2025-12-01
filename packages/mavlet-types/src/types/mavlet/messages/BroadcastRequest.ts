import { MavletBaseMessage, MavletMessageType, Network } from '@mavrykdynamics/mavlet-types'

/**
 * @category Message
 */
export interface BroadcastRequest extends MavletBaseMessage {
  type: MavletMessageType.BroadcastRequest
  network: Network // Network on which the transaction will be broadcast
  signedTransaction: string // Signed transaction that will be broadcast
}
