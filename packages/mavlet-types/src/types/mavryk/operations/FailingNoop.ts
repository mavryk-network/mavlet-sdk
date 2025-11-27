import { MavrykOperationType } from '../OperationTypes'
import { MavrykBaseOperation } from '../MavrykBaseOperation'

export interface MavrykFailingNoopOperation extends MavrykBaseOperation {
  kind: MavrykOperationType.FAILING_NOOP
  arbitrary: string
}
