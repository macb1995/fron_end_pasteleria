import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PastelNew from '../views/PastelNew.vue'
import PastelEdit from '../views/PastelEdit.vue'
import PastelView from '../views/PastelView.vue'
import IngredienteList from '../views/ingredientes/IngredienteList.vue'
import IngredienteNew from '../views/ingredientes/IngredienteNew.vue'
import IngredienteEdit from '../views/ingredientes/IngredienteEdit.vue'
import IngredienteView from '../views/ingredientes/IngredienteView.vue'

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
  },
  {
    path: '/listI',
    name: 'listI',
    component: IngredienteList
  },
  {
    path: '/createI',
    name: 'createI',
    component: IngredienteNew
  },
  {
    path: '/editI/:id',
    name: 'editI',
    component: IngredienteEdit
  },
  {
    path: '/viewI/:id',
    name: 'viewI',
    component: IngredienteView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
