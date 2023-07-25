/**
 * @Author: forguo
 * @Date: 2023/7/9 11:44
 * @Description: console控制栏调试
 */

// 环境变量
import { loadRemoteJs } from '@/libs/utils'

export default () => {
    console.log(import.meta.env)
    // 由于process.env是单个定义的，所以也只能单个访问
    // @ts-ignore
    console.log(process.env.APP_VERSION)
    // @ts-ignore
    console.log(process.env.APP_NAME)
    // @ts-ignore
    console.log(process.env.APP_BUILD_TIME)
    // 开启移动端debug
    const src = '//cdn.jsdelivr.net/npm/eruda'
    if (!/debug=true/.test(window.location.href)) {
        return
    }
    loadRemoteJs(src).then(() => {
        // @ts-ignore
        eruda.init()
    })
}
