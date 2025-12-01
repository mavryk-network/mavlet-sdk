import {
  PermissionRequest,
  OperationRequest,
  SignPayloadRequest,
  BroadcastRequest,
  ProofOfEventChallengeRequest,
  SimulatedProofOfEventChallengeRequest
  // EncryptPayloadRequest
} from '@mavrykdynamics/mavlet-types'

/**
 * @internalapi
 */
export type MavletRequestMessage =
  | PermissionRequest
  | OperationRequest
  | SignPayloadRequest
  // | EncryptPayloadRequest
  | BroadcastRequest
  | ProofOfEventChallengeRequest
  | SimulatedProofOfEventChallengeRequest
