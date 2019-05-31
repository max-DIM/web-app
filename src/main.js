// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Navbar from './components/Navbar'
import Loader from './components/Loader'

Vue.config.productionTip = false

Vue.component('navbar', Navbar)
Vue.component('loader', Loader)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
