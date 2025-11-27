import { MavletBaseMessage, MavletMessageType } from '@mavrykdynamics/mavlet-types'

export interface SimulatedProofOfEventChallengeResponse extends MavletBaseMessage {
  type: MavletMessageType.SimulatedProofOfEventChallengeResponse
  operationsList: string // Base64 encoded json
  errorMessage: string
}
