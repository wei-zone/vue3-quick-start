/**
 * v-loading 指令
 */
import { isObject } from '@vueuse/core'
import type { Directive, DirectiveBinding, UnwrapRef } from 'vue'

import { createLoading } from './createLoading'
import type { LoadingOptions, ElementLoading, LoadingBinding, LoadingOptionsResolved } from './types'
import { INSTANCE_KEY } from './types'

const isString = (target: any): boolean => typeof target === 'string'

/**
 * 参数处理
 * @param options
 */
const resolveOptions = (options: LoadingOptions): LoadingOptionsResolved => {
    let target: HTMLElement
    if (isString(options.target)) {
        target = document.querySelector<HTMLElement>(options.target as string) ?? document.body
    } else {
        target = (options.target || document.body) as HTMLElement
    }
    return {
        delay: Number(options.delay || 0),
        indicator: options.indicator || false,
        size: options.size || 'default',
        spinning: options.spinning || false,
        tip: options.tip || '',
        wrapperClassName: options.wrapperClassName || '',
        parent: target === document.body ? document.body : target,
        background: options.background || '',
        fullscreen: target === document.body && (options.fullscreen ?? true),
        target
    }
}

/**
 * 创建实例
 * @param el
 * @param binding
 */
const createInstance = (el: ElementLoading, binding: DirectiveBinding<LoadingBinding>) => {
    // 获取对应属性，HTML属性，绑定为 loading-xxx
    const getProp = <K extends keyof LoadingOptions>(name: K) => el.getAttribute(`loading-${name}`)
    // 全屏展示
    const fullscreen = getProp('fullscreen') ?? binding.modifiers.fullscreen

    // Spin组件参数
    const options: LoadingOptions = resolveOptions({
        delay: getProp('delay'),
        indicator: getProp('indicator'),
        size: getProp('size'),
        spinning: !!binding.value,
        tip: getProp('tip'),
        wrapperClassName: getProp('wrapperClassName'),
        background: getProp('background'),
        // 默认为el，全屏为body，否则为自定义
        target: getProp('target') ?? (fullscreen ? undefined : el),
        fullscreen: !!fullscreen
    })

    // 背景色
    const backgroundColor = options.background || 'rgba(44, 48, 56, 0.55)'

    // 实例样式
    const instanceStyle: Partial<CSSStyleDeclaration> = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        flexDirection: 'column',
        gap: '12px',
        backgroundColor,
        opacity: '1',
        zIndex: '1000',
        top: '0',
        right: '0',
        left: '0',
        bottom: '0'
    }

    // 保存实例
    el[INSTANCE_KEY] = {
        options,
        instance: createLoading({
            ...options,
            style: instanceStyle
        })
    }
}

/**
 * 更新实例
 * @param newOptions
 * @param originalOptions
 */
const updateOptions = (newOptions: UnwrapRef<LoadingOptions>, originalOptions: LoadingOptions) => {
    for (const key of Object.keys(originalOptions)) {
        const optionKey = key as keyof LoadingOptions // 类型断言
        if (isRef(originalOptions[optionKey])) originalOptions[optionKey].value = newOptions[optionKey]
    }
}

/**
 * v-loading 指令
 */
const vLoading: Directive<ElementLoading, LoadingBinding> = {
    // 及他自己的所有子节点都挂载完成后调用
    mounted(el, binding) {
        // 如果绑定的值为true，则创建实例
        if (binding.value) {
            createInstance(el, binding)
        }
    },
    // 在绑定元素的父组件
    // 及他自己的所有子节点都更新后调用
    updated(el, binding) {
        const instance = el[INSTANCE_KEY]
        if (binding.oldValue !== binding.value) {
            if (binding.value && !binding.oldValue) {
                createInstance(el, binding)
            } else if (binding.value && binding.oldValue) {
                if (isObject(binding.value)) updateOptions(binding.value, instance!.options)
            } else {
                instance?.instance.close()
            }
        }
    },
    // 绑定元素的父组件卸载后调用
    unmounted(el) {
        el[INSTANCE_KEY]?.instance.close()
    }
}

// 添加基础样式
const style = document.createElement('style')
style.innerHTML = `
  .v-loading-target {
    position: relative;
    > :not(.v-loading-container) {
      pointer-events: none;
      user-select: none;
      opacity: 0.65;
      transition: opacity 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
    }
    > .v-loading-container {
      opacity: 0;
      transition: opacity 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
    }
  }
`

document.head.appendChild(style)

export default vLoading
