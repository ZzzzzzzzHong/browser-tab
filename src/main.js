import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import antdUseConfig from './config/antd-use-config'

import './style/index'

const app = createApp(App)
antdUseConfig(app)

app.use(store).use(router).mount('#app')
