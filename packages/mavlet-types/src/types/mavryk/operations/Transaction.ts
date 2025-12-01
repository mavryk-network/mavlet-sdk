import { MavrykBaseOperation, MavrykOperationType, MavrykTransactionParameters } from '../../..'

/**
 * @internalapi
 * @category Mavryk
 */
export interface MavrykTransactionOperation extends MavrykBaseOperation {
  kind: MavrykOperationType.TRANSACTION
  source: string
  fee: string
  counter: string
  gas_limit: string
  storage_limit: string
  amount: string
  destination: string
  parameters?: MavrykTransactionParameters
}
