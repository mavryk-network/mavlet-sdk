import { MavrykBaseOperation, MavrykOperationType } from '../../..'

/**
 * @internalapi
 * @category Mavryk
 */
export interface MavrykOriginationOperation extends MavrykBaseOperation {
  kind: MavrykOperationType.ORIGINATION
  source: string
  fee: string
  counter: string
  gas_limit: string
  storage_limit: string
  balance: string
  delegate?: string
  script: string
}
