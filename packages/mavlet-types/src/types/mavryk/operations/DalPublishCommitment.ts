import { MavrykOperationType } from '../OperationTypes'

export interface MavrykDalPublishCommitmentOperation {
  kind: MavrykOperationType.DAL_PUBLISH_COMMITMENT
  source: string
  fee: string
  counter: string
  gas_limit: string
  storage_limit: string
  slot_header: {
    slot_index: number
    commitment: string
    commitment_proof: string
  }
}
