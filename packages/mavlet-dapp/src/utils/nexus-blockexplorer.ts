import { Network, NetworkType } from '@mavrykdynamics/mavlet-types'
import { CONTRACT_PREFIX } from '@mavrykdynamics/mavlet-utils'
import { BlockExplorer } from './block-explorer'

export class NexusBlockExplorer extends BlockExplorer {
  constructor(
    public readonly rpcUrls: { [key in NetworkType]: string } = {
      [NetworkType.MAINNET]: 'https://nexus.mavryk.org/explorer',
      [NetworkType.BASENET]: 'https://basenet.nexus.mavryk.org/explorer',
      [NetworkType.WEEKLYNET]: 'https://weeklynet.nexus.mavryk.org/explorer',
      [NetworkType.DAILYNET]: 'https://dailynet.nexus.mavryk.org/explorer',
      // A custom network has no explorer of its own, fall back to mainnet
      [NetworkType.CUSTOM]: 'https://nexus.mavryk.org/explorer'
    }
  ) {
    super(rpcUrls)
  }

  public async getAddressLink(address: string, network: Network): Promise<string> {
    const blockExplorer = await this.getLinkForNetwork(network)
    // Contracts (KT1) and accounts (mv1, mv2, mv3) are served on different routes
    const path = address.substring(0, 3) === CONTRACT_PREFIX ? 'contract' : 'account'

    return `${blockExplorer}/${path}/${address}`
  }
  public async getTransactionLink(transactionId: string, network: Network): Promise<string> {
    const blockExplorer = await this.getLinkForNetwork(network)

    return `${blockExplorer}/operation/${transactionId}`
  }
}
