import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

const About = () => {
  return import(/* webpackChunkName: "about" */ "./views/About.vue")
}

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
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
    path: '/users',
    name: 'users',
    component: () => import(/* webpackChunkName: "users" */ './views/Users.vue'),
    children:[
      {
        path: ":id",
        name: "users-detail",
        component: () => import(/* webpackChunkName: "users-detail" */ './views/UsersDetail.vue')
      },
      {
      path: ":id/edit",
      name: "users-edit",
      component: () => import(/* webpackChunkName: "users-edit" */ './views/UsersEdit.vue')
      },
    ]
  },
  {
    path: '/redirect-me' ,
    redirect: '/users'
  },{
    path: '/*',
    redirect: '/users'
  }
  ]
})
