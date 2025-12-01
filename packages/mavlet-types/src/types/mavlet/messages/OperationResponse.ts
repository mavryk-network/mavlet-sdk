import { MavletBaseMessage, MavletMessageType } from '@mavrykdynamics/mavlet-types'

/**
 * @category Message
 */
export interface OperationResponse extends MavletBaseMessage {
  type: MavletMessageType.OperationResponse
  transactionHash: string // Hash of the broadcast transaction
}
