import { MavrykOperationType } from '../OperationTypes'
import { MavrykBaseOperation } from '../MavrykBaseOperation'

export interface MavrykSmartRollupTimeoutOperation extends MavrykBaseOperation {
  kind: MavrykOperationType.SMART_ROLLUP_TIMEOUT
  source: string
  fee: string
  counter: string
  gas_limit: string
  storage_limit: string
  rollup: string
  stakers: SmartRollupTimeoutStakers
}

export interface SmartRollupTimeoutStakers {
  alice: string
  bob: string
}
