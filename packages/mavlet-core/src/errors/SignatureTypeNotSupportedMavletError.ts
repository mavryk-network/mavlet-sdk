import { MavletError } from '..'
import { MavletErrorType } from '@mavrykdynamics/mavlet-types'

/**
 * @category Error
 */
export class SignatureTypeNotSupportedMavletError extends MavletError {
  public name: string = 'SignatureTypeNotSupportedMavletError'
  public title: string = 'Signature Type Not Supported'

  constructor() {
    super(
      MavletErrorType.SIGNATURE_TYPE_NOT_SUPPORTED,
      'The wallet is not able to sign payloads of this type.'
    )
  }
}
