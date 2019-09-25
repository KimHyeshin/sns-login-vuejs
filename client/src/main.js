import Vue from 'vue'
import { router } from './router'
import { store } from './store/store';
import App from './App.vue'

new Vue({
  el: '#app',
  router,
  store,
  render : h => h(App) // root component 추가
});
