import { MichelineMichelsonV1Expression } from '../MichelineMichelsonV1Expression'
import { MavrykOperationType } from '../OperationTypes'
import { MavrykBaseOperation } from '../MavrykBaseOperation'
import {
  PvmKind,
} from '../common'

export interface MavrykSmartRollupOriginateOperation extends MavrykBaseOperation {
  kind: MavrykOperationType.SMART_ROLLUP_ORIGINATE
  source: string
  fee: string
  counter: string
  gas_limit: string
  storage_limit: string
  pvm_kind: PvmKind
  kernel: string
  parameters_ty: MichelineMichelsonV1Expression
  whitelist?: string[]
}
