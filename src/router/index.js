import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PastelNew from '../views/PastelNew.vue'
import PastelEdit from '../views/PastelEdit.vue'
import PastelView from '../views/PastelView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/createE',
    name: 'createE',
    component: PastelNew
  },
  {
    path: '/editE/:id',
    name: 'editE',
    component: PastelEdit
  },
  {
    path: '/viewE/:id',
    name: 'viewE',
    component: PastelView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
