<template>
  <div class="backgroundWrapper">
    <div class="movieCardWrapper">
      <div 
        class="movieImage"
        :style="{ backgroundImage: `url(${singleMovieFromDb.Poster})` }"
      >
      </div>
      <div class="movieContent">
        <div class="movieHeader">
          <h2>{{ singleMovieFromDb.Title }}</h2>
          <RouterLink to="/movies" class="routerLink">➳ Back to movies</RouterLink>
        </div>
        
        <div class="movieDetails">
          <div class="movieDetailsColumn">
            <p class="bold">PLOT</p>
            <p>{{ singleMovieFromDb.Plot }}</p>
          </div>
          <div class="movieDetailsColumn">
            <p class="bold">GENRE</p>
            <p>{{ singleMovieFromDb.Genre }} <br></p>
            <br>
            <p class="bold">ACTORS</p>
            <p>{{ singleMovieFromDb.Actors }}</p>
            <br>
            <p class="bold">WRITER</p>
            <p>{{ singleMovieFromDb.Writer }}</p>
            <br>
            <p class="bold">COUNTRY</p>
            <p>{{ singleMovieFromDb.Country }} <br></p>
            <br>
            <p class="bold">PRIZES</p>
            <p>{{ singleMovieFromDb.Awards }} <br></p>
            <br>
            <p class="bold">RELEASED</p>
            <p>{{ singleMovieFromDb.Released }} <br></p>
            <br>
            <p class="bold">RUNTIME</p>
            <p>{{ singleMovieFromDb.Runtime }} <br></p>
            <br>
            <p class="bold">IMDB RATING</p>
            <p>{{ singleMovieFromDb.imdbRating }} <br></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { mapState, mapActions } from 'pinia'
import { useMoviesStore } from '@/stores/movies'
import { useRoute } from 'vue-router'

export default {
  data: () => {
    return {
      apple: 'apple'
    }
  },
  computed: {
    ...mapState(useMoviesStore, {
      singleMovieFromDb: 'singleMovieFromDb'
    }),
  },
  methods: {
    ...mapActions(useMoviesStore, {
      fetchMoviesFromDatabase: 'fetchMoviesFromDatabase',
      fetchMovieFromDBbyID: 'fetchMovieFromDBbyID'
    })
  },
  mounted() {
    const route = useRoute();
    this.fetchMovieFromDBbyID(route.params.id)
  }
}
</script>

<style scoped>

.bold{
  font-weight: bold;
}
.backgroundWrapper{
  background-image: url('https://static-prod.adweek.com/wp-content/uploads/2022/03/movie-theater-buys-back-2022.jpg');
  background-position: center;
  background-size: cover;
  width: 100vw;
  min-height: 100vh;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.movieCardWrapper{
  width: 70%;
  min-height: 60%;
  margin: 0 auto;
  background-color: rgba(255, 255, 255, 0.499);
  display: flex;
  gap: 10px;
  padding: 10px;
  color: black;
}
.movieImage{
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  aspect-ratio: 2/3;
}
.movieContent{
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
  padding: 10px;
}
.movieDetails{
  display: flex;
  gap: 20px;
  justify-content: center;
}
.movieDetailsColumn{
  width: 48%;
}
.routerLink{
  text-decoration: none;
  color: black;
  font-weight: bold;
  transition: font-size 0.3s ease;
}
.routerLink:hover{
font-size: 20px;
}
.movieHeader{
  display: flex;
  justify-content: space-between;
}
</style>
