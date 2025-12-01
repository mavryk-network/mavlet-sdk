import { MavrykBaseOperation, MavrykOperationType, MavrykBlockHeader } from '../../..'

/**
 * @internalapi
 * @category Mavryk
 */
export interface MavrykDoubleBakingEvidenceOperation extends MavrykBaseOperation {
  kind: MavrykOperationType.DOUBLE_BAKING_EVIDENCE
  bh1: MavrykBlockHeader
  bh2: MavrykBlockHeader
}
