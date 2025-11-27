import { MavletError } from '..'
import { MavletErrorType } from '@mavrykdynamics/mavlet-types'

/**
 * @category Error
 */
export class NoPrivateKeyMavletError extends MavletError {
  public name: string = 'NoPrivateKeyMavletError'
  public title: string = 'Account Not Found'

  constructor() {
    super(
      MavletErrorType.NO_PRIVATE_KEY_FOUND_ERROR,
      'The account you are trying to interact with is not available. Please make sure to add the account to your wallet and try again.'
    )
  }
}
