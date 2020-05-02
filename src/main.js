import Vue from 'vue'
import App from './App'
import router from './router'
import CoreuiVue from '@coreui/vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// alibmama icons
import { iconsSet as icons } from './assets/icons/icons.js'
import './assets/icons/iconfont/iconfont'

Vue.config.performance = true
Vue.use(CoreuiVue)
// use elementui
Vue.use(ElementUI);

new Vue({
  el: '#app', 
  router,
  icons,
  template: '<App/>',
  components: {
    App
  },
})
