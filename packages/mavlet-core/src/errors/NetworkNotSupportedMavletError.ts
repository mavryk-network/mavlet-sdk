import { MavletError } from '..'
import { MavletErrorType } from '@mavrykdynamics/mavlet-types'

/**
 * @category Error
 */
export class NetworkNotSupportedMavletError extends MavletError {
  public name: string = 'NetworkNotSupportedMavletError'
  public title: string = 'Network Error'

  constructor() {
    super(
      MavletErrorType.NETWORK_NOT_SUPPORTED,
      'The wallet does not support this network. Please select another one.'
    )
  }
}
