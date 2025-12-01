import { MavrykOperationType } from '../OperationTypes'
import { MavrykBaseOperation } from '../MavrykBaseOperation'

export interface MavrykPreAttestationOperation extends MavrykBaseOperation {
  kind: MavrykOperationType.PREATTESTATION
  slot: number
  level: number
  round: number
  block_payload_hash: string
}