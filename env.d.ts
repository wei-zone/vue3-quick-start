interface ImportMetaEnv {
    readonly BASE_URL: string
    readonly MODE: string
    readonly APP_VERSION: string
    readonly APP_NAME: string
    readonly APP_BUILD_TIME: string
    readonly VITE_API_URL: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
    readonly glob: (path: string, config: object) => Record<string, () => Promise<{ default: any }>>
}

declare module 'weixin-js-sdk' {
    const wx: {
        updateAppMessageShareData: (data: any) => void
        updateTimelineShareData: (data: any) => void
        onMenuShareAppMessage: (data: any) => void
        onMenuShareTimeline: (data: any) => void
        onMenuShareQQ: (data: any) => void
        onMenuShareWeibo: (data: any) => void
        onMenuShareQZone: (data: any) => void
        config: (data: object) => void
        ready: (callback: () => void) => void
        error: (callback: (res: string) => void) => void
    }
    export default wx
}
