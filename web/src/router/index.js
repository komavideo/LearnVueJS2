import Vue from 'vue'
import Router from 'vue-router'

import User from '@/components/User'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
        },
        {
            path: '/user/:uid/:nationality',
            name: 'User',
            component: User,
            props: true
        }
    ]
})
