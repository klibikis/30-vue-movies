<template>
  <div class="movieListSectionWrapper">
    <div class="movieListWrapper">
      <router-link :to='`movies/${movie.imdbID}`' class="movieCard" v-for="movie in moviesFromDb" :key="movie.imdbID">
        <div class="imageWrapper" :style="{ backgroundImage: `url(${movie.Poster})` }">
        </div>
        <h3 class="movieTitle">{{ movie.Title }}</h3>
      </router-link>
    </div>
    <div class="paginationWrapper">
      <button 
        @click="openFirstPage()" 
        class="btn-pagination"
        :disabled="isFirstPage"
      >
        ↞
      </button>
      <button 
        @click="openPreviousPage()" 
        class="btn-pagination"
        :disabled="isFirstPage"
      >
        ←
      </button>
      <div class="pagination-currentPage">
        {{ currentMoviesPage }}
      </div>
      <button 
        @click="openNextPage()" 
        class="btn-pagination"
        :disabled="isLastPage"
      >
        →
      </button>
      <button 
        @click="openLastPage()" 
        class="btn-pagination"
        :disabled="isLastPage"
      >
        ↠
      </button>
    </div>
  </div>
  
    
</template>

<script lang="ts">
import { mapState, mapActions } from 'pinia'
import { useMoviesStore } from '@/stores/movies'

export default {
  computed: {
    ...mapState(useMoviesStore, {
      moviesFromDb: 'moviesFromDb',
      searchMovie: 'searchMovie',
      currentMoviesPage: 'currentMoviesPage',
      isFirstPage: 'isFirstPage',
      isLastPage: 'isLastPage'
    })
  },
  methods: {
    ...mapActions(useMoviesStore, {
      fetchMoviesFromDatabase: 'fetchMoviesFromDatabase',
      openNextPage: 'openNextPage',
      openPreviousPage: 'openPreviousPage',
      openFirstPage: 'openFirstPage',
      openLastPage: 'openLastPage'
    })
  },
  mounted() {
    this.fetchMoviesFromDatabase()
  }
}
</script>

<style>
.movieListWrapper{
  display: flex;
  flex-wrap: wrap;
  gap: 0.5vw;
  justify-content: center;
}
.movieCard{
  width: 24.5%;
  background-color: rgba(255, 255, 255, 0.175);
  padding: 10px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 5px;
  transition: background-color 0.3s ease;
  border-radius: 5px;
  text-align: center;
  text-decoration: none;
  color: white;
}
.movieCard:hover{
  background-color: rgba(255, 255, 255, 0.417);
}
.movieTitle{
  font-weight: bold;
  font-size: 16px;
  padding: 3px 0;
}
.imageWrapper{
  width: 100%;
  aspect-ratio: 2/3;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.movieListSectionWrapper{
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.paginationWrapper{
  width: 50%;
  height: 50px;
  margin: 0 auto;
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;
}
.btn-pagination{
  height: 100%;
  aspect-ratio: 1/1;
  border: none;
  background-color: rgba(255, 255, 255, 0.617);
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 25px;
  font-weight: lighter;
}
.btn-pagination:hover{
  background-color: rgba(255, 255, 255, 0.808);
  box-shadow: 0 0 15px white;
}
.pagination-currentPage{
  height: 100%;
  aspect-ratio: 1/1;
  background-color: rgba(255, 255, 255, 0.808);
  box-shadow: 0 0 5px white;
  color: black;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
}


</style>
