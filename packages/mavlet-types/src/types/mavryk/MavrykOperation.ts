import {
  MavrykActivateAccountOperation,
  MavrykBallotOperation,
  MavrykDelegationOperation,
  MavrykDoubleBakingEvidenceOperation,
  MavrykEndorsementOperation,
  MavrykOriginationOperation,
  MavrykProposalOperation,
  MavrykRevealOperation,
  MavrykSeedNonceRevelationOperation,
  MavrykTransactionOperation
} from '../..'

/**
 * @internalapi
 * @category Mavryk
 */
export type MavrykOperation =
  | MavrykActivateAccountOperation
  | MavrykBallotOperation
  | MavrykDelegationOperation
  | MavrykDoubleBakingEvidenceOperation
  | MavrykEndorsementOperation
  | MavrykOriginationOperation
  | MavrykProposalOperation
  | MavrykRevealOperation
  | MavrykSeedNonceRevelationOperation
  | MavrykTransactionOperation
