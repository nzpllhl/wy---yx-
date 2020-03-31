import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/home/home.vue'
import List from '../components/list/list.vue'
import Detail from '../components/detail/detail.vue'
import CateList from '../components/cateList/cateList.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/list',
      component: List

    },
    {
      path: '/detail',
      component: Detail

    },
    {
      path: '/cateList',
      component: CateList

    },
    {
      path: '*',
      component: Home

    }
  ]
})
