import { MavrykOperationType } from '../OperationTypes'
import { MavrykBaseOperation } from '../MavrykBaseOperation'

export interface MavrykDoublePreEndorsementEvidenceOperation extends MavrykBaseOperation {
  kind: MavrykOperationType.DOUBLE_PREENDORSEMENT_EVIDENCE
  op1: InlinedPreEndorsement
  op2: InlinedPreEndorsement
}
export interface InlinedPreEndorsement {
  branch: string
  operations: InlinedPreEndorsementContents
  signature?: string
}

export interface InlinedPreEndorsementContents {
  kind: MavrykOperationType.PREENDORSEMENT
  slot: number
  level: number
  round: number
  block_payload_hash: string
}
