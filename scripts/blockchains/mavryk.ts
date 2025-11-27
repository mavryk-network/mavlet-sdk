import { App, DesktopApp, ExtensionApp, WebApp } from 'packages/mavlet-types/src/types/ui'

// TODO: Temporary build fix
export enum NetworkType {
  MAINNET = 'mainnet',
  BASENET = 'basenet', // Long running testnet
  WEEKLYNET = 'weeklynet', // Testnet, resets every week
  DAILYNET = 'dailynet', // Testnet, resets every day
  ATLASNET = 'atlasnet',
  BOREASNET = 'boreasnet',
  CUSTOM = 'custom'
}

export const mavrykExtensionList: ExtensionApp[] = [{
    key: 'mavryk_chrome',
    id: 'cgddkajmbckbjbnondgfcbcojjjdnmji',
    name: 'Mavryk Wallet Chrome',
    shortName: 'Mavryk',
    color: '',
    logo: 'extension-mavryk.png',
    link: 'https://mavryk.org/wallet'
  },
  {
    key: 'mavryk_firefox',
    id: '{34ac229e-1cf5-4e4c-8a77-988155c4360f}',
    name: 'Mavryk Wallet Firefox',
    shortName: 'Mavryk',
    color: '',
    logo: 'extension-mavryk.png',
    link: 'https://mavryk.org/wallet'
  }
]

export const mavrykWebList: WebApp[] = []

export const mavrykDesktopList: DesktopApp[] = []

export const mavrykIosList: App[] = []
