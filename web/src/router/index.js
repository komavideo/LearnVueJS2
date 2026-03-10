import Vue from 'vue'
import Router from 'vue-router'

import User from '@/components/User'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld'
    },
    {
      path: '/user/:uid(\\d+)/:nationality([a-zA-Z]{2,20})',
      name: 'User',
      component: User,
      props: route => ({
        uid: Number(route.params.uid),
        nationality: (route.params.nationality || '').toLowerCase()
      })
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
