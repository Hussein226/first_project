import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import CovidTracker from '../components/CovidTracker.vue'
import ChatRoom from '../components/ChatRoom.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/covid-tracker',
    name: 'CovidTracker',
    component: CovidTracker
  },
  {
    path: '/chatroom',
    name: 'ChatRoom',
    component: ChatRoom
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
