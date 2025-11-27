import { assertNever } from '../utils/assert-never'
import {
  AbortedMavletError,
  UnknownMavletError,
  NetworkNotSupportedMavletError,
  NoAddressMavletError,
  NoPrivateKeyMavletError,
  NotGrantedMavletError,
  ParametersInvalidMavletError,
  TooManyOperationsMavletError,
  TransactionInvalidMavletError,
  SignatureTypeNotSupportedMavletError,
  BroadcastMavletError
  // EncryptionTypeNotSupportedMavletError
} from '..'
import { MavletErrorType } from '@mavrykdynamics/mavlet-types'

/**
 * @category Error
 */
export abstract class MavletError implements Error {
  public name: string = 'MavletError'
  public message: string

  public title: string = 'Error' // Visible in the UI
  public description: string // Visible in the UI

  public get fullDescription(): { description: string; data?: string } {
    return { description: this.description }
  }

  constructor(errorType: MavletErrorType, message: string) {
    this.message = `[${errorType}]:${message}`
    this.description = message
  }

  public static getError(errorType: MavletErrorType, errorData: unknown): MavletError {
    switch (errorType) {
      case MavletErrorType.BROADCAST_ERROR:
        return new BroadcastMavletError()
      case MavletErrorType.NETWORK_NOT_SUPPORTED:
        return new NetworkNotSupportedMavletError()
      case MavletErrorType.NO_ADDRESS_ERROR:
        return new NoAddressMavletError()
      case MavletErrorType.NO_PRIVATE_KEY_FOUND_ERROR:
        return new NoPrivateKeyMavletError()
      case MavletErrorType.NOT_GRANTED_ERROR:
        return new NotGrantedMavletError()
      case MavletErrorType.PARAMETERS_INVALID_ERROR:
        return new ParametersInvalidMavletError()
      case MavletErrorType.TOO_MANY_OPERATIONS:
        return new TooManyOperationsMavletError()
      case MavletErrorType.TRANSACTION_INVALID_ERROR:
        return new TransactionInvalidMavletError(errorData)
      case MavletErrorType.SIGNATURE_TYPE_NOT_SUPPORTED:
        return new SignatureTypeNotSupportedMavletError()
      // case MavletErrorType.ENCRYPTION_TYPE_NOT_SUPPORTED:
      //   return new EncryptionTypeNotSupportedMavletError()
      case MavletErrorType.ABORTED_ERROR:
        return new AbortedMavletError()
      case MavletErrorType.UNKNOWN_ERROR:
        return new UnknownMavletError()
      default:
        assertNever(errorType)
    }
  }
}
