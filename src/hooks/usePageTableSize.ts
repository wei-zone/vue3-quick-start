import { onBeforeUnmount, watch, type Ref, nextTick } from 'vue'

export const usePageTableSize = (
    target: Ref<HTMLElement | undefined>,
    callback: (args: { width: number; height: number }) => void
) => {
    // 当页面resize时，执行以下代码
    const handleResize = () => {
        const { width = 0, height = 0 } = target.value?.getBoundingClientRect() || {}
        callback({
            width: Math.ceil(width),
            // 需要减去头部高度，55px
            height: Math.ceil(height - 55)
        })
    }

    const stopWatch = watch(
        target,
        async el => {
            if (el) {
                await nextTick(() => {
                    handleResize()
                })
                // 监听窗口resize事件
                window.addEventListener('resize', handleResize)
            }
        },
        { immediate: true, deep: true }
    )

    // 在组件卸载前移除resize事件监听
    onBeforeUnmount(() => {
        stopWatch()
        window.removeEventListener('resize', handleResize)
    })
}
