import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import bootstrap from 'vue-cli-plugin-bootstrap'
Vue.config.productionTip = false
Vue.use(bootstrap)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
