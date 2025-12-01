import { MavletError } from '..'
import { MavletErrorType } from '@mavrykdynamics/mavlet-types'

/**
 * @category Error
 */
export class NotGrantedMavletError extends MavletError {
  public name: string = 'NotGrantedMavletError'
  public title: string = 'Permission Not Granted'

  constructor() {
    super(
      MavletErrorType.NOT_GRANTED_ERROR,
      'You do not have the necessary permissions to perform this action. Please initiate another permission request and give the necessary permissions.'
    )
  }
}
