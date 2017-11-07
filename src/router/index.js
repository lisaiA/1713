import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home/home.vue'
import search from '@/pages/search/search.vue'
import daytour from '@/pages/daytour/daytour.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },{
      path: '/search',
      name: 'search',
      component: search
    },{
      path: '/daytour',
      name: 'daytour',
      component: daytour
    }
  ]
})
