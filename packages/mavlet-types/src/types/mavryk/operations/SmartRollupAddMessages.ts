import { MavrykOperationType } from '../OperationTypes'
import { MavrykBaseOperation } from '../MavrykBaseOperation'

export interface MavrykSmartRollupAddMessagesOperation extends MavrykBaseOperation {
  kind: MavrykOperationType.SMART_ROLLUP_ADD_MESSAGES
  source: string
  fee: string
  counter: string
  gas_limit: string
  storage_limit: string
  message: string[]
}
