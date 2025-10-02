import '@/assets/main.css'
import '@/styles/global.scss'
import vuetify from '@/plugins/vuetify.config.ts';

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@mdi/font/css/materialdesignicons.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(vuetify)
app.use(createPinia())
app.use(router)

app.mount('#app')
