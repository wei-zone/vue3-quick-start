import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { log } from '@/libs'
import directives from '@/plugins/directives'
// vant 公共style
import 'vant/es/toast/style'
import 'vant/es/dialog/style'

import './assets/css/main.scss'
import 'virtual:uno.css'

log()

const app = createApp(App)
app.use(directives)
app.use(createPinia())
app.use(router)

app.mount('#app')
