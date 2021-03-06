// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
export enum NativeActions {
  bannerHide = 'bannerHide',
  bannerShow = 'bannerShow',
  configRequest = 'configRequest',
  interstitialIsLoaded = 'interstitialIsLoaded',
  interstitialLoad = 'interstitialLoad',
  interstitialShow = 'interstitialShow',
  ready = 'ready',
  requestTrackingAuthorization = 'requestTrackingAuthorization',
  rewardedInterstitialIsLoaded = 'rewardedInterstitialIsLoaded',
  rewardedInterstitialLoad = 'rewardedInterstitialLoad',
  rewardedInterstitialShow = 'rewardedInterstitialShow',
  rewardedIsLoaded = 'rewardedIsLoaded',
  rewardedLoad = 'rewardedLoad',
  rewardedShow = 'rewardedShow',
  setAppMuted = 'setAppMuted',
  setAppVolume = 'setAppVolume',
  start = 'start',
}

export enum Events {
  bannerClick = 'admob.banner.click',
  bannerClose = 'admob.banner.close',
  bannerImpression = 'admob.banner.impression',
  bannerLoad = 'admob.banner.load',
  bannerLoadFail = 'admob.banner.loadFail',
  bannerOpen = 'admob.banner.open',
  interstitialDismiss = 'admob.interstitial.dismiss',
  interstitialLoad = 'admob.interstitial.load',
  interstitialLoadFail = 'admob.interstitial.loadFail',
  interstitialShow = 'admob.interstitial.show',
  interstitialShowFail = 'admob.interstitial.showFail',
  ready = 'admob.ready',
  rewardedDismiss = 'admob.rewarded.dismiss',
  rewardedInterstitialDismiss = 'admob.rewardedInterstitial.dismiss',
  rewardedInterstitialLoad = 'admob.rewardedInterstitial.load',
  rewardedInterstitialLoadFail = 'admob.rewardedInterstitial.loadFail',
  rewardedInterstitialReward = 'admob.rewardedInterstitial.reward',
  rewardedInterstitialShow = 'admob.rewardedInterstitial.show',
  rewardedInterstitialShowFail = 'admob.rewardedInterstitial.showFail',
  rewardedLoad = 'admob.rewarded.load',
  rewardedLoadFail = 'admob.rewarded.loadFail',
  rewardedReward = 'admob.rewarded.reward',
  rewardedShow = 'admob.rewarded.show',
  rewardedShowFail = 'admob.rewarded.showFail',
}

export enum AdSizeType {
  BANNER,
  LARGE_BANNER,
  MEDIUM_RECTANGLE,
  FULL_BANNER,
  LEADERBOARD,
  SMART_BANNER,
}

export const execAsync = (action: NativeActions, args?: any[]) => {
  return new Promise((resolve, reject) => {
    cordova.exec(resolve, reject, 'AdMob', action, args)
  })
}

export function fireDocumentEvent(eventName: string, data = null) {
  const event = new CustomEvent(eventName, { detail: data })
  document.dispatchEvent(event)
}

export function waitEvent(
  successEvent: string,
  failEvent = '',
): Promise<CustomEvent> {
  return new Promise((resolve, reject) => {
    document.addEventListener(
      successEvent as any,
      (event: CustomEvent) => {
        resolve(event)
      },
      false,
    )

    if (failEvent) {
      document.addEventListener(
        failEvent as any,
        (failedEvent: CustomEvent) => {
          reject(failedEvent)
        },
        false,
      )
    }
  })
}

export const initPlugin = () => {
  document.addEventListener(
    'deviceready',
    () => {
      cordova.exec(
        (event) => {
          fireDocumentEvent(event.type, event.data)
        },
        console.error,
        'AdMob',
        NativeActions.ready,
      )
    },
    false,
  )
}
