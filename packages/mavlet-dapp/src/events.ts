import {
  BlockExplorer,
  openAlert,
  AlertButton,
  AlertConfig,
  closeAlerts,
  closeToast,
  openToast,
  ToastAction
} from '@mavrykdynamics/mavlet-dapp'
import {
  MavletErrorType,
  ExtendedPostMessagePairingResponse,
  PostMessagePairingRequest,
  ExtendedP2PPairingResponse,
  P2PPairingRequest,
  AccountInfo,
  ErrorResponse,
  PermissionResponseOutput,
  OperationResponseOutput,
  BroadcastResponseOutput,
  SignPayloadResponseOutput,
  Network,
  ConnectionContext,
  NetworkType,
  AcknowledgeResponse,
  WalletInfo,
  ExtendedWalletConnectPairingResponse,
  WalletConnectPairingRequest,
  AnalyticsInterface,
  ProofOfEventChallengeResponseOutput,
  SimulatedProofOfEventChallengeResponseOutput
} from '@mavrykdynamics/mavlet-types'
import {
  UnknownMavletError,
  MavletError,
  Transport,
  Logger
  // EncryptPayloadResponseOutput,
  // EncryptionOperation
} from '@mavrykdynamics/mavlet-core'
import { shortenString } from './utils/shorten-string'
import { isMobile } from '@mavrykdynamics/mavlet-ui'

const logger = new Logger('MavletEvents')

const SUCCESS_TIMER: number = 5 * 1000

type RPCError = {
  kind: string
  id: string
  contract_handle?: string
  location?: number
  with?: {
    string?: string
    int?: number
  }
}
/**
 * The different events that can be emitted by the mavlet-sdk
 */
export enum MavletEvent {
  PERMISSION_REQUEST_SENT = 'PERMISSION_REQUEST_SENT',
  PERMISSION_REQUEST_SUCCESS = 'PERMISSION_REQUEST_SUCCESS',
  PERMISSION_REQUEST_ERROR = 'PERMISSION_REQUEST_ERROR',
  PROOF_OF_EVENT_CHALLENGE_REQUEST_SENT = 'PROOF_OF_EVENT_CHALLENGE_REQUEST_SENT',
  PROOF_OF_EVENT_CHALLENGE_REQUEST_SUCCESS = 'PROOF_OF_EVENT_CHALLENGE_REQUEST_SUCCESS',
  PROOF_OF_EVENT_CHALLENGE_REQUEST_ERROR = 'PROOF_OF_EVENT_CHALLENGE_REQUEST_ERROR',
  SIMULATED_PROOF_OF_EVENT_CHALLENGE_REQUEST_SENT = 'SIMULATED_PROOF_OF_EVENT_CHALLENGE_REQUEST_SENT',
  SIMULATED_PROOF_OF_EVENT_CHALLENGE_REQUEST_SUCCESS = 'SIMULATED_PROOF_OF_EVENT_CHALLENGE_REQUEST_SUCCESS',
  SIMULATED_PROOF_OF_EVENT_CHALLENGE_REQUEST_ERROR = 'SIMULATED_PROOF_OF_EVENT_CHALLENGE_REQUEST_ERROR',
  OPERATION_REQUEST_SENT = 'OPERATION_REQUEST_SENT',
  OPERATION_REQUEST_SUCCESS = 'OPERATION_REQUEST_SUCCESS',
  OPERATION_REQUEST_ERROR = 'OPERATION_REQUEST_ERROR',
  SIGN_REQUEST_SENT = 'SIGN_REQUEST_SENT',
  SIGN_REQUEST_SUCCESS = 'SIGN_REQUEST_SUCCESS',
  SIGN_REQUEST_ERROR = 'SIGN_REQUEST_ERROR',
  // TODO: ENCRYPTION
  // ENCRYPT_REQUEST_SENT = 'ENCRYPT_REQUEST_SENT',
  // ENCRYPT_REQUEST_SUCCESS = 'ENCRYPT_REQUEST_SUCCESS',
  // ENCRYPT_REQUEST_ERROR = 'ENCRYPT_REQUEST_ERROR',
  BROADCAST_REQUEST_SENT = 'BROADCAST_REQUEST_SENT',
  BROADCAST_REQUEST_SUCCESS = 'BROADCAST_REQUEST_SUCCESS',
  BROADCAST_REQUEST_ERROR = 'BROADCAST_REQUEST_ERROR',
  ACKNOWLEDGE_RECEIVED = 'ACKNOWLEDGE_RECEIVED',

  LOCAL_RATE_LIMIT_REACHED = 'LOCAL_RATE_LIMIT_REACHED',

  NO_PERMISSIONS = 'NO_PERMISSIONS',

  ACTIVE_ACCOUNT_SET = 'ACTIVE_ACCOUNT_SET',

  ACTIVE_TRANSPORT_SET = 'ACTIVE_TRANSPORT_SET',

  SHOW_PREPARE = 'SHOW_PREPARE',
  HIDE_UI = 'HIDE_UI',
  INVALID_ACTIVE_ACCOUNT_STATE = 'INVALID_ACTIVE_ACCOUNT_STATE',
  PAIR_INIT = 'PAIR_INIT',
  PAIR_SUCCESS = 'PAIR_SUCCESS',
  CHANNEL_CLOSED = 'CHANNEL_CLOSED',

  INTERNAL_ERROR = 'INTERNAL_ERROR',
  UNKNOWN = 'UNKNOWN'
}

export interface ExtraInfo {
  resetCallback?(): Promise<void>
}

interface RequestSentInfo {
  extraInfo: ExtraInfo
  walletInfo: WalletInfo
}

/**
 * The type of the payload of the different MavletEvents
 */
export interface MavletEventType {
  [MavletEvent.PERMISSION_REQUEST_SENT]: RequestSentInfo
  [MavletEvent.PERMISSION_REQUEST_SUCCESS]: {
    account: AccountInfo
    output: PermissionResponseOutput
    blockExplorer: BlockExplorer
    connectionContext: ConnectionContext
    walletInfo: WalletInfo
  }
  [MavletEvent.PERMISSION_REQUEST_ERROR]: { errorResponse: ErrorResponse; walletInfo: WalletInfo }
  [MavletEvent.PROOF_OF_EVENT_CHALLENGE_REQUEST_SENT]: RequestSentInfo
  [MavletEvent.PROOF_OF_EVENT_CHALLENGE_REQUEST_SUCCESS]: {
    account: AccountInfo
    output: ProofOfEventChallengeResponseOutput
    blockExplorer: BlockExplorer
    connectionContext: ConnectionContext
    walletInfo: WalletInfo
  }
  [MavletEvent.PROOF_OF_EVENT_CHALLENGE_REQUEST_ERROR]: {
    errorResponse: ErrorResponse
    walletInfo: WalletInfo
  }
  [MavletEvent.SIMULATED_PROOF_OF_EVENT_CHALLENGE_REQUEST_SENT]: RequestSentInfo
  [MavletEvent.SIMULATED_PROOF_OF_EVENT_CHALLENGE_REQUEST_SUCCESS]: {
    account: AccountInfo
    output: SimulatedProofOfEventChallengeResponseOutput
    blockExplorer: BlockExplorer
    connectionContext: ConnectionContext
    walletInfo: WalletInfo
  }
  [MavletEvent.SIMULATED_PROOF_OF_EVENT_CHALLENGE_REQUEST_ERROR]: {
    errorResponse: ErrorResponse
    walletInfo: WalletInfo
  }
  [MavletEvent.OPERATION_REQUEST_SENT]: RequestSentInfo
  [MavletEvent.OPERATION_REQUEST_SUCCESS]: {
    account: AccountInfo
    output: OperationResponseOutput
    blockExplorer: BlockExplorer
    connectionContext: ConnectionContext
    walletInfo: WalletInfo
  }
  [MavletEvent.OPERATION_REQUEST_ERROR]: {
    errorResponse: ErrorResponse
    walletInfo: WalletInfo
    errorMessages: Record<string, Record<string | number, string>>
  }
  [MavletEvent.SIGN_REQUEST_SENT]: RequestSentInfo
  [MavletEvent.SIGN_REQUEST_SUCCESS]: {
    output: SignPayloadResponseOutput
    connectionContext: ConnectionContext
    walletInfo: WalletInfo
  }
  [MavletEvent.SIGN_REQUEST_ERROR]: { errorResponse: ErrorResponse; walletInfo: WalletInfo }
  // TODO: ENCRYPTION
  // [MavletEvent.ENCRYPT_REQUEST_SENT]: RequestSentInfo
  // [MavletEvent.ENCRYPT_REQUEST_SUCCESS]: {
  //   output: EncryptPayloadResponseOutput
  //   connectionContext: ConnectionContext
  //   walletInfo: WalletInfo
  // }
  // [MavletEvent.ENCRYPT_REQUEST_ERROR]: { errorResponse: ErrorResponse; walletInfo: WalletInfo }
  [MavletEvent.BROADCAST_REQUEST_SENT]: RequestSentInfo
  [MavletEvent.BROADCAST_REQUEST_SUCCESS]: {
    network: Network
    output: BroadcastResponseOutput
    blockExplorer: BlockExplorer
    connectionContext: ConnectionContext
    walletInfo: WalletInfo
  }
  [MavletEvent.BROADCAST_REQUEST_ERROR]: { errorResponse: ErrorResponse; walletInfo: WalletInfo }
  [MavletEvent.ACKNOWLEDGE_RECEIVED]: {
    message: AcknowledgeResponse
    extraInfo: ExtraInfo
    walletInfo: WalletInfo
  }
  [MavletEvent.LOCAL_RATE_LIMIT_REACHED]: undefined
  [MavletEvent.NO_PERMISSIONS]: undefined
  [MavletEvent.ACTIVE_ACCOUNT_SET]: AccountInfo
  [MavletEvent.ACTIVE_TRANSPORT_SET]: Transport
  [MavletEvent.INVALID_ACTIVE_ACCOUNT_STATE]: undefined
  [MavletEvent.SHOW_PREPARE]: { walletInfo?: WalletInfo }
  [MavletEvent.HIDE_UI]: ('alert' | 'toast')[] | undefined
  [MavletEvent.PAIR_INIT]: {
    p2pPeerInfo: () => Promise<P2PPairingRequest>
    postmessagePeerInfo: () => Promise<PostMessagePairingRequest>
    walletConnectPeerInfo: () => Promise<WalletConnectPairingRequest>
    networkType: NetworkType
    abortedHandler?(): void
    disclaimerText?: string
    analytics: AnalyticsInterface
    featuredWallets?: string[]
  }
  [MavletEvent.PAIR_SUCCESS]:
    | ExtendedPostMessagePairingResponse
    | ExtendedP2PPairingResponse
    | ExtendedWalletConnectPairingResponse
  [MavletEvent.CHANNEL_CLOSED]: string
  [MavletEvent.INTERNAL_ERROR]: { text: string; buttons?: AlertButton[] }
  [MavletEvent.UNKNOWN]: undefined
}

/**
 * Show a "Request sent" toast
 */
const showSentToast = async (data: RequestSentInfo): Promise<void> => {
  let openWalletAction
  const actions: ToastAction[] = []
  if (data.walletInfo.deeplink) {
    if (
      data.walletInfo.type === 'web' ||
      (data.walletInfo.type === 'mobile' && isMobile(window)) ||
      (data.walletInfo.type === 'desktop' && !isMobile(window))
    ) {
      const link = data.walletInfo.deeplink
      openWalletAction = async (): Promise<void> => {
        const a = document.createElement('a')
        a.setAttribute('rel', 'noopener')
        a.setAttribute('href', link)
        a.setAttribute('target', '_blank')
        a.dispatchEvent(new MouseEvent('click', { view: window, bubbles: true, cancelable: true }))
      }
    }
  }
  actions.push({
    text: `No answer from your wallet received yet. Please make sure the wallet is open.`,
    isBold: true
  })
  actions.push({
    text: 'Wallet not receiving request?',
    actionText: 'Reset Connection',
    actionCallback: async (): Promise<void> => {
      await closeToast()
      // eslint-disable-next-line @typescript-eslint/unbound-method
      const resetCallback = data.extraInfo.resetCallback
      if (resetCallback) {
        logger.log('showSentToast', 'resetCallback invoked')
        await resetCallback()
      }
    }
  })

  openToast({
    body: `Request sent to\u00A0 {{wallet}}`,
    walletInfo: data.walletInfo,
    state: 'loading',
    actions,
    openWalletAction
  }).catch((toastError) => console.error(toastError))
}

const showAcknowledgedToast = async (data: {
  message: AcknowledgeResponse
  extraInfo: ExtraInfo
  walletInfo: WalletInfo
}): Promise<void> => {
  openToast({
    body: 'Awaiting confirmation in\u00A0 {{wallet}}',
    state: 'acknowledge',
    walletInfo: data.walletInfo
  }).catch((toastError) => console.error(toastError))
}

const showPrepare = async (data: { walletInfo?: WalletInfo }): Promise<void> => {
  const text = data.walletInfo
    ? `Preparing Request for\u00A0 {{wallet}}...`
    : 'Preparing Request...'
  openToast({
    body: text,
    state: 'prepare',
    walletInfo: data.walletInfo
  }).catch((toastError) => console.error(toastError))
}

const hideUI = async (elements?: ('alert' | 'toast')[]): Promise<void> => {
  if (elements) {
    if (elements.includes('alert')) {
      await closeAlerts()
    }
    if (elements.includes('toast')) {
      await closeToast()
    }
  } else {
    await closeToast()
  }
}

/**
 * Show a "No Permission" alert
 */
const showNoPermissionAlert = async (): Promise<void> => {
  await openAlert({
    title: 'No Permission',
    body: 'Please allow the wallet to handle this type of request.'
  })
}

/**
 * Show a
 */
const showInvalidActiveAccountState = async (): Promise<void> => {
  await openAlert({
    title: 'Invalid state',
    body: `An active account has been received, but no active subscription was found for MavletEvent.ACTIVE_ACCOUNT_SET.
    For more information, visit: https://docs.mavlet.mavryk.org/guides/migration-guide`
  })
}

/**
 * Show an error toast
 *
 * @param mavletError The mavlet error
 */
const showErrorToast = async (
  response: {
    errorResponse: ErrorResponse
    walletInfo: WalletInfo
    errorMessages?: Record<string, Record<string | number, string>>
  },
  buttons?: AlertButton[]
): Promise<void> => {
  const error = response.errorResponse.errorType
    ? MavletError.getError(response.errorResponse.errorType, response.errorResponse.errorData)
    : new UnknownMavletError()

  const actions: ToastAction[] = [
    {
      text: error.title,
      isBold: true
    }
  ]

  if (
    response.errorResponse.errorType === MavletErrorType.TRANSACTION_INVALID_ERROR &&
    response.errorResponse.errorData
  ) {
    const err: RPCError[] = response.errorResponse.errorData
    const errorMessages = response.errorMessages

    let hasHumandReadableError = false

    if (err[0]?.contract_handle && errorMessages && errorMessages?.[err[0].contract_handle]) {
      const errCode = err[1]?.with?.int ?? err[1]?.with?.string
      const contractErrors = errorMessages?.[err[0].contract_handle]
      if (errCode && contractErrors?.[errCode]) {
        actions.push({
          text: contractErrors?.[errCode],
          isBold: true
        })
        hasHumandReadableError = true
      }
    }

    if (!hasHumandReadableError) {
      actions.push({
        text: error.description
      })
    }

    actions.push({
      text: '',
      actionText: 'Show Details',
      actionCallback: async (): Promise<void> => {
        await closeToast()
        await openAlert({
          title: error.title,
          // eslint-disable-next-line @typescript-eslint/unbound-method
          body: error.fullDescription.description,
          data: error.fullDescription.data,
          buttons
        })
      }
    })
  }

  await openToast({
    body: `{{wallet}}\u00A0 has returned an error`,
    timer:
      response.errorResponse.errorType === MavletErrorType.ABORTED_ERROR
        ? SUCCESS_TIMER
        : undefined,
    state: 'finished',
    walletInfo: response.walletInfo,
    actions
  })
}

/**
 * Show a rate limit reached toast
 */
const showRateLimitReached = async (): Promise<void> => {
  openAlert({
    title: 'Error',
    body: 'Rate limit reached. Please slow down',
    buttons: [{ text: 'Done', style: 'outline' }],
    timer: 3000
  }).catch((toastError) => console.error(toastError))
}

/**
 * Show a "connection successful" alert for 1.5 seconds
 */
const showExtensionConnectedAlert = async (): Promise<void> => {
  await closeAlerts()
}

/**
 * Show a "channel closed" alert for 1.5 seconds
 */
const showChannelClosedAlert = async (): Promise<void> => {
  // await openAlert({
  //   title: 'Channel closed',
  //   body: `Your peer has closed the connection.`,
  //   buttons: [{ text: 'Done', style: 'outline' }],
  //   timer: 1500
  // })
}

const showInternalErrorAlert = async (
  data: MavletEventType[MavletEvent.INTERNAL_ERROR]
): Promise<void> => {
  const buttons: AlertButton[] = [...(data.buttons ?? [])]

  buttons.push({ text: 'Done', style: 'outline' })

  const alertConfig: AlertConfig = {
    title: 'Internal Error',
    body: data.text,
    buttons
  }
  await openAlert(alertConfig)
}

/**
 * Show a connect alert with QR code
 *
 * @param data The data that is emitted by the PAIR_INIT event
 */
const showPairAlert = async (data: MavletEventType[MavletEvent.PAIR_INIT]): Promise<void> => {
  logger.log('showPairAlert')
  const alertConfig: AlertConfig = {
    title: 'Choose your preferred wallet',
    body: `<p></p>`,
    pairingPayload: {
      p2pSyncCode: data.p2pPeerInfo,
      walletConnectSyncCode: data.walletConnectPeerInfo,
      postmessageSyncCode: data.postmessagePeerInfo,
      networkType: data.networkType
    },
    // eslint-disable-next-line @typescript-eslint/unbound-method
    closeButtonCallback: data.abortedHandler,
    disclaimerText: data.disclaimerText,
    analytics: data.analytics,
    featuredWallets: data.featuredWallets
  }
  await openAlert(alertConfig)
}

/**
 * Show a "Permission Granted" alert
 *
 * @param data The data that is emitted by the PERMISSION_REQUEST_SUCCESS event
 */
const showPermissionSuccessAlert = async (
  data: MavletEventType[MavletEvent.PERMISSION_REQUEST_SUCCESS]
): Promise<void> => {
  const { output } = data

  await openToast({
    body: `{{wallet}}\u00A0 has granted permission`,
    timer: SUCCESS_TIMER,
    walletInfo: data.walletInfo,
    state: 'finished',
    actions: [
      {
        text: 'Address',
        actionText: shortenString(output.address),
        isBold: true
      },
      {
        text: 'Network',
        actionText: `${output.network.type}`
      },
      {
        text: 'Permissions',
        actionText: output.scopes.join(', ')
      }
    ]
  })
}

const showProofOfEventChallengeSuccessAlert = async (
  data: MavletEventType[MavletEvent.PROOF_OF_EVENT_CHALLENGE_REQUEST_SUCCESS]
): Promise<void> => {
  const { output } = data

  await openToast({
    body: `{{wallet}}\u00A0 has ${output.isAccepted ? 'accepted' : 'refused'} the challenge`,
    timer: SUCCESS_TIMER,
    walletInfo: data.walletInfo,
    state: 'finished',
    actions: output.isAccepted
      ? [
          {
            text: `Payload hash: ${output.payloadHash}`,
            actionText: 'Copy to clipboard',
            actionCallback: async (): Promise<void> => {
              navigator.clipboard.writeText(output.payloadHash).then(
                () => {
                  logger.log('showSignSuccessAlert', 'Copying to clipboard was successful!')
                },
                (err) => {
                  logger.error('showSignSuccessAlert', 'Could not copy text to clipboard: ', err)
                }
              )
              await closeToast()
            }
          }
        ]
      : []
  })
}

const showSimulatedProofOfEventChallengeSuccessAlert = async (
  data: MavletEventType[MavletEvent.SIMULATED_PROOF_OF_EVENT_CHALLENGE_REQUEST_SUCCESS]
): Promise<void> => {
  const { output } = data

  await openToast({
    body: !output.errorMessage
      ? `{{wallet}}\u00A0 has returned the list of operation`
      : `{{wallet}}\u00A0 has returned an error`,
    timer: SUCCESS_TIMER,
    walletInfo: data.walletInfo,
    state: 'finished',
    actions: !output.errorMessage
      ? [
          {
            text: 'Operation list',
            actionText: 'Copy to clipboard',
            actionCallback: async (): Promise<void> => {
              navigator.clipboard.writeText(output.operationsList).then(
                () => {
                  logger.log('showSignSuccessAlert', 'Copying to clipboard was successful!')
                },
                (err) => {
                  logger.error('showSignSuccessAlert', 'Could not copy text to clipboard: ', err)
                }
              )
              await closeToast()
            }
          }
        ]
      : [{ text: 'Error message', actionText: output.errorMessage }]
  })
}

/**
 * Show an "Operation Broadcasted" alert
 *
 * @param data The data that is emitted by the OPERATION_REQUEST_SUCCESS event
 */
const showOperationSuccessAlert = async (
  data: MavletEventType[MavletEvent.OPERATION_REQUEST_SUCCESS]
): Promise<void> => {
  const { account, output, blockExplorer } = data

  await openToast({
    body: `{{wallet}}\u00A0 successfully submitted operation`,
    timer: SUCCESS_TIMER,
    state: 'finished',
    walletInfo: data.walletInfo,
    actions: [
      {
        text: shortenString(output.transactionHash),
        isBold: true,
        actionText: `Open Blockexplorer`,
        actionLogo: 'external',
        actionCallback: async (): Promise<void> => {
          const link: string = await blockExplorer.getTransactionLink(
            output.transactionHash,
            account.network
          )
          window.open(link, '_blank', 'noopener')
          await closeToast()
        }
      }
    ]
  })
}

/**
 * Show a "Transaction Signed" alert
 *
 * @param data The data that is emitted by the SIGN_REQUEST_SUCCESS event
 */
const showSignSuccessAlert = async (
  data: MavletEventType[MavletEvent.SIGN_REQUEST_SUCCESS]
): Promise<void> => {
  const output = data.output
  await openToast({
    body: `{{wallet}}\u00A0 successfully signed payload`,
    timer: SUCCESS_TIMER,
    state: 'finished',
    walletInfo: data.walletInfo,
    actions: [
      {
        text: `Signature: ${shortenString(output.signature)}`,
        actionText: 'Copy to clipboard',
        actionCallback: async (): Promise<void> => {
          navigator.clipboard.writeText(output.signature).then(
            () => {
              logger.log('showSignSuccessAlert', 'Copying to clipboard was successful!')
            },
            (err) => {
              logger.error('showSignSuccessAlert', 'Could not copy text to clipboard: ', err)
            }
          )
          await closeToast()
        }
      }
    ]
  })
}

/**
 * Show a "Transaction Signed" alert
 *
 * @param data The data that is emitted by the ENCRYPT_REQUEST_SUCCESS event
 */
// TODO: ENCRYPTION
// const showEncryptSuccessAlert = async (
//   data: MavletEventType[MavletEvent.ENCRYPT_REQUEST_SUCCESS]
// ): Promise<void> => {
//   const output = data.output
//   await openToast({
//     body: `{{wallet}}\u00A0 successfully ${
//       data.output.cryptoOperation === EncryptionOperation.ENCRYPT ? 'encrypted' : 'decrypted'
//     } payload`,
//     timer: SUCCESS_TIMER,
//     state: 'finished',
//     walletInfo: data.walletInfo,
//     actions: [
//       {
//         text: `Payload: <strong>${shortenString(output.payload)}</strong>`,
//         actionText: 'Copy to clipboard',
//         actionCallback: async (): Promise<void> => {
//           navigator.clipboard.writeText(output.payload).then(
//             () => {
//               logger.log('showSignSuccessAlert', 'Copying to clipboard was successful!')
//             },
//             (err) => {
//               logger.error('showSignSuccessAlert', 'Could not copy text to clipboard: ', err)
//             }
//           )
//           await closeToast()
//         }
//       }
//     ]
//   })
// }

/**
 * Show a "Broadcasted" alert
 *
 * @param data The data that is emitted by the BROADCAST_REQUEST_SUCCESS event
 */
const showBroadcastSuccessAlert = async (
  data: MavletEventType[MavletEvent.BROADCAST_REQUEST_SUCCESS]
): Promise<void> => {
  const { network, output, blockExplorer } = data

  await openToast({
    body: `{{wallet}}\u00A0 successfully injected operation`,
    timer: SUCCESS_TIMER,
    state: 'finished',
    walletInfo: data.walletInfo,
    actions: [
      {
        text: shortenString(output.transactionHash),
        isBold: true,
        actionText: `Open Blockexplorer`,
        actionLogo: 'external',
        actionCallback: async (): Promise<void> => {
          const link: string = await blockExplorer.getTransactionLink(
            output.transactionHash,
            network
          )
          window.open(link, '_blank', 'noopener')
          await closeToast()
        }
      }
    ]
  })
}

const emptyHandler = (): MavletEventHandlerFunction => async (): Promise<void> => {
  //
}

export type MavletEventHandlerFunction<T = unknown> = (
  data: T,
  eventCallback?: AlertButton[]
) => void | Promise<void>

/**
 * The default event handlers
 */
export const defaultEventCallbacks: {
  [key in MavletEvent]: MavletEventHandlerFunction<MavletEventType[key]>
} = {
  [MavletEvent.PERMISSION_REQUEST_SENT]: showSentToast,
  [MavletEvent.PERMISSION_REQUEST_SUCCESS]: showPermissionSuccessAlert,
  [MavletEvent.PERMISSION_REQUEST_ERROR]: showErrorToast,
  [MavletEvent.PROOF_OF_EVENT_CHALLENGE_REQUEST_SENT]: showSentToast,
  [MavletEvent.PROOF_OF_EVENT_CHALLENGE_REQUEST_SUCCESS]: showProofOfEventChallengeSuccessAlert,
  [MavletEvent.PROOF_OF_EVENT_CHALLENGE_REQUEST_ERROR]: showErrorToast,
  [MavletEvent.SIMULATED_PROOF_OF_EVENT_CHALLENGE_REQUEST_SENT]: showSentToast,
  [MavletEvent.SIMULATED_PROOF_OF_EVENT_CHALLENGE_REQUEST_SUCCESS]:
    showSimulatedProofOfEventChallengeSuccessAlert,
  [MavletEvent.SIMULATED_PROOF_OF_EVENT_CHALLENGE_REQUEST_ERROR]: showErrorToast,
  [MavletEvent.OPERATION_REQUEST_SENT]: showSentToast,
  [MavletEvent.OPERATION_REQUEST_SUCCESS]: showOperationSuccessAlert,
  [MavletEvent.OPERATION_REQUEST_ERROR]: showErrorToast,
  [MavletEvent.SIGN_REQUEST_SENT]: showSentToast,
  [MavletEvent.SIGN_REQUEST_SUCCESS]: showSignSuccessAlert,
  [MavletEvent.SIGN_REQUEST_ERROR]: showErrorToast,
  // TODO: ENCRYPTION
  // [MavletEvent.ENCRYPT_REQUEST_SENT]: showSentToast,
  // [MavletEvent.ENCRYPT_REQUEST_SUCCESS]: showEncryptSuccessAlert,
  // [MavletEvent.ENCRYPT_REQUEST_ERROR]: showErrorToast,
  [MavletEvent.BROADCAST_REQUEST_SENT]: showSentToast,
  [MavletEvent.BROADCAST_REQUEST_SUCCESS]: showBroadcastSuccessAlert,
  [MavletEvent.BROADCAST_REQUEST_ERROR]: showErrorToast,
  [MavletEvent.ACKNOWLEDGE_RECEIVED]: showAcknowledgedToast,
  [MavletEvent.LOCAL_RATE_LIMIT_REACHED]: showRateLimitReached,
  [MavletEvent.NO_PERMISSIONS]: showNoPermissionAlert,
  [MavletEvent.ACTIVE_ACCOUNT_SET]: emptyHandler(),
  [MavletEvent.ACTIVE_TRANSPORT_SET]: emptyHandler(),
  [MavletEvent.INVALID_ACTIVE_ACCOUNT_STATE]: showInvalidActiveAccountState,
  [MavletEvent.SHOW_PREPARE]: showPrepare,
  [MavletEvent.HIDE_UI]: hideUI,
  [MavletEvent.PAIR_INIT]: showPairAlert,
  [MavletEvent.PAIR_SUCCESS]: showExtensionConnectedAlert,
  [MavletEvent.CHANNEL_CLOSED]: showChannelClosedAlert,
  [MavletEvent.INTERNAL_ERROR]: showInternalErrorAlert,
  [MavletEvent.UNKNOWN]: emptyHandler()
}

/**
 * @internalapi
 *
 * Handles mavlet events
 */
export class MavletEventHandler {
  private readonly callbackMap: {
    [key in MavletEvent]: MavletEventHandlerFunction<any>[] // TODO: Fix type
  } = {
    [MavletEvent.PERMISSION_REQUEST_SENT]: [defaultEventCallbacks.PERMISSION_REQUEST_SENT],
    [MavletEvent.PERMISSION_REQUEST_SUCCESS]: [defaultEventCallbacks.PERMISSION_REQUEST_SUCCESS],
    [MavletEvent.PERMISSION_REQUEST_ERROR]: [defaultEventCallbacks.PERMISSION_REQUEST_ERROR],
    [MavletEvent.PROOF_OF_EVENT_CHALLENGE_REQUEST_SENT]: [
      defaultEventCallbacks.PERMISSION_REQUEST_SENT
    ],
    [MavletEvent.PROOF_OF_EVENT_CHALLENGE_REQUEST_SUCCESS]: [
      defaultEventCallbacks.PROOF_OF_EVENT_CHALLENGE_REQUEST_SUCCESS
    ],
    [MavletEvent.PROOF_OF_EVENT_CHALLENGE_REQUEST_ERROR]: [
      defaultEventCallbacks.PROOF_OF_EVENT_CHALLENGE_REQUEST_ERROR
    ],
    [MavletEvent.SIMULATED_PROOF_OF_EVENT_CHALLENGE_REQUEST_SENT]: [
      defaultEventCallbacks.SIMULATED_PROOF_OF_EVENT_CHALLENGE_REQUEST_SENT
    ],
    [MavletEvent.SIMULATED_PROOF_OF_EVENT_CHALLENGE_REQUEST_SUCCESS]: [
      defaultEventCallbacks.SIMULATED_PROOF_OF_EVENT_CHALLENGE_REQUEST_SUCCESS
    ],
    [MavletEvent.SIMULATED_PROOF_OF_EVENT_CHALLENGE_REQUEST_ERROR]: [
      defaultEventCallbacks.SIMULATED_PROOF_OF_EVENT_CHALLENGE_REQUEST_ERROR
    ],
    [MavletEvent.OPERATION_REQUEST_SENT]: [defaultEventCallbacks.OPERATION_REQUEST_SENT],
    [MavletEvent.OPERATION_REQUEST_SUCCESS]: [defaultEventCallbacks.OPERATION_REQUEST_SUCCESS],
    [MavletEvent.OPERATION_REQUEST_ERROR]: [defaultEventCallbacks.OPERATION_REQUEST_ERROR],
    [MavletEvent.SIGN_REQUEST_SENT]: [defaultEventCallbacks.SIGN_REQUEST_SENT],
    [MavletEvent.SIGN_REQUEST_SUCCESS]: [defaultEventCallbacks.SIGN_REQUEST_SUCCESS],
    [MavletEvent.SIGN_REQUEST_ERROR]: [defaultEventCallbacks.SIGN_REQUEST_ERROR],
    // TODO: ENCRYPTION
    // [MavletEvent.ENCRYPT_REQUEST_SENT]: [defaultEventCallbacks.ENCRYPT_REQUEST_SENT],
    // [MavletEvent.ENCRYPT_REQUEST_SUCCESS]: [defaultEventCallbacks.ENCRYPT_REQUEST_SUCCESS],
    // [MavletEvent.ENCRYPT_REQUEST_ERROR]: [defaultEventCallbacks.ENCRYPT_REQUEST_ERROR],
    [MavletEvent.BROADCAST_REQUEST_SENT]: [defaultEventCallbacks.BROADCAST_REQUEST_SENT],
    [MavletEvent.BROADCAST_REQUEST_SUCCESS]: [defaultEventCallbacks.BROADCAST_REQUEST_SUCCESS],
    [MavletEvent.BROADCAST_REQUEST_ERROR]: [defaultEventCallbacks.BROADCAST_REQUEST_ERROR],
    [MavletEvent.ACKNOWLEDGE_RECEIVED]: [defaultEventCallbacks.ACKNOWLEDGE_RECEIVED],
    [MavletEvent.LOCAL_RATE_LIMIT_REACHED]: [defaultEventCallbacks.LOCAL_RATE_LIMIT_REACHED],
    [MavletEvent.NO_PERMISSIONS]: [defaultEventCallbacks.NO_PERMISSIONS],
    [MavletEvent.ACTIVE_ACCOUNT_SET]: [defaultEventCallbacks.ACTIVE_ACCOUNT_SET],
    [MavletEvent.ACTIVE_TRANSPORT_SET]: [defaultEventCallbacks.ACTIVE_TRANSPORT_SET],
    [MavletEvent.INVALID_ACTIVE_ACCOUNT_STATE]: [
      defaultEventCallbacks.INVALID_ACTIVE_ACCOUNT_STATE
    ],
    [MavletEvent.SHOW_PREPARE]: [defaultEventCallbacks.SHOW_PREPARE],
    [MavletEvent.HIDE_UI]: [defaultEventCallbacks.HIDE_UI],
    [MavletEvent.PAIR_INIT]: [defaultEventCallbacks.PAIR_INIT],
    [MavletEvent.PAIR_SUCCESS]: [defaultEventCallbacks.PAIR_SUCCESS],
    [MavletEvent.CHANNEL_CLOSED]: [defaultEventCallbacks.CHANNEL_CLOSED],
    [MavletEvent.INTERNAL_ERROR]: [defaultEventCallbacks.INTERNAL_ERROR],
    [MavletEvent.UNKNOWN]: [defaultEventCallbacks.UNKNOWN]
  }
  constructor(
    eventsToOverride: {
      [key in MavletEvent]?: {
        handler: MavletEventHandlerFunction<MavletEventType[key]>
      }
    } = {},
    overrideAll?: boolean
  ) {
    if (overrideAll) {
      this.setAllHandlers()
    }
    this.overrideDefaults(eventsToOverride)
  }

  /**
   * A method to subscribe to a specific mavlet event and register a callback
   *
   * @param event The event being emitted
   * @param eventCallback The callback that will be invoked
   */
  public async on<K extends MavletEvent>(
    event: K,
    eventCallback: MavletEventHandlerFunction<MavletEventType[K]>
  ): Promise<void> {
    const listeners = this.callbackMap[event] || []
    listeners.push(eventCallback)
    this.callbackMap[event] = listeners
  }

  /**
   * Emit a mavlet event
   *
   * @param event The event being emitted
   * @param data The data to be emit
   */
  public async emit<K extends MavletEvent>(
    event: K,
    data?: MavletEventType[K],
    eventCallback?: AlertButton[]
  ): Promise<void> {
    const listeners = this.callbackMap[event]
    if (listeners && listeners.length > 0) {
      listeners.forEach(async (listener: MavletEventHandlerFunction) => {
        try {
          await listener(data, eventCallback)
        } catch (listenerError) {
          logger.error(`error handling event ${event}`, listenerError)
        }
      })
    }
  }

  /**
   * Override mavlet event default callbacks. This can be used to disable default alert/toast behaviour
   *
   * @param eventsToOverride An object with the events to override
   */
  private overrideDefaults(eventsToOverride: {
    [key in MavletEvent]?: {
      handler: MavletEventHandlerFunction<MavletEventType[key]>
    }
  }): void {
    Object.keys(eventsToOverride).forEach((untypedEvent: string) => {
      const eventType: MavletEvent = untypedEvent as MavletEvent
      const event = eventsToOverride[eventType]
      if (event) {
        this.callbackMap[eventType] = [event.handler]
      }
    })
  }

  /**
   * Set all event callbacks to a specific handler.
   */
  private setAllHandlers(handler?: MavletEventHandlerFunction): void {
    Object.keys(this.callbackMap).forEach((untypedEvent: string) => {
      const eventType: MavletEvent = untypedEvent as MavletEvent
      this.callbackMap[eventType] = []
      if (handler) {
        this.callbackMap[eventType].push(handler)
      } else {
        this.callbackMap[eventType].push((...data) => {
          logger.log(untypedEvent, ...data)
        })
      }
    })
  }
}
