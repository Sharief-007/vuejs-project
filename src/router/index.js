import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Messages from "../views/Messages";
import Friends from "../views/Friends";
import Profile from "../views/Profile";

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home   //() => import(/* webpackChunkName: "messages" */ '../views/Home.vue')
  },
  {
    path: '/messages',
    name: 'Messages',
    component: Messages //() => import(/* webpackChunkName: "messages" */ '../views/Messages.vue')
  },
  {
    path: '/explore',
    name: 'Explore',
    component: () => import(/* webpackChunkName: "explore" */ '../views/Explore.vue')
  },
  {
    path: '/friends',
    name: 'Friends',
    component: Friends//() => import(/* webpackChunkName: "friends" */ '../views/Friends.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile//() => import(/* webpackChunkName: "friends" */ '../views/Profile.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
