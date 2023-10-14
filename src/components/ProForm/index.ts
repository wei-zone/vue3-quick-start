import type { App } from 'vue'
import ProForm from './index.vue'

ProForm.install = (app: App) => {
    app.component(ProForm.name, ProForm)
}

export default ProForm
