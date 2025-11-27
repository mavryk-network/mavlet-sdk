import { MavrykOperationType } from '../OperationTypes'
import { MavrykBaseOperation } from '../MavrykBaseOperation'

export interface MavrykIncreasePaidStorageOperation extends MavrykBaseOperation {
  kind: MavrykOperationType.INCREASE_PAID_STORAGE
  source: string
  fee: string
  counter: string
  gas_limit: string
  storage_limit: string
  amount: string
  destination: string
}
