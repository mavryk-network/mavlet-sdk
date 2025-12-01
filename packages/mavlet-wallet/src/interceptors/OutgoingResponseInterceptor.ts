import {
  AppMetadataManager,
  getAccountIdentifier,
  Logger,
  PermissionManager
} from '@mavrykdynamics/mavlet-core'
import {
  ErrorResponse,
  MavletMessage,
  MavletResponseInputMessage,
  MavletMessageType,
  PermissionResponse,
  OperationResponse,
  SignPayloadResponse,
  BroadcastResponse,
  PermissionInfo,
  AcknowledgeResponse,
  AppMetadata,
  MavletRequestMessage,
  MavletErrorType,
  MavletMessageWrapper,
  BlockchainResponseV3,
  PermissionResponseV3,
  MavletBaseMessage,
  ProofOfEventChallengeResponse,
  SimulatedProofOfEventChallengeResponse
  // EncryptPayloadResponse
} from '@mavrykdynamics/mavlet-types'
import { getAddressFromPublicKey, CONTRACT_PREFIX, isValidAddress } from '@mavrykdynamics/mavlet-utils'

interface OutgoingResponseInterceptorOptions {
  senderId: string
  request: MavletRequestMessage | MavletMessageWrapper<MavletBaseMessage>
  message: MavletResponseInputMessage
  ownAppMetadata: AppMetadata
  permissionManager: PermissionManager
  appMetadataManager: AppMetadataManager
  interceptorCallback(message: MavletMessage): void
}

const logger = new Logger('OutgoingResponseInterceptor')

/**
 * @internalapi
 *
 * The OutgoingResponseInterceptor is used in the WalletClient to intercept an outgoing response and enrich it with data.
 */
export class OutgoingResponseInterceptor {
  public static async intercept(config: OutgoingResponseInterceptorOptions): Promise<void> {
    if (config.request.version === '2') {
      OutgoingResponseInterceptor.handleV2Message(config)
    } else if (config.request.version === '3') {
      OutgoingResponseInterceptor.handleV3Message(config)
    }
  }

  private static async handleV3Message(config: OutgoingResponseInterceptorOptions) {
    const {
      // senderId,
      // request,
      message: msg,
      // ownAppMetadata,
      // permissionManager,
      appMetadataManager,
      interceptorCallback
    }: OutgoingResponseInterceptorOptions = config

    const wrappedMessage:
      | MavletMessageWrapper<PermissionResponseV3<string>>
      | MavletMessageWrapper<BlockchainResponseV3<string>> = msg as any

    const v3Message: PermissionResponseV3<string> | BlockchainResponseV3<string> =
      wrappedMessage.message

    logger.log('LOGGING OUTGOING V3', v3Message, appMetadataManager)

    interceptorCallback(msg as any)

    // switch (v3Message.type) {
    //   case MavletMessageType.PermissionResponse:
    //     {
    //       const response: PermissionResponse = {
    //         senderId,
    //         version: MAVLET_VERSION,
    //         appMetadata: ownAppMetadata,
    //         ...msg
    //       }

    //       const publicKey = response.publicKey

    //       const address: string = await getAddressFromPublicKey(publicKey)
    //       const appMetadata = await appMetadataManager.getAppMetadata(request.senderId)
    //       if (!appMetadata) {
    //         throw new Error('AppMetadata not found')
    //       }

    //       const permission: PermissionInfo = {
    //         accountIdentifier: await getAccountIdentifier(address, response.network),
    //         senderId: request.senderId,
    //         appMetadata,
    //         website: '',
    //         address,
    //         publicKey,
    //         network: response.network,
    //         scopes: response.scopes,
    //         connectedAt: new Date().getTime()
    //       }

    //       permissionManager.addPermission(permission).catch(console.error)

    //       interceptorCallback(response)
    //     }
    //     break
    //   case MavletMessageType.BlockchainResponse:
    //     {
    //       // const appMetadata: AppMetadata = await IncomingRequestInterceptor.getAppMetadata(
    //       //   appMetadataManager,
    //       //   msg.senderId
    //       // )
    //       const request: any /* MavletMessageWrapper<BlockchainRequestV3<string>> */ = {
    //         ...wrappedMessage
    //       }
    //       interceptorCallback(request)
    //     }
    //     break

    //   default:
    //     logger.log('intercept', 'Message not handled')
    //     assertNever(v3Message)
    // }
  }

  private static async handleV2Message(config: OutgoingResponseInterceptorOptions) {
    const {
      senderId,
      request,
      message,
      ownAppMetadata,
      permissionManager,
      appMetadataManager,
      interceptorCallback
    }: OutgoingResponseInterceptorOptions = config

    switch (message.type) {
      case MavletMessageType.Error: {
        const response: ErrorResponse = {
          type: message.type,
          version: '2',
          senderId,
          id: message.id,
          errorType: message.errorType
        }
        if (message.errorType === MavletErrorType.TRANSACTION_INVALID_ERROR && message.errorData) {
          const errorData = message.errorData
          // Check if error data is in correct format
          if (
            Array.isArray(errorData) &&
            errorData.every((item) => Boolean(item.kind) && Boolean(item.id))
          ) {
            response.errorData = message.errorData
          } else {
            logger.warn(
              'ErrorData provided is not in correct format. It needs to be an array of RPC errors. It will not be included in the message sent to the dApp'
            )
          }
        }
        interceptorCallback(response)
        break
      }
      case MavletMessageType.Acknowledge: {
        const response: AcknowledgeResponse = {
          type: message.type,
          version: '2',
          senderId,
          id: message.id
        }
        interceptorCallback(response)
        break
      }
      case MavletMessageType.PermissionResponse: {
        const response: PermissionResponse = {
          senderId,
          version: '2',
          appMetadata: ownAppMetadata,
          ...message
        }

        if (!response.address && !response.publicKey) {
          throw new Error('Address or PublicKey must be defined')
        }

        const publicKey = response.publicKey

        const address: string = response.address ?? (await getAddressFromPublicKey(publicKey!))

        if (!isValidAddress(address)) {
          throw new Error(`Invalid address: "${address}"`)
        }

        if (
          message.walletType === 'abstracted_account' &&
          address.substring(0, 3) !== CONTRACT_PREFIX
        ) {
          throw new Error(
            `Invalid abstracted account address "${address}", it should be a ${CONTRACT_PREFIX} address`
          )
        }

        const appMetadata = await appMetadataManager.getAppMetadata(request.senderId)

        if (!appMetadata) {
          throw new Error('AppMetadata not found')
        }

        const permission: PermissionInfo = {
          accountIdentifier: await getAccountIdentifier(address, response.network),
          senderId: request.senderId,
          appMetadata,
          website: '',
          address,
          publicKey,
          network: response.network,
          scopes: response.scopes,
          connectedAt: new Date().getTime()
        }

        permissionManager.addPermission(permission).catch(console.error)

        interceptorCallback(response)
        break
      }
      case MavletMessageType.OperationResponse:
        {
          const response: OperationResponse = {
            senderId,
            version: '2',
            ...message
          }
          interceptorCallback(response)
        }
        break
      case MavletMessageType.SignPayloadResponse:
        {
          const response: SignPayloadResponse = {
            senderId,
            version: '2',
            ...message
          }
          interceptorCallback(response)
        }
        break
      // TODO: ENCRYPTION
      // case MavletMessageType.EncryptPayloadResponse:
      //   {
      //     const response: EncryptPayloadResponse = {
      //       senderId,
      //       version: MAVLET_VERSION,
      //       ...message
      //     }
      //     interceptorCallback(response)
      //   }
      //   break
      case MavletMessageType.BroadcastResponse:
        {
          const response: BroadcastResponse = {
            senderId,
            version: '2',
            ...message
          }
          interceptorCallback(response)
        }
        break
      case MavletMessageType.ProofOfEventChallengeResponse:
        {
          const response: ProofOfEventChallengeResponse = {
            senderId,
            version: '2',
            ...message
          }
          interceptorCallback(response)
        }
        break
      case MavletMessageType.SimulatedProofOfEventChallengeResponse:
        {
          const response: SimulatedProofOfEventChallengeResponse = {
            senderId,
            version: '2',
            ...message
          }
          interceptorCallback(response)
        }
        break
      default:
        logger.log('intercept', 'Message not handled')
        assertNever(message)
    }
  }
}
function assertNever(_message: never) {
  throw new Error('Function not implemented.')
}
