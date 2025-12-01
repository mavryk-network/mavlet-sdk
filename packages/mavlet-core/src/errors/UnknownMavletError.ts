import { MavletError } from '..'
import { MavletErrorType } from '@mavrykdynamics/mavlet-types'

/**
 * @category Error
 */
export class UnknownMavletError extends MavletError {
  public name: string = 'UnknownMavletError'
  public title: string = 'Error'

  constructor() {
    super(
      MavletErrorType.UNKNOWN_ERROR,
      'An unknown error occured. Please try again or report it to a developer.'
    )
  }
}
