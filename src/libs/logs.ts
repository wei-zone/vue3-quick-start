/**
 * @Author: forguo
 * @Date: 2023/7/9 11:44
 * @Description: console控制栏调试
 */

// 环境变量
import { loadRemoteJs } from '@/libs/utils'
;(function () {
    // 开启移动端debug
    const src = '//cdn.jsdelivr.net/npm/eruda'
    if (!/debug=true/.test(window.location.href)) {
        console.log(import.meta.env)
        return
    }
    loadRemoteJs(src).then(res => {
        console.log(import.meta.env)
        console.log(res)
        // @ts-ignore
        eruda.init()
    })
})()
