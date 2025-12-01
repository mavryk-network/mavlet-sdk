/**
 * General docs
 * @module public
 */
import { Client } from './clients/client/Client'
import { MavletError } from './errors/MavletError'
import { BroadcastMavletError } from './errors/BroadcastMavletError'
import { NetworkNotSupportedMavletError } from './errors/NetworkNotSupportedMavletError'
import { NoAddressMavletError } from './errors/NoAddressMavletError'
import { NoPrivateKeyMavletError } from './errors/NoPrivateKeyMavletError'
import { NotGrantedMavletError } from './errors/NotGrantedMavletError'
import { ParametersInvalidMavletError } from './errors/ParametersInvalidMavletError'
import { TooManyOperationsMavletError } from './errors/TooManyOperationsMavletError'
import { TransactionInvalidMavletError } from './errors/TransactionInvalidMavletError'
import { UnknownMavletError } from './errors/UnknownMavletError'
import { Transport } from './transports/Transport'
import { ChromeStorage } from './storage/ChromeStorage'
import { LocalStorage } from './storage/LocalStorage'
import { getStorage } from './storage/getStorage'
import { Serializer } from './Serializer'
// import { RequestEncryptPayloadInput } from './types/RequestEncryptPayloadInput'
import { ClientOptions } from './clients/client/ClientOptions'
import { SDK_VERSION, MAVLET_VERSION } from './constants'
import { AccountManager } from './managers/AccountManager'
import { AppMetadataManager } from './managers/AppMetadataManager'
import { PermissionManager } from './managers/PermissionManager'
import { MavletClient } from './clients/mavlet-client/MavletClient'
import { MavletClientOptions } from './clients/mavlet-client/MavletClientOptions'
import { getAccountIdentifier } from './utils/get-account-identifier'
import { AbortedMavletError } from './errors/AbortedMavletError'
import { getSenderId } from './utils/get-sender-id'
import { PeerManager } from './managers/PeerManager'
import { MessageBasedClient } from './transports/clients/MessageBasedClient'
import { setDebugEnabled, getDebugEnabled } from './debug'
// import { EncryptPayloadRequest } from './types/mavlet/messages/EncryptPayloadRequest'
// import { EncryptPayloadResponse } from './types/mavlet/messages/EncryptPayloadResponse'
// import { EncryptionTypeNotSupportedMavletError } from './errors/EncryptionTypeNotSupportedMavletError'
import { SignatureTypeNotSupportedMavletError } from './errors/SignatureTypeNotSupportedMavletError'
import { getLogger, Logger, setLogger } from './utils/Logger'
import { windowRef } from './MockWindow'
import { CommunicationClient } from './transports/clients/CommunicationClient'
import { ClientEvents } from './transports/clients/ClientEvents'
import { WCStorage } from './storage/WCStorage'
import { IndexedDBStorage } from './storage/IndexedDBStorage'
import { StorageValidator } from './storage/StorageValidator'
// import { EncryptionType } from './types/EncryptionType'
// import { EncryptionOperation } from './types/EncryptionOperation'

// Clients
export { MavletClient, MavletClientOptions, Client, ClientOptions, ClientEvents }

// Errors
export {
  MavletError,
  AbortedMavletError,
  BroadcastMavletError,
  NetworkNotSupportedMavletError,
  NoAddressMavletError,
  NoPrivateKeyMavletError,
  NotGrantedMavletError,
  ParametersInvalidMavletError,
  TooManyOperationsMavletError,
  TransactionInvalidMavletError,
  SignatureTypeNotSupportedMavletError,
  // EncryptionTypeNotSupportedMavletError,
  UnknownMavletError
}

// Transport
export { Transport, MessageBasedClient, CommunicationClient }

// Storage
export { ChromeStorage, LocalStorage, WCStorage, IndexedDBStorage, StorageValidator, getStorage }

// Managers
export { PeerManager, AccountManager, AppMetadataManager, PermissionManager }

// Constants
export { SDK_VERSION, MAVLET_VERSION }

// Utils
export { getSenderId, getAccountIdentifier, windowRef }

// Others
export { Serializer, Logger, setLogger, getLogger }

// Debug
export { setDebugEnabled, getDebugEnabled }

export { NOTIFICATION_ORACLE_URL } from './constants'
