import { MichelineMichelsonV1Expression } from '../MichelineMichelsonV1Expression'
import { MavrykOperationType } from '../OperationTypes'
import { MavrykBaseOperation } from '../MavrykBaseOperation'

export interface MavrykRegisterGlobalConstantOperation extends MavrykBaseOperation {
  kind: MavrykOperationType.REGISTER_GLOBAL_CONSTANT
  source: string
  fee: string
  counter: string
  gas_limit: string
  storage_limit: string
  value: MichelineMichelsonV1Expression
}
