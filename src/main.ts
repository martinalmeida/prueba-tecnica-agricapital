import { createApp } from 'vue'
import { createPinia } from 'pinia'

import './index.css'

import App from './App.vue'
import router from './router'
import LayoutBody from './layouts/LayoutBody.vue'
import LayoutHeader from '@/layouts/LayoutHeader.vue'
import LayoutFooter from '@/layouts/LayoutFooter.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('LayoutBody', LayoutBody)
app.component('LayoutHeader', LayoutHeader)
app.component('LayoutFooter', LayoutFooter)

app.mount('#app')
