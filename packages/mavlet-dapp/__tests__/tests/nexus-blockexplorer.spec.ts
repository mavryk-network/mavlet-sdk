import * as chai from 'chai'
import * as chaiAsPromised from 'chai-as-promised'
import 'mocha'

import { Network, NetworkType } from '@mavrykdynamics/mavlet-types'
import { NexusBlockExplorer } from '../../src/utils/nexus-blockexplorer'

chai.use(chaiAsPromised)
const expect = chai.expect

const ACCOUNT_ADDRESS = 'mv1RUZ6mQpNM3dSC95QvkhJHuuQywGJfQRmB'
const CONTRACT_ADDRESS = 'KT1TxqZ8QtKvLu3V3JH7Gx58n7Co8pgtpQU5'
const OPERATION_HASH = 'ootuFLN873FfDBWUQCNRN3UrqvEb4eLB1iBtL47vv7LGaHJswBT'

describe(`NexusBlockExplorer`, () => {
  const blockExplorer = new NexusBlockExplorer()

  describe('getAddressLink', () => {
    it(`should link an account to the account route`, async () => {
      const network: Network = { type: NetworkType.MAINNET }

      const link: string = await blockExplorer.getAddressLink(ACCOUNT_ADDRESS, network)

      expect(link).to.equal(`https://nexus.mavryk.org/explorer/account/${ACCOUNT_ADDRESS}`)
    })

    it(`should link a contract to the contract route`, async () => {
      const network: Network = { type: NetworkType.MAINNET }

      const link: string = await blockExplorer.getAddressLink(CONTRACT_ADDRESS, network)

      expect(link).to.equal(`https://nexus.mavryk.org/explorer/contract/${CONTRACT_ADDRESS}`)
    })

    it(`should use the explorer of the network the address belongs to`, async () => {
      const network: Network = { type: NetworkType.BASENET }

      const link: string = await blockExplorer.getAddressLink(ACCOUNT_ADDRESS, network)

      expect(link).to.equal(`https://basenet.nexus.mavryk.org/explorer/account/${ACCOUNT_ADDRESS}`)
    })
  })

  describe('getTransactionLink', () => {
    it(`should link an operation to the operation route`, async () => {
      const network: Network = { type: NetworkType.MAINNET }

      const link: string = await blockExplorer.getTransactionLink(OPERATION_HASH, network)

      expect(link).to.equal(`https://nexus.mavryk.org/explorer/operation/${OPERATION_HASH}`)
    })

    it(`should use the explorer of the network the operation was sent on`, async () => {
      const network: Network = { type: NetworkType.BASENET }

      const link: string = await blockExplorer.getTransactionLink(OPERATION_HASH, network)

      expect(link).to.equal(`https://basenet.nexus.mavryk.org/explorer/operation/${OPERATION_HASH}`)
    })
  })
})
