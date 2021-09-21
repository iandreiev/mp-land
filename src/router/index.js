import Vue from 'vue'
import VueRouter from 'vue-router'
import store from "../store/index"

let isAuth = store.state.auth


Vue.use(VueRouter)

const routes = [
  {
    path:'*',
    name:'UnknownPage',
    component: ()=>import('../views/ErrorPage.vue')
  },
  {
    path:'/',
    name:'Home',
    component: ()=>import('../views/NewHome.vue')
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } 
      return { x: 0, y: 0 }
  }
})

export default router
