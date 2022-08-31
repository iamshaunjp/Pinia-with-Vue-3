import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'

createApp(App).use(createPinia()).mount('#app')
