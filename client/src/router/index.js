import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Public from '@/pages/Public'
import Secure from '@/pages/Secure'

import NotFound from '@/pages/NotFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Public',
      name: 'Public',
      component: Public
    },
    {
      path: '/Secure',
      name: 'Secure',
      component: Secure
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})
