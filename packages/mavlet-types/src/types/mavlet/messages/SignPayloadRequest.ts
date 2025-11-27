import { MavletBaseMessage, MavletMessageType, SigningType } from '@mavrykdynamics/mavlet-types'

/**
 * @category Message
 */
export interface SignPayloadRequest extends MavletBaseMessage {
  type: MavletMessageType.SignPayloadRequest
  signingType: SigningType // How the payload should be signed. If the wallet cannot handle this type, it has to fail and send back an error
  payload: string // The payload that will be signed. Can be any string and does not have to be a valid mavryk operation
  sourceAddress: string // The user can specify an address that should be pre-selected in the wallet
}
