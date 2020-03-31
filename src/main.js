import REM from './assets/rem.js'
import './assets/reset.css'
import Vue from 'vue'
import App from './App'
import router from './router'

//引入axios
import Axios from 'axios'
Vue.prototype.$http = Axios//配置axios挂在vue原型上
Axios.defaults.baseURL = 'http://localhost:5632/'
Vue.config.productionTip = false

import { Sticky, Tabbar, TabbarItem, Button, Row, Col, Swipe, SwipeItem, Search, Tab, Tabs, Grid, GridItem } from 'vant';
Vue.use(Button).use(Sticky).use(Swipe).use(Tabbar).use(TabbarItem).use(SwipeItem).use(Row).use(Col).use(Search).use(Tab).use(Tabs).use(Grid).use(GridItem);
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
