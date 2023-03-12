import { createRouter, createWebHistory } from 'vue-router'
import MoviesView from '../views/MoviesView.vue'
import MovieDetailsView from '@/views/MovieDetailsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { 
      path: '/', redirect: '/movies' 
    },
    {
      path: '/movies',
      component: MoviesView
    },
    {
      path: '/movies/:id',
      component: MovieDetailsView
    }
  ]
})

export default router
