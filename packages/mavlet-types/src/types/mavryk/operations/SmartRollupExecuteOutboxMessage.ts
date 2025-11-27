import { MavrykOperationType } from '../OperationTypes'
import { MavrykBaseOperation } from '../MavrykBaseOperation'

export interface MavrykSmartRollupExecuteOutboxMessageOperation extends MavrykBaseOperation {
  kind: MavrykOperationType.SMART_ROLLUP_EXECUTE_OUTBOX_MESSAGE
  source: string
  fee: string
  counter: string
  gas_limit: string
  storage_limit: string
  rollup: string
  cemented_commitment: string
  output_proof: string
}
