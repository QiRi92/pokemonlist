import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Detail from '@/pages/Detail.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/detail/:id', component: Detail }
]

export default createRouter({
  history: createWebHashHistory(),
  routes
})
