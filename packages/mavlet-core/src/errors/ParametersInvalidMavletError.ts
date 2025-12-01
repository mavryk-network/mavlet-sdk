import { MavletError } from '..'
import { MavletErrorType } from '@mavrykdynamics/mavlet-types'

/**
 * @category Error
 */
export class ParametersInvalidMavletError extends MavletError {
  public name: string = 'ParametersInvalidMavletError'
  public title: string = 'Parameters Invalid'

  constructor() {
    super(
      MavletErrorType.PARAMETERS_INVALID_ERROR,
      'Some of the parameters you provided are invalid and the request could not be completed. Please check your inputs and try again.'
    )
  }
}
