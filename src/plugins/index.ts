/**
 * 导出所有的插件
 */
import type { App } from 'vue'
import directives from './directives'
export default {
    install: (app: App) => {
        app.use(directives)
    }
}
