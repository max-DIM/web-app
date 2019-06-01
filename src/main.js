// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import { Icon } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import Vue from 'vue'
import App from './App'
import router from './router'
import Navbar from './components/Utils/Navbar'
import Loader from './components/Utils/Loader'

Vue.config.productionTip = false

Vue.component('navbar', Navbar)
Vue.component('loader', Loader)

delete Icon.Default.prototype._getIconUrl

Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
