import { MavletBaseMessage, MavletErrorType, MavletMessageType } from '@mavrykdynamics/mavlet-types'

/**
 * @category Message
 */
export interface ErrorResponse extends MavletBaseMessage {
  type: MavletMessageType.Error
  errorType: MavletErrorType
  errorData?: any
}
