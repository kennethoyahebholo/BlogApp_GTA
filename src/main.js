import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import Flutterwave from 'flutterwave-vue3'


createApp(App)
  .use(router)
  .use(Flutterwave)
  .mount('#app')

