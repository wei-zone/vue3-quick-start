import type { Directive, UnwrapRef } from 'vue'
import type { LoadingInstance } from './createLoading'

export type LoadingOptionsResolved = {
    delay?: number | string | null
    indicator?: any
    size?: string | null
    spinning?: boolean
    tip?: string | null
    wrapperClassName?: string | null
    background?: string | null
    fullscreen?: boolean
    // 父级元素
    parent?: HTMLElement
    // 目标元素
    target?: HTMLElement | string
}

export type LoadingOptions = Partial<LoadingOptionsResolved>

export interface directiveInstance {
    [propName: string]: Directive
}

export const INSTANCE_KEY = Symbol('ElLoading')
export type LoadingBinding = boolean | UnwrapRef<LoadingOptions>

export interface ElementLoading extends HTMLElement {
    [INSTANCE_KEY]?: {
        instance: LoadingInstance
        options: LoadingOptions
    }
}
