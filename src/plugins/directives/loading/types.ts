export interface LoadingOptions {
    delay?: number
    indicator?: any
    size?: string
    spinning?: boolean
    tip?: string
    wrapperClassName?: string
    background?: string
    fullscreen?: boolean
    // 父级元素
    parent?: HTMLElement | string | null
    // 目标元素
    target?: HTMLElement | string | null
}
