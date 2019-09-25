import Vue from 'vue'
import VueRouter from 'vue-router'
import { store } from '@/store/store'

// views
import Home from '@/views/Home'
import Login from '@/views/Login'
import Public from '@/views/Public'
import Secure from '@/views/Secure'
import Page404 from '@/views/Page404'

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'open active',
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
      meta: {
        authRequired: true
      }
    },
    {
      path: '*',
      component: Page404
    }
  ]
});

/**
 * auth navigation guard
 */
router.beforeEach(function (to, from, next) {
  const authRequired = to.matched.some(function(routeInfo) {
    return routeInfo.meta.authRequired;
  });
  if (authRequired && store.state.authenticated === false) {
    next({ path: '/login'});
  } else {
    next();
  }
});