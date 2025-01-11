import './assets/style/main.scss'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from '@/App.vue'
import router from '@/router'
import { appInfo } from '@/libs'
import plugins from '@/plugins'
appInfo()
// 完整引入组件库
import WeDesign from '@wei-design/web-vue'
import '@wei-design/web-vue/lib/style.css'

const app = createApp(App)

app.use(createPinia()).use(router).use(plugins).use(WeDesign).mount('#app')
