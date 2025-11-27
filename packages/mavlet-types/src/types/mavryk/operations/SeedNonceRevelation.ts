import { MavrykBaseOperation, MavrykOperationType } from '../../..'

/**
 * @internalapi
 * @category Mavryk
 */
export interface MavrykSeedNonceRevelationOperation extends MavrykBaseOperation {
  kind: MavrykOperationType.SEED_NONCE_REVELATION
  level: string
  nonce: string
}
