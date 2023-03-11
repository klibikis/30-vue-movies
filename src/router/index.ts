import { createRouter, createWebHistory } from 'vue-router'
import MoviesView from '../views/MoviesView.vue'
import MovieDetails from '@/components/MovieDetails.vue'

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
      component: MovieDetails
    }
  ]
})

export default router
