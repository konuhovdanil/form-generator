import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.filter('pretty', (val, indent = 2) => {
  if (typeof val !== "object") {
    try {
      val = JSON.parse(val)
    } catch (err) {
      console.warn("value is not JSON")
      return val
    }

    return JSON.stringify(val, null, indent)
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
