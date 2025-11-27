import { MavrykOperationType } from '../OperationTypes'
import { MavrykBaseOperation } from '../MavrykBaseOperation'

export interface MavrykUpdateConsensusKeyOperation extends MavrykBaseOperation {
  kind: MavrykOperationType.UPDATE_CONSENSUS_KEY
  source: string
  fee: string
  counter: string
  gas_limit: string
  storage_limit: string
  pk: string
}
