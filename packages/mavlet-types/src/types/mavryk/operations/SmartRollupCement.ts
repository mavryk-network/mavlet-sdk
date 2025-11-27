import { MavrykOperationType } from '../OperationTypes'
import { MavrykBaseOperation } from '../MavrykBaseOperation'

export interface MavrykSmartRollupCementOperation extends MavrykBaseOperation {
  kind: MavrykOperationType.SMART_ROLLUP_CEMENT
  source: string
  fee: string
  counter: string
  gas_limit: string
  storage_limit: string
  rollup: string
}
