import { MavrykBaseOperation, MavrykOperationType } from '../../..'

export interface InlinedEndorsement {
  branch: string
  operations: InlinedEndorsementContents
  signature?: string
}

export interface InlinedEndorsementContents extends MavrykBaseOperation {
  kind: MavrykOperationType.ENDORSEMENT
  level: string
}

/**
 * @internalapi
 * @category Mavryk
 */
export interface MavrykDoubleEndorsementEvidenceOperation extends MavrykBaseOperation {
  kind: MavrykOperationType.DOUBLE_ENDORSEMENT_EVIDENCE
  op1: InlinedEndorsement
  op2: InlinedEndorsement
}
