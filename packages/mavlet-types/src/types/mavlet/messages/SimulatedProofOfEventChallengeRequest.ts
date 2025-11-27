import { MavletBaseMessage, MavletMessageType } from '@mavrykdynamics/mavlet-types'

export interface SimulatedProofOfEventChallengeRequest extends MavletBaseMessage {
  type: MavletMessageType.SimulatedProofOfEventChallengeRequest
  payload: string // The payload that will be emitted.
  contractAddress: string // The contract address of the abstracted account
}
