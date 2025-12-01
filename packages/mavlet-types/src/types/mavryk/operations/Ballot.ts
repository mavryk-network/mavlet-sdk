import { MavrykBaseOperation, MavrykOperationType } from '../../..'

/**
 * @internalapi
 * @category Mavryk
 */
export interface MavrykBallotOperation extends MavrykBaseOperation {
  kind: MavrykOperationType.BALLOT
  source: string
  period: string
  proposal: string
  ballot: 'nay' | 'yay' | 'pass'
}
