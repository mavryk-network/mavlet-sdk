import { MavletMessageType } from '@mavrykdynamics/mavlet-types'
import * as chai from 'chai'
import * as chaiAsPromised from 'chai-as-promised'
import 'mocha'

// use chai-as-promised plugin
chai.use(chaiAsPromised)
const expect = chai.expect

import { MavrykBlockchain } from '../src'

describe('@mavrykdynamics/mavlet-blockchain-mavryk', () => {
  it('should have wallets', async () => {
    const blockchain = new MavrykBlockchain()

    const wallets = await blockchain.getWalletLists()

    expect(Array.isArray(wallets.desktopList)).to.be.true
    expect(Array.isArray(wallets.extensionList)).to.be.true
    expect(Array.isArray(wallets.iOSList)).to.be.true
    expect(Array.isArray(wallets.webList)).to.be.true
  })

  it('should handle a permission response', async () => {
    const blockchain = new MavrykBlockchain()

    const accountInfos = await blockchain.getAccountInfosFromPermissionResponse({
      blockchainIdentifier: 'mavryk',
      type: MavletMessageType.PermissionResponse,
      blockchainData: {
        appMetadata: { senderId: 'sender', name: 'name' },
        scopes: ['test']
      }
    })

    expect(accountInfos.length).to.equal(1)
    expect(accountInfos[0].accountId).to.equal('')
    expect(accountInfos[0].publicKey).to.equal('')
    expect(accountInfos[0].address).to.equal('')
  })
})
