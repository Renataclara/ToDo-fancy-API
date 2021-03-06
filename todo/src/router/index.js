import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import signup from '@/components/signup'
import signin from '@/components/signin'
import mainlist from '@/components/mainlist'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/signup',
      name: 'signup',
      component: signup
    },
    {
      path: '/signin',
      name: 'signin',
      component: signin
    },
    {
      path: '/',
      component: home,
      children: [
        {
          path: '',
          component: mainlist
        }
      ]
    }
  ]
})
