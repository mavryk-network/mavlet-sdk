import { MavrykOperationType } from '../OperationTypes'
import { MavrykBaseOperation } from '../MavrykBaseOperation'
import { InlinedEndorsement } from './DoubleEndorsementEvidence'

export interface MavrykEndorsementWithSlotOperation extends MavrykBaseOperation {
  kind: MavrykOperationType.ENDORSEMENT_WITH_SLOT
  endorsement: InlinedEndorsement
  slot: number
}