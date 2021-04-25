import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SearchResults from '../views/SearchResults.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/searchResults',
    name: 'searchResults',
    component: SearchResults
  },
  {
    path: '/*',
    name: 'Home',
    component: Home
  },
]

const router = new VueRouter({
  routes
})

export default router
