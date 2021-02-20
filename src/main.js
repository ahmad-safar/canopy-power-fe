import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@coreui/coreui/dist/css/coreui.min.css'
import '@coreui/coreui'
import '@fortawesome/fontawesome-svg-core'
import '@fortawesome/free-solid-svg-icons'
import '@fortawesome/vue-fontawesome'

createApp(App)
  .use(store)
  .use(router)
  .mount('#app')
