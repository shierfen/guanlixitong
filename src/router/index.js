import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import LoginPage from '../components/LoginPage.vue'
// import LoginPage from '@/components/LoginPage.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  }, {
    name: 'LoginPage',
    path: '/login',
    component: LoginPage
  }]
})
