import { MavrykOperationType } from '../OperationTypes'
import { MavrykBaseOperation } from '../MavrykBaseOperation'
import {
  SmartRollupPublishCommitment,
} from '../common'

export interface MavrykSmartRollupPublishOperation extends MavrykBaseOperation {
  kind: MavrykOperationType.SMART_ROLLUP_PUBLISH
  source: string
  fee: string
  counter: string
  gas_limit: string
  storage_limit: string
  rollup: string
  commitment: SmartRollupPublishCommitment
}
