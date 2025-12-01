import { App, DesktopApp, ExtensionApp, WebApp } from 'packages/mavlet-types/src/types/ui'
// import { NetworkType } from 'packages/mavlet-types/src/types'
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

export const mavrykSaplingExtensionList: ExtensionApp[] = []

export const mavrykSaplingWebList: WebApp[] = []

export const mavrykSaplingDesktopList: DesktopApp[] = []

export const mavrykSaplingIosList: App[] = []
