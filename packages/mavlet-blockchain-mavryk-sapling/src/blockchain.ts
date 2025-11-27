import {
  Blockchain,
  BlockchainMessage,
  ResponseInput,
  ExtensionApp,
  DesktopApp,
  WebApp,
  App
} from '@mavrykdynamics/mavlet-types'
import { MavrykSaplingPermissionResponse } from './types/messages/permission-response'
import { extensionList, desktopList, webList, iOSList } from './ui/alert/wallet-lists'

export class MavrykSaplingBlockchain implements Blockchain {
  public readonly identifier: string = 'mavryk-sapling'

  async validateRequest(_input: BlockchainMessage): Promise<void> {
    // No special validation required
  }

  async handleResponse(_input: ResponseInput): Promise<void> {
    // No special response handling required.
  }

  async getWalletLists(): Promise<{
    extensionList: ExtensionApp[]
    desktopList: DesktopApp[]
    webList: WebApp[]
    iOSList: App[]
  }> {
    return {
      extensionList: extensionList,
      desktopList: desktopList,
      webList: webList,
      iOSList: iOSList
    }
  }

  async getAccountInfosFromPermissionResponse(
    permissionResponse: MavrykSaplingPermissionResponse
  ): Promise<{ accountId: string; address: string; publicKey: string }[]> {
    return permissionResponse.blockchainData.accounts.map((account) => ({
      accountId: account.accountId,
      address: account.address,
      publicKey: account.viewingKey ?? '' // Public key or viewing key is not shared in permission request for privacy reasons
    }))
  }
}
