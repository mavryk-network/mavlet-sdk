import { MavletBaseMessage, MavletMessageType } from '@mavrykdynamics/mavlet-types'

/**
 * @category Message
 */
export interface DisconnectMessage extends MavletBaseMessage {
  type: MavletMessageType.Disconnect
}
