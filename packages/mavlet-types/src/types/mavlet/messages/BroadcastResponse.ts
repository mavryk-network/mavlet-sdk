import { MavletBaseMessage, MavletMessageType } from '@mavrykdynamics/mavlet-types'

/**
 * @category Message
 */
export interface BroadcastResponse extends MavletBaseMessage {
  type: MavletMessageType.BroadcastResponse
  transactionHash: string // Hash of the broadcast transaction
}
