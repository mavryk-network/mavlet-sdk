import { MavletBaseMessage, MavletMessageType } from '@mavrykdynamics/mavlet-types'

export interface ProofOfEventChallengeResponse extends MavletBaseMessage {
  type: MavletMessageType.ProofOfEventChallengeResponse
  payloadHash: string
  isAccepted: boolean // Indicating whether the challenge is accepted
}
