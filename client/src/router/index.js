import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Public from '@/pages/Public'
import Secure from '@/pages/Secure'

import NotFound from '@/pages/NotFound'

Vue.use(Router)

// auth navigation guard
const requireAuth = (to, from, next) => {
  const isAuth = localStorage.getItem('token')
  const loginPath = `/login?rPath=${encodeURIComponent(to.path)}`
  isAuth ? next() : next(loginPath)
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/public',
      name: 'Public',
      component: Public
    },
    {
      path: '/secure',
      name: 'Secure',
      component: Secure,
      beforeEnter: requireAuth
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
