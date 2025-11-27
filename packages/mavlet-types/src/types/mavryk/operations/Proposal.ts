import { MavrykBaseOperation, MavrykOperationType } from '../../..'

/**
 * @internalapi
 * @category Mavryk
 */
export interface MavrykProposalOperation extends MavrykBaseOperation {
  kind: MavrykOperationType.PROPOSALS
  period: string
  proposals: string[]
}
