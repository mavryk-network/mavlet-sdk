import { MavletError } from '..'
import { MavletErrorType } from '@mavrykdynamics/mavlet-types'

/**
 * @category Error
 */
export class NoAddressMavletError extends MavletError {
  public name: string = 'NoAddressMavletError'
  public title: string = 'No Address'

  constructor() {
    super(
      MavletErrorType.NO_ADDRESS_ERROR,
      'The wallet does not have an account set up. Please make sure to set up your wallet and try again.'
    )
  }
}
