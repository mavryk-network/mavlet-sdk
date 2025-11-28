import { ExposedPromise } from '@mavrykdynamics/mavlet-utils'
import { getKeypairFromSeed, toHex, generateGUID } from '@mavrykdynamics/mavlet-utils'
import { AnalyticsInterface, Storage, StorageKey } from '@mavrykdynamics/mavlet-types'
import { SDK_VERSION } from '../../constants'
import { windowRef } from '../../MockWindow'
import { MavletClientOptions } from './MavletClientOptions'
import { KeyPair } from '@stablelib/ed25519'
import { MockAnalytics } from '../../MockAnalytics'

/**
 * @internalapi
 *
 * The mavlet client is an abstract client that handles everything that is shared between all other clients.
 * Specifically, it handles managing the mavletId and and the local keypair.
 */
export abstract class MavletClient {
  /**
   * The name of the client
   */
  public readonly name: string

  /**
   * The URL of the dApp Icon. This can be used to display the icon of the dApp on in the wallet
   */
  public readonly iconUrl?: string

  /**
   * The URL of the dApp.
   */
  public readonly appUrl?: string

  /** The mavletId is a public key that is used to identify one specific application (dapp or wallet).
   * This is used inside a message to specify the sender, for example.
   */
  protected _mavletId: ExposedPromise<string> = new ExposedPromise()
  public get mavletId(): Promise<string> {
    return this._mavletId.promise
  }

  protected storage: Storage

  protected analytics: AnalyticsInterface

  /**
   * The local keypair that is used for the communication encryption
   */
  protected _keyPair: ExposedPromise<KeyPair> = new ExposedPromise()
  protected get keyPair(): Promise<KeyPair> {
    return this._keyPair.promise
  }

  constructor(config: MavletClientOptions) {
    if (!config.name) {
      throw new Error('Name not set')
    }
    if (!config.storage) {
      throw new Error('Storage not set')
    }
    this.name = config.name
    this.iconUrl = config.iconUrl
    this.appUrl = config.appUrl ?? windowRef.location.origin
    this.storage = config.storage
    this.analytics = config.analytics ?? new MockAnalytics()

    // TODO: This is a temporary "workaround" to prevent users from creating multiple Client instances
    if ((windowRef as any).mavletCreatedClientInstance) {
      console.error(
        '[MAVLET] It looks like you created multiple Mavlet SDK Client instances. This can lead to problems. Only create one instance and re-use it everywhere.'
      )
    } else {
      ;(windowRef as any).mavletCreatedClientInstance = true
    }

    this.initSDK().catch(console.error)
  }

  /**
   * This resets the SDK. After using this method, this instance is no longer usable. You will have to instanciate a new client.
   */
  public async destroy(): Promise<void> {
    await this.removeMavletEntriesFromStorage()
    ;(windowRef as any).mavletCreatedClientInstance = false
  }

  /**
   * This method initializes the SDK by setting some values in the storage and generating a keypair.
   */
  private async initSDK(): Promise<void> {
    this.storage.set(StorageKey.MAVLET_SDK_VERSION, SDK_VERSION).catch(console.error)

    this.loadOrCreateMavletSecret().catch(console.error)

    return this.keyPair.then((keyPair) => {
      this._mavletId.resolve(toHex(keyPair.publicKey))
    })
  }

  /**
   * Removes all mavlet values from the storage.
   */
  private async removeMavletEntriesFromStorage(): Promise<void> {
    const allKeys: StorageKey[] = Object.values(StorageKey)
    await Promise.all(allKeys.map((key) => this.storage.delete(key)))
  }

  /**
   * This method tries to load the seed from storage, if it doesn't exist, a new one will be created and persisted.
   */
  private async loadOrCreateMavletSecret(): Promise<void> {
    const storageValue: unknown = await this.storage.get(StorageKey.MAVLET_SDK_SECRET_SEED)
    if (storageValue && typeof storageValue === 'string') {
      this._keyPair.resolve(await getKeypairFromSeed(storageValue))
    } else {
      const key = await generateGUID()
      await this.storage.set(StorageKey.MAVLET_SDK_SECRET_SEED, key)
      this._keyPair.resolve(await getKeypairFromSeed(key))
    }
  }
}
