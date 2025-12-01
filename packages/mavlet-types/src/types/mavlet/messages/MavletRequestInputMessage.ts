import { Optional } from '@mavrykdynamics/mavlet-types'
import {
  PermissionRequest,
  OperationRequest,
  SignPayloadRequest,
  ProofOfEventChallengeRequest,
  SimulatedProofOfEventChallengeRequest,
  // EncryptPayloadRequest,
  BroadcastRequest
} from '@mavrykdynamics/mavlet-types'

/**
 * @internalapi
 * @category DApp
 */
export type IgnoredRequestInputProperties = 'id' | 'senderId' | 'version'

/**
 * @internalapi
 * @category DApp
 */
export type PermissionRequestInput = Optional<PermissionRequest, IgnoredRequestInputProperties>
/**
 * @internalapi
 * @category DApp
 */
export type ProofOfEventChallengeRequestInput = Optional<
  ProofOfEventChallengeRequest,
  IgnoredRequestInputProperties
>
/**
 * @internalapi
 * @category DApp
 */
export type SimulatedProofOfEventChallengeRequestInput = Optional<
  SimulatedProofOfEventChallengeRequest,
  IgnoredRequestInputProperties
>
/**
 * @internalapi
 * @category DApp
 */
export type OperationRequestInput = Optional<OperationRequest, IgnoredRequestInputProperties>
/**
 * @internalapi
 * @category DApp
 */
export type SignPayloadRequestInput = Optional<SignPayloadRequest, IgnoredRequestInputProperties>
/**
 * @internalapi
 * @category DApp
 */
// export type EncryptPayloadRequestInput = Optional<
//   EncryptPayloadRequest,
//   IgnoredRequestInputProperties
// >
/**
 * @internalapi
 * @category DApp
 */
export type BroadcastRequestInput = Optional<BroadcastRequest, IgnoredRequestInputProperties>

/**
 * @internalapi
 * @category DApp
 */
export type MavletRequestInputMessage =
  | PermissionRequestInput
  | OperationRequestInput
  // | EncryptPayloadRequestInput
  | SignPayloadRequestInput
  | BroadcastRequestInput
  | ProofOfEventChallengeRequestInput
  | SimulatedProofOfEventChallengeRequestInput
