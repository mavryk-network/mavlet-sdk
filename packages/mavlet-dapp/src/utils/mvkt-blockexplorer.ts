import { Network, NetworkType } from '@mavrykdynamics/mavlet-types'
import { BlockExplorer } from './block-explorer'

export class MvktBlockExplorer extends BlockExplorer {
  constructor(
    public readonly rpcUrls: { [key in NetworkType]: string } = {
      [NetworkType.MAINNET]: 'https://api.mavryk.network',
      [NetworkType.BASENET]: 'https://basenet.api.mavryk.network',
      [NetworkType.WEEKLYNET]: 'https://weeklynet.api.mavryk.network',
      [NetworkType.DAILYNET]: 'https://dailynet.api.mavryk.network',
      [NetworkType.ATLASNET]: 'https://atlasnet.api.mavryk.network',
      [NetworkType.BOREASNET]: 'https://boreasnet.api.mavryk.network',
      [NetworkType.CUSTOM]: 'https://atlasnet.api.mavryk.network',
    }
  ) {
    super(rpcUrls)
  }

  public async getAddressLink(address: string, network: Network): Promise<string> {
    const blockExplorer = await this.getLinkForNetwork(network)

    return `${blockExplorer}/${address}`
  }
  public async getTransactionLink(transactionId: string, network: Network): Promise<string> {
    const blockExplorer = await this.getLinkForNetwork(network)

    return `${blockExplorer}/${transactionId}`
  }
}
