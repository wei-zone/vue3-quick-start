import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

console.log(import.meta.env)
console.log(import.meta.env.VITE_BASE_URL)

// @ts-ignore
console.log(process.env)

app.mount('#app')
