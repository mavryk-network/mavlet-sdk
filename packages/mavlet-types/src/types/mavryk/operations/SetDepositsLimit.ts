import { MavrykOperationType } from '../OperationTypes'
import { MavrykBaseOperation } from '../MavrykBaseOperation'

export interface MavrykSetDepositsLimitOperation extends MavrykBaseOperation {
  kind: MavrykOperationType.SET_DEPOSITS_LIMIT
  source: string
  fee: string
  counter: string
  gas_limit: string
  storage_limit: string
  limit?: string
}
