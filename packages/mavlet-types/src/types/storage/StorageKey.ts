/**
 * @internalapi
 */
export enum StorageKey {
  TRANSPORT_P2P_PEERS_DAPP = 'mavlet:communication-peers-dapp',
  TRANSPORT_P2P_PEERS_WALLET = 'mavlet:communication-peers-wallet',
  TRANSPORT_POSTMESSAGE_PEERS_DAPP = 'mavlet:postmessage-peers-dapp',
  TRANSPORT_POSTMESSAGE_PEERS_WALLET = 'mavlet:postmessage-peers-wallet',
  TRANSPORT_WALLETCONNECT_PEERS_DAPP = 'mavlet:walletconnect-peers-dapp',
  LAST_SELECTED_WALLET = 'mavlet:last-selected-wallet',
  ACCOUNTS = 'mavlet:accounts',
  ACTIVE_ACCOUNT = 'mavlet:active-account',
  PUSH_TOKENS = 'mavlet:push-tokens',
  MAVLET_SDK_SECRET_SEED = 'mavlet:sdk-secret-seed',
  APP_METADATA_LIST = 'mavlet:app-metadata-list',
  PERMISSION_LIST = 'mavlet:permissions',
  ONGOING_PROOF_OF_EVENT_CHALLENGES = 'mavlet:ongoing-proof-of-event-challenges',
  MAVLET_SDK_VERSION = 'mavlet:sdk_version',
  MATRIX_PRESERVED_STATE = 'mavlet:sdk-matrix-preserved-state',
  MATRIX_PEER_ROOM_IDS = 'mavlet:matrix-peer-rooms',
  MATRIX_SELECTED_NODE = 'mavlet:matrix-selected-node',
  MULTI_NODE_SETUP_DONE = 'mavlet:multi-node-setup',
  USER_ID = 'mavlet:user-id',
  ENABLE_METRICS = 'mavlet:enable_metrics',
  WC_2_CORE_PAIRING = 'wc@2:core:0.3:pairing',
  WC_2_CLIENT_SESSION = 'wc@2:client:0.3:session',
  WC_2_CORE_KEYCHAIN = 'wc@2:core:0.3:keychain',
  WC_2_CORE_MESSAGES = 'wc@2:core:0.3:messages',
  WC_2_CLIENT_PROPOSAL = 'wc@2:client:0.3:proposal',
  WC_2_CORE_SUBSCRIPTION = 'wc@2:core:0.3:subscription',
  WC_2_CORE_HISTORY = 'wc@2:core:0.3:history',
  WC_2_CORE_EXPIRER = 'wc@2:core:0.3:expirer'
}
