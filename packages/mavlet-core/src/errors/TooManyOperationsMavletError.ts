import { MavletError } from '..'
import { MavletErrorType } from '@mavrykdynamics/mavlet-types'

/**
 * @category Error
 */
export class TooManyOperationsMavletError extends MavletError {
  public name: string = 'TooManyOperationsMavletError'
  public title: string = 'Too Many Operations'

  constructor() {
    super(
      MavletErrorType.TOO_MANY_OPERATIONS,
      'The request contains too many transactions. Please include fewer operations and try again.'
    )
  }
}
