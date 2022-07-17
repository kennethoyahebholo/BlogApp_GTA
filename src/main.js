import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import Flutterwave from 'flutterwave-vue3'
// import Vue from 'vue'
// import Flutterwave from 'vue-flutterwave'
 

// Vue.use(Flutterwave, { publicKey: 'FLWPUBK_TEST-b236918f222e4c17c14704acacd5edfb-X' })

// createApp(App).use(Flutterwave).mount('#app')

createApp(App)
  .use(router)
  .use(Flutterwave)
  .mount('#app')

  // Vue.use(Flutterwave, { publicKey: 'FLWPUBK_TEST-b236918f222e4c17c14704acacd5edfb-X' })
