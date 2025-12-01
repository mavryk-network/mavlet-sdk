import { MavletError } from '..'
import { MavletErrorType } from '@mavrykdynamics/mavlet-types'

/**
 * @category Error
 */
export class BroadcastMavletError extends MavletError {
  public name: string = 'BroadcastMavletError'
  public title: string = 'Broadcast Error'

  constructor() {
    super(
      MavletErrorType.BROADCAST_ERROR,
      'The transaction could not be broadcast to the network. Please try again.'
    )
  }
}
