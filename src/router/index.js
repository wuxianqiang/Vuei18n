import Vue from 'vue'
import VueRouter from 'vue-router'
import { i18n } from '../main'
import RouterView from '../views/RouterView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/:lang',
    name: 'home',
    component: RouterView,
    beforeEnter: (to, from, next) => {
      const lang = to.params.lang;
      if (!['zh', 'en'].includes(lang)) return next('zh')
      if (i18n.locale !== lang) {
        i18n.locale = lang
      }
      return next()
    },
    children: [
      {
        path: 'home',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
      },
      {
        path: 'about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
