import { InlinedAttestation } from '../InlinedAttestation'
import { MavrykOperationType } from '../OperationTypes'
import { MavrykBaseOperation } from '../MavrykBaseOperation'

export interface MavrykAttestationWithSlotOperation extends MavrykBaseOperation {
  kind: MavrykOperationType.ATTESTATION_WITH_SLOT
  endorsement: InlinedAttestation
  slot: number
}