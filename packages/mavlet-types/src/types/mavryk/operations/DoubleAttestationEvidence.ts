import { InlinedAttestation } from '../InlinedAttestation'
import { MavrykOperationType } from '../OperationTypes'
import { MavrykBaseOperation } from '../MavrykBaseOperation'

export interface MavrykDoubleAttestationEvidenceOperation extends MavrykBaseOperation {
  kind: MavrykOperationType.DOUBLE_ATTESTATION_EVIDENCE
  op1: InlinedAttestation
  op2: InlinedAttestation
  slot?: number
}
