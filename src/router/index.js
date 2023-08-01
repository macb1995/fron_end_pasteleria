import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PastelNew from '../views/PastelNew.vue'
import PastelEdit from '../views/PastelEdit.vue'
import PastelView from '../views/PastelView.vue'
import IngredienteList from '../views/ingredientes/IngredienteList.vue'
import IngredienteNew from '../views/ingredientes/IngredienteNew.vue'
import IngredienteEdit from '../views/ingredientes/IngredienteEdit.vue'
import IngredienteView from '../views/ingredientes/IngredienteView.vue'
import MaestroList from '../views/maestro/MaestroList.vue'
import MaestroNew from '../views/maestro/MaestroNew.vue'
import MaestroEdit from '../views/maestro/MaestroEdit.vue'
import MaestroView from '../views/maestro/MaestroView.vue'

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
  },
  {
    path: '/listM',
    name: 'listM',
    component: MaestroList
  },
  {
    path: '/createM',
    name: 'createM',
    component: MaestroNew
  },
  {
    path: '/editM/:id',
    name: 'editM',
    component: MaestroEdit
  },
  {
    path: '/viewM/:id',
    name: 'viewM',
    component: MaestroView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
