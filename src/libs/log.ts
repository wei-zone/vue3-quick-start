/**
 * @Author: forguo
 * @Date: 2023/7/9 11:44
 * @Description: console控制栏调试
 */

// 环境变量
import { loadRemoteJs } from '@/libs/utils'
import chalk from 'chalk'

export default () => {
    const log = console.log
    console.group('App')
    log(
        chalk.whiteBright(
            chalk.bgBlackBright(' APP_NAME ') + chalk.whiteBright(chalk.bgGreen(` ${import.meta.env.APP_NAME} `))
        )
    )
    log(
        chalk.whiteBright(
            chalk.bgBlackBright(' APP_VERSION ') + chalk.whiteBright(chalk.bgBlue(` ${import.meta.env.APP_VERSION} `))
        )
    )
    log(
        chalk.whiteBright(
            chalk.bgBlackBright(' APP_BUILD_TIME ') +
                chalk.whiteBright(chalk.bgBlue(` ${import.meta.env.APP_BUILD_TIME} `))
        )
    )
    console.groupEnd()
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
