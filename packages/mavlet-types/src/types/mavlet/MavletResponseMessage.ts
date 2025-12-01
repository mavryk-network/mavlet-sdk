import {
  PermissionResponse,
  OperationResponse,
  SignPayloadResponse,
  BroadcastResponse
  // EncryptPayloadResponse
} from '@mavrykdynamics/mavlet-types'
import { ErrorResponse } from './messages/ErrorResponse'

/**
 * @internalapi
 */
export type MavletResponseMessage =
  | PermissionResponse
  | OperationResponse
  | SignPayloadResponse
  // | EncryptPayloadResponse
  | BroadcastResponse
  | ErrorResponse
