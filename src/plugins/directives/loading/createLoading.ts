import { createVNode, render, reactive } from 'vue'
import { Loading } from 'vant'

export function createLoading(props, wait = false) {
    const target = props.target
    let vm = null
    const data = reactive({
        tip: '',
        spinning: true,
        ...props
    })

    const svg = data.indicator
    // 自定义加载器，可以是一个 svg
    const indicator = createVNode('svg', {
        class: 'circular',
        viewBox: '-10 -10 50 50',
        ...(svg ? { innerHTML: svg } : {})
    })

    // 默认加载器
    const indicatorDefault = createVNode('div', {
        style: {
            fontSize: '24px'
        },
        spin: true
    })

    // 生成 Loading vNode
    vm = createVNode(
        Loading,
        // props
        {
            ...data,
            indicator: data.indicator ? indicator : indicatorDefault
        },
        {
            default: () => data.tip
        }
        // children，允许字符串或数组
    )

    // 输出虚拟DOM
    if (wait) {
        setTimeout(() => {
            render(vm, document.createElement('div'))
        }, 0)
    } else {
        render(vm, document.createElement('div'))
    }

    // 卸载
    function close() {
        if (vm?.el && vm.el.parentNode) {
            vm.el.parentNode.removeChild(vm.el)
        }
    }

    // 挂载
    function open(target: HTMLElement = document.body) {
        if (!vm || !vm.el) {
            return
        }
        target.appendChild(vm.el as HTMLElement)
    }

    if (target) {
        open(target)
    }

    return {
        vm,
        close,
        open,
        get loading() {
            return data.spinning
        },
        get $el(): HTMLElement {
            return vm?.el
        }
    }
}
