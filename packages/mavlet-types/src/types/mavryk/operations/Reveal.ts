import { MavrykBaseOperation, MavrykOperationType } from '../../..'

/**
 * @internalapi
 * @category Mavryk
 */
export interface MavrykRevealOperation extends MavrykBaseOperation {
  kind: MavrykOperationType.REVEAL
  source: string
  fee: string
  counter: string
  gas_limit: string
  storage_limit: string
  public_key: string
}
