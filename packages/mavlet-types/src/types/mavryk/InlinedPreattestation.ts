import { MavrykOperationType } from './OperationTypes'

export interface InlinedPreattestation {
  branch: string
  operations: InlinedPreattestationContents
  signature?: string
}

export interface InlinedPreattestationContents {
  kind: MavrykOperationType.PREATTESTATION
  slot: number
  level: number
  round: number
  block_payload_hash: string
}
