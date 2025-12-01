import { MavrykOperationType } from '../OperationTypes'
import { MavrykBaseOperation } from '../MavrykBaseOperation'

export interface MavrykVdfRevelationOperation extends MavrykBaseOperation {
  kind: MavrykOperationType.VDF_REVELATION
  solution: string[]
}
