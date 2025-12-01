import { MavletBaseMessage, MavletMessageType } from '@mavrykdynamics/mavlet-types'

export interface ProofOfEventChallengeRequest extends MavletBaseMessage {
  type: MavletMessageType.ProofOfEventChallengeRequest
  payload: string // The payload that will be emitted.
  contractAddress: string // The contract address of the abstracted account
}
