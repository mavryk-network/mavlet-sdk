import { MavletError } from '..'
import { MavletErrorType } from '@mavrykdynamics/mavlet-types'

/**
 * @category Error
 */
export class AbortedMavletError extends MavletError {
  public name: string = 'UnknownMavletError'
  public title: string = 'Aborted'

  constructor() {
    super(MavletErrorType.ABORTED_ERROR, 'The action was aborted by the user.')
  }
}
