/**
 * 导出所有的指令
 */
import type { App } from 'vue'
import loading from './loading'
export const directives = {
    loading
}
export default {
    install: (app: App) => {
        for (const key in directives) {
            app.directive(key, directives[key])
        }
    }
}
