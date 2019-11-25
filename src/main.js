// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import jQuery from 'jquery'
import bootstrap from 'bootstrap'
import fullCalendar from 'vue-fullcalendar'
import 'bootstrap/dist/css/bootstrap.css'
import storeVuex from '../store/index'

Vue.use(Vuex, bootstrap)

const store = new Vuex.Store(storeVuex)

Vue.component('full-calendar', fullCalendar)

global.jQuery = jQuery
global .$ = jQuery

// import './custom.scss'

require('./assets/vendor/bootstrap/css/bootstrap.min.css')
require('./assets/vendor/font-awesome/css/font-awesome.min.css')
require('./assets/vendor/animate-css/vivify.min.css')
require('./html/assets/css/site.min.css')
// require('./html/assets/bundles/libscripts.bundle.js')
// require('./html/assets/bundles/vendorscripts.bundle.js')
// require('./html/assets/bundles/mainscripts.bundle.js')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
