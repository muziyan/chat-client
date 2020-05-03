import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Login from "../views/Login";
import Register from "../views/Register"

const routes = [
  {
    path:'/login',
    name:'login',
    component:Login
  },
  {
    path:'/register',
    name:'register',
    component:Register
  },
  {
    path:'/',
    name:'main',
    component:()=> import("../views/Main"),
    children:[
      {path:'/',component:() => import(/* webpackChunkName: "about" */ '../views/News.vue')},
      {path:'/link',component:() => import(/* webpackChunkName: "about" */ '../views/Link.vue')},
      {path:'/trends',component:() => import(/* webpackChunkName: "about" */ '../views/Trends.vue')}
    ]
  },
  {
    path:'/means/:id',
    name:'means',
    component:()=> import("../views/Means"),
    props:true
  },
  {
    path:'/means/userdetails/:id',
    name:'user',
    component:()=> import("../views/UserDetails"),
    props:true
  },
  {
    path:'/char/:id',
    name:'char',
    component:()=> import("../views/Char"),
    props:true
  },
  {
    path:'/search',
    name:'search',
    component:()=> import("../views/Search")
  },
  {
    path:'/apply',
    name:'apply',
    component:()=> import("../views/Apply")
  },
  {
    path:'/found',
    name:'found',
    component:()=> import("../views/Found")
  },
  {
    path:'/groupdetails',
    name:'groupdetails',
    component:()=> import("../views/GroupDetails")
  }
]

const router = new VueRouter({
  routes
})

router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
})

router.beforeEach(((to, from, next) => {
  if (!localStorage.token && !localStorage.user && to.path !== "/login"){
    return next("/login")
  }
  return next()
}))

export default router
