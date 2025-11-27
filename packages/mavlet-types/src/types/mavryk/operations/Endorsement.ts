import { MavrykBaseOperation, MavrykOperationType } from '../../..'

/**
 * @internalapi
 * @category Mavryk
 */
export interface MavrykEndorsementOperation extends MavrykBaseOperation {
  kind: MavrykOperationType.ENDORSEMENT
  level: string
}
