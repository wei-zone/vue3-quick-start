import './assets/style/main.scss'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from '@/App.vue'
import router from '@/router'
import { appInfo } from '@/libs'
import plugins from '@/plugins'
appInfo()

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(plugins)

app.mount('#app')
