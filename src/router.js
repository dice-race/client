import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Game from './components/BoardGame.vue'
import VueAnime from 'vue-animejs'

Vue.use(VueAnime)
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/login.vue')
    },
    {
      path: '/game',
      name: 'game',
      component: Game
    }
  ]
})
