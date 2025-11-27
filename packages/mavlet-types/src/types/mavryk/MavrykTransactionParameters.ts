import { MichelineMichelsonV1Expression } from './MichelineMichelsonV1Expression'

/**
 * @internalapi
 * @category Mavryk
 */
export interface MavrykTransactionParameters {
  entrypoint: 'default' | 'root' | 'do' | 'set_delegate' | 'remove_delegate' | string
  value: MichelineMichelsonV1Expression
}
