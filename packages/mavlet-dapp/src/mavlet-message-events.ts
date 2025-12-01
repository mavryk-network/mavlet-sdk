import { MavletEvent } from './events'
import { MavletMessageType } from '@mavrykdynamics/mavlet-types'

export const messageEvents: {
  [key in MavletMessageType]: { sent: MavletEvent; success: MavletEvent; error: MavletEvent }
} = {
  [MavletMessageType.BlockchainRequest]: {
    sent: MavletEvent.UNKNOWN,
    success: MavletEvent.UNKNOWN,
    error: MavletEvent.UNKNOWN
  },
  [MavletMessageType.BlockchainResponse]: {
    sent: MavletEvent.UNKNOWN,
    success: MavletEvent.UNKNOWN,
    error: MavletEvent.UNKNOWN
  },
  [MavletMessageType.PermissionRequest]: {
    sent: MavletEvent.PERMISSION_REQUEST_SENT,
    success: MavletEvent.PERMISSION_REQUEST_SUCCESS,
    error: MavletEvent.PERMISSION_REQUEST_ERROR
  },
  [MavletMessageType.PermissionResponse]: {
    sent: MavletEvent.UNKNOWN,
    success: MavletEvent.UNKNOWN,
    error: MavletEvent.UNKNOWN
  },
  [MavletMessageType.ProofOfEventChallengeRequest]: {
    sent: MavletEvent.PROOF_OF_EVENT_CHALLENGE_REQUEST_SENT,
    success: MavletEvent.PROOF_OF_EVENT_CHALLENGE_REQUEST_SUCCESS,
    error: MavletEvent.PROOF_OF_EVENT_CHALLENGE_REQUEST_ERROR
  },
  [MavletMessageType.ProofOfEventChallengeResponse]: {
    sent: MavletEvent.UNKNOWN,
    success: MavletEvent.UNKNOWN,
    error: MavletEvent.UNKNOWN
  },
  [MavletMessageType.SimulatedProofOfEventChallengeRequest]: {
    sent: MavletEvent.SIMULATED_PROOF_OF_EVENT_CHALLENGE_REQUEST_SENT,
    success: MavletEvent.SIMULATED_PROOF_OF_EVENT_CHALLENGE_REQUEST_SUCCESS,
    error: MavletEvent.SIMULATED_PROOF_OF_EVENT_CHALLENGE_REQUEST_ERROR
  },
  [MavletMessageType.SimulatedProofOfEventChallengeResponse]: {
    sent: MavletEvent.UNKNOWN,
    success: MavletEvent.UNKNOWN,
    error: MavletEvent.UNKNOWN
  },
  [MavletMessageType.OperationRequest]: {
    sent: MavletEvent.OPERATION_REQUEST_SENT,
    success: MavletEvent.OPERATION_REQUEST_SUCCESS,
    error: MavletEvent.OPERATION_REQUEST_ERROR
  },
  [MavletMessageType.OperationResponse]: {
    sent: MavletEvent.UNKNOWN,
    success: MavletEvent.UNKNOWN,
    error: MavletEvent.UNKNOWN
  },
  [MavletMessageType.SignPayloadRequest]: {
    sent: MavletEvent.SIGN_REQUEST_SENT,
    success: MavletEvent.SIGN_REQUEST_SUCCESS,
    error: MavletEvent.SIGN_REQUEST_ERROR
  },
  [MavletMessageType.SignPayloadResponse]: {
    sent: MavletEvent.UNKNOWN,
    success: MavletEvent.UNKNOWN,
    error: MavletEvent.UNKNOWN
  },
  // TODO: ENCRYPTION
  // [MavletMessageType.EncryptPayloadRequest]: {
  //   sent: MavletEvent.ENCRYPT_REQUEST_SENT,
  //   success: MavletEvent.ENCRYPT_REQUEST_SUCCESS,
  //   error: MavletEvent.ENCRYPT_REQUEST_ERROR
  // },
  // [MavletMessageType.EncryptPayloadResponse]: {
  //   sent: MavletEvent.UNKNOWN,
  //   success: MavletEvent.UNKNOWN,
  //   error: MavletEvent.UNKNOWN
  // },
  [MavletMessageType.BroadcastRequest]: {
    sent: MavletEvent.BROADCAST_REQUEST_SENT,
    success: MavletEvent.BROADCAST_REQUEST_SUCCESS,
    error: MavletEvent.BROADCAST_REQUEST_ERROR
  },
  [MavletMessageType.BroadcastResponse]: {
    sent: MavletEvent.UNKNOWN,
    success: MavletEvent.UNKNOWN,
    error: MavletEvent.UNKNOWN
  },
  [MavletMessageType.ChangeAccountRequest]: {
    sent: MavletEvent.UNKNOWN,
    success: MavletEvent.UNKNOWN,
    error: MavletEvent.UNKNOWN
  },
  [MavletMessageType.Acknowledge]: {
    sent: MavletEvent.UNKNOWN,
    success: MavletEvent.UNKNOWN,
    error: MavletEvent.UNKNOWN
  },
  [MavletMessageType.Disconnect]: {
    sent: MavletEvent.UNKNOWN,
    success: MavletEvent.UNKNOWN,
    error: MavletEvent.UNKNOWN
  },
  [MavletMessageType.Error]: {
    sent: MavletEvent.UNKNOWN,
    success: MavletEvent.UNKNOWN,
    error: MavletEvent.UNKNOWN
  }
}
