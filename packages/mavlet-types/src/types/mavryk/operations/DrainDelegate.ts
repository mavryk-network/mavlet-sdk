import { MavrykOperationType } from '../OperationTypes'
import { MavrykBaseOperation } from '../MavrykBaseOperation'

export interface MavrykDrainDelegateOperation extends MavrykBaseOperation {
  kind: MavrykOperationType.DRAIN_DELEGATE
  consensus_key: string
  delegate: string
  destination: string
}
