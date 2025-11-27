import { windowRef } from './MockWindow'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let debug: boolean = (windowRef as any).mavletSdkDebugEnabled ? true : false
if (debug) {
  // eslint-disable-next-line no-console
  console.log(
    '[MAVLET]: Debug mode is ON (turned on either by the developer or a browser extension)'
  )
}

export const setDebugEnabled = (enabled: boolean): void => {
  debug = enabled
}

export const getDebugEnabled = (): boolean => debug
