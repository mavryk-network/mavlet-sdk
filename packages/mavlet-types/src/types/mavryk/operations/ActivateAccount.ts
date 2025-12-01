import { MavrykBaseOperation, MavrykOperationType } from '../../..'

/**
 * @internalapi
 * @category Mavryk
 */
export interface MavrykActivateAccountOperation extends MavrykBaseOperation {
  kind: MavrykOperationType.ACTIVATE_ACCOUNT
  pkh: string
  secret: string
}
