import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@coreui/coreui/dist/css/coreui.min.css'
import '@coreui/coreui'

createApp(App)
  .use(store)
  .use(router)
  .mount('#app')
