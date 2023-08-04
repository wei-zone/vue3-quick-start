import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { log } from '@/libs'

import './assets/style/main.scss'
import 'virtual:uno.css'

log()

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
