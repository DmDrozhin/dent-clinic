import '@/assets/main.css'
import '@/styles/global.scss'
import vuetify from '@/plugins/vuetify.config.ts'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@mdi/font/css/materialdesignicons.css'
import './styles/overrides.scss'

import '@/global/swiper/styles/swiper-scroll.scss';
import { register } from 'swiper/element/bundle';
register();

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(vuetify)
app.use(createPinia())
app.use(router)

app.mount('#app')
