import { MavrykOperationType } from '../OperationTypes'
import { MavrykBaseOperation } from '../MavrykBaseOperation'

export interface MavrykPreEndorsementOperation extends MavrykBaseOperation {
  kind: MavrykOperationType.PREENDORSEMENT
  slot: number
  level: number
  round: number
  block_payload_hash: string
}