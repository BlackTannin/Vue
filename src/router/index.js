import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Index from "../views/admin/Index";
import List from "../views/List";
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
    {
    path: '/list/:id',
    name: 'List',
    component: List
  },
     {
    path: '/listShow/:id',
    name: 'ListShow',
    component: () => import('../views/ListShow')
  },
    {
      path: '/register',
      name: 'Register',
      component:  () => import('../views/user/Register')
    },
      {
      path: '/login',
      name: 'Login',
      component:  () => import('../views/user/Login')
    },
    {
      path: '/logout',
      name: 'Logout',
      component:  () => import('../views/user/Logout')
    },

      {
      path: '/userinfo',
      name: 'UserInfo',
      component:  () => import('../views/user/UserInfo')
    },
    {
      path: '/myorder',
      name: 'MyOrder',
      component:  () => import('../views/user/MyOrder')
    },

  {
    path: '/admin',
    name: 'Index',
    component: Index
  },

  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
