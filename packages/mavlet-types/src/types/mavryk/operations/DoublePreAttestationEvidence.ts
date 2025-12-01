import { InlinedPreattestation } from '../InlinedPreattestation'
import { MavrykOperationType } from '../OperationTypes'
import { MavrykBaseOperation } from '../MavrykBaseOperation'

export interface MavrykDoublePreAttestationEvidenceOperation extends MavrykBaseOperation {
  kind: MavrykOperationType.DOUBLE_PREATTESTATION_EVIDENCE
  op1: InlinedPreattestation
  op2: InlinedPreattestation
}