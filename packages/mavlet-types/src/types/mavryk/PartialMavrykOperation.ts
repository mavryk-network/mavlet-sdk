import {
  Optional,
  MavrykAttestationOperation,
  MavrykAttestationWithSlotOperation,
  MavrykDoubleAttestationEvidenceOperation,
  MavrykDoublePreAttestationEvidenceOperation,
  MavrykDoublePreEndorsementEvidenceOperation,
  MavrykDrainDelegateOperation,
  MavrykEndorsementWithSlotOperation,
  MavrykFailingNoopOperation,
  MavrykIncreasePaidStorageOperation,
  MavrykPreAttestationOperation,
  MavrykRegisterGlobalConstantOperation,
  MavrykSetDepositsLimitOperation,
  MavrykSmartRollupAddMessagesOperation,
  MavrykSmartRollupCementOperation,
  MavrykSmartRollupExecuteOutboxMessageOperation,
  MavrykSmartRollupOriginateOperation,
  MavrykSmartRollupPublishOperation,
  MavrykSmartRollupRecoverBondOperation,
  MavrykSmartRollupRefuteOperation,
  MavrykTransferTicketOperation,
  MavrykUpdateConsensusKeyOperation,
  MavrykVdfRevelationOperation
} from '@mavrykdynamics/mavlet-types'
import { MavrykActivateAccountOperation } from './operations/ActivateAccount'
import { MavrykBallotOperation } from './operations/Ballot'
import { MavrykDelegationOperation } from './operations/Delegation'
import { MavrykDoubleBakingEvidenceOperation } from './operations/DoubleBakingEvidence'
import { MavrykEndorsementOperation } from './operations/Endorsement'
import { MavrykOriginationOperation } from './operations/Origination'
import { MavrykProposalOperation } from './operations/Proposal'
import { MavrykRevealOperation } from './operations/Reveal'
import { MavrykSeedNonceRevelationOperation } from './operations/SeedNonceRevelation'
import { MavrykTransactionOperation } from './operations/Transaction'
import { MavrykPreEndorsementOperation } from './operations/PreEndorsement'
import { MavrykDalPublishCommitmentOperation } from './operations/DalPublishCommitment'

/**
 * @publicapi
 * @category Mavryk
 */
export type omittedProperties = 'source' | 'fee' | 'counter' | 'gas_limit' | 'storage_limit'

/**
 * @internalapi
 * @category Mavryk
 */
export type PartialMavrykDelegationOperation = Optional<MavrykDelegationOperation, omittedProperties>
/**
 * @internalapi
 * @category Mavryk
 */
export type PartialMavrykOriginationOperation = Optional<
  MavrykOriginationOperation,
  omittedProperties
>
/**
 * @internalapi
 * @category Mavryk
 */
export type PartialMavrykRevealOperation = Optional<MavrykRevealOperation, omittedProperties>
/**
 * @internalapi
 * @category Mavryk
 */
export type PartialMavrykTransactionOperation = Optional<
  MavrykTransactionOperation,
  omittedProperties
>
/**
 * @internalapi
 * @category Mavryk
 */
export type PartialMavrykSetDepositsLimitOperation = Optional<
  MavrykSetDepositsLimitOperation,
  omittedProperties
>
/**
 * @internalapi
 * @category Mavryk
 */
export type PartialMavrykRegisterGlobalConstantOperation = Optional<
  MavrykRegisterGlobalConstantOperation,
  omittedProperties
>
/**
 * @internalapi
 * @category Mavryk
 */
export type PartialMavrykTransferTicketOperation = Optional<
  MavrykTransferTicketOperation,
  omittedProperties
>
/**
 * @internalapi
 * @category Mavryk
 */
export type PartialMavrykIncreasePaidStorageOperation = Optional<
  MavrykIncreasePaidStorageOperation,
  omittedProperties
>
/**
 * @internalapi
 * @category Mavryk
 */
export type PartialMavrykUpdateConsensusKeyOperation = Optional<
  MavrykUpdateConsensusKeyOperation,
  omittedProperties
>
/**
 * @internalapi
 * @category Mavryk
 */
export type PartialMavrykSmartRollupOriginateOperation = Optional<
  MavrykSmartRollupOriginateOperation,
  omittedProperties
>
/**
 * @internalapi
 * @category Mavryk
 */
export type PartialMavrykSmartRollupAddMessagesOperation = Optional<
  MavrykSmartRollupAddMessagesOperation,
  omittedProperties
>
/**
 * @internalapi
 * @category Mavryk
 */
export type PartialMavrykSmartRollupExecuteOutboxMessageOperation = Optional<
  MavrykSmartRollupExecuteOutboxMessageOperation,
  omittedProperties
>
/**
 * @internalapi
 * @category Mavryk
 */
export type PartialMavrykSmartRollupPublishOperation = Optional<
  MavrykSmartRollupPublishOperation,
  omittedProperties
>
/**
 * @internalapi
 * @category Mavryk
 */
export type PartialMavrykSmartRollupCementOperation = Optional<
  MavrykSmartRollupCementOperation,
  omittedProperties
>
/**
 * @internalapi
 * @category Mavryk
 */
export type PartialMavrykSmartRollupRecoverBondOperation = Optional<
  MavrykSmartRollupRecoverBondOperation,
  omittedProperties
>
/**
 * @internalapi
 * @category Mavryk
 */
export type PartialMavrykSmartRollupRefuteOperation = Optional<
  MavrykSmartRollupRefuteOperation,
  omittedProperties
>
/**
 * @internalapi
 * @category Mavryk
 */
export type PartialMavrykSmartRollupTimeoutOperation = Optional<
  MavrykSmartRollupRefuteOperation,
  omittedProperties
>

export type PartialMavrykDalPublishCommitmentOperation = Optional<
  MavrykDalPublishCommitmentOperation,
  omittedProperties
>

/**
 * @publicapi
 * @category Mavryk
 */
export type PartialMavrykOperation =
  | MavrykActivateAccountOperation
  | MavrykBallotOperation
  | PartialMavrykDelegationOperation
  | MavrykDoubleBakingEvidenceOperation
  | MavrykEndorsementOperation
  | PartialMavrykOriginationOperation
  | MavrykProposalOperation
  | PartialMavrykRevealOperation
  | MavrykSeedNonceRevelationOperation
  | PartialMavrykTransactionOperation
  | MavrykAttestationOperation
  | MavrykPreAttestationOperation
  | MavrykPreEndorsementOperation
  | PartialMavrykSetDepositsLimitOperation
  | MavrykDoublePreAttestationEvidenceOperation
  | MavrykDoublePreEndorsementEvidenceOperation
  | MavrykAttestationWithSlotOperation
  | MavrykEndorsementWithSlotOperation
  | MavrykDoubleAttestationEvidenceOperation
  | MavrykFailingNoopOperation
  | PartialMavrykRegisterGlobalConstantOperation
  | PartialMavrykTransferTicketOperation
  | PartialMavrykIncreasePaidStorageOperation
  | PartialMavrykUpdateConsensusKeyOperation
  | MavrykDrainDelegateOperation
  | MavrykVdfRevelationOperation
  | PartialMavrykSmartRollupOriginateOperation
  | PartialMavrykSmartRollupAddMessagesOperation
  | PartialMavrykSmartRollupExecuteOutboxMessageOperation
  | PartialMavrykSmartRollupPublishOperation
  | PartialMavrykSmartRollupCementOperation
  | PartialMavrykSmartRollupRecoverBondOperation
  | PartialMavrykSmartRollupRefuteOperation
  | PartialMavrykSmartRollupTimeoutOperation
  | PartialMavrykDalPublishCommitmentOperation
