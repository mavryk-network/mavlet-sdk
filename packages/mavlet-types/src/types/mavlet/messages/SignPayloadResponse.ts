import { MavletBaseMessage, MavletMessageType, SigningType } from '@mavrykdynamics/mavlet-types'

/**
 * @category Message
 */
export interface SignPayloadResponse extends MavletBaseMessage {
  type: MavletMessageType.SignPayloadResponse
  signingType: SigningType
  signature: string // Signature of the payload
}
