/**
 * 导出所有的指令
 */
import type { App } from 'vue'
import loading from './loading'
import type { directiveInstance } from '@/plugins/directives/loading/types'

export const directives: directiveInstance = {
    loading
}

export default {
    install: (app: App) => {
        for (const key in directives) {
            app.directive(key, directives[key])
        }
    }
}
