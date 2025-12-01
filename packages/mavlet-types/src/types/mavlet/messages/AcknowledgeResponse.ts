import { MavletBaseMessage, MavletMessageType } from '@mavrykdynamics/mavlet-types'

/**
 * @category Message
 */
export interface AcknowledgeResponse extends MavletBaseMessage {
  type: MavletMessageType.Acknowledge
}
