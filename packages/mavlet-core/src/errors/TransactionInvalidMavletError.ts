import { MavletError } from '..'
import { MavletErrorType } from '@mavrykdynamics/mavlet-types'

/**
 * @category Error
 */
export class TransactionInvalidMavletError extends MavletError {
  public name: string = 'TransactionInvalidMavletError'
  public title: string = 'Transaction Invalid'

  public get fullDescription(): { description: string; data?: string } {
    return { description: this.description, data: JSON.stringify(this.data, undefined, 2) }
  }

  constructor(public readonly data: unknown) {
    super(
      MavletErrorType.TRANSACTION_INVALID_ERROR,
      `The transaction is invalid and the node did not accept it.`
    )
    this.data = data
  }
}
