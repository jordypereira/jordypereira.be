import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import VueAnalytics from 'vue-analytics'

Vue.use(VueAnalytics, {
  id: 'UA-75839523-3'
})
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
