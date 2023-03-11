import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import MovieList from './components/MovieList.vue'
import MovieDetails from './components/MovieDetails.vue'
import SearchBar from './components/SearchBar.vue'

import router from './router'

import './assets/main.css'


const app = createApp(App)
app
    .component('MovieList', MovieList)
    .component('MovieDetails', MovieDetails)
    .component('SearchBar', SearchBar)

app.use(router)
app.use(createPinia())


app.mount('#app')
