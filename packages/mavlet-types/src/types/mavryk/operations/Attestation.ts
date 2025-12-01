import { MavrykOperationType } from '../OperationTypes'
import { MavrykBaseOperation } from '../MavrykBaseOperation'

export interface MavrykAttestationOperation extends MavrykBaseOperation {
  kind: MavrykOperationType.ATTESTATION
  level: number
  slot?: number
  round?: number
  block_payload_hash?: string
}