<template>
  <div class="movieListSectionWrapper">
    <div class="searchBar-wrapper">
    <SearchBar/>
    </div>
    <MovieList/>
  </div>
</template>

<script lang="ts">

import { mapState, mapActions } from 'pinia';
import { useMoviesStore } from '@/stores/movies';

export default {
  computed: {
    ...mapState(useMoviesStore, {
      moviesFromDb: "moviesFromDb"
    })
  },
  methods: {
    ...mapActions(useMoviesStore, {
      fetchMoviesFromDatabase: "fetchMoviesFromDatabase"
    }),
    
  },
}
</script>

<style scoped>
.searchBar-wrapper{
  display: flex;
  justify-content: flex-end;
  padding: 20px 0;
}
.movieListSectionWrapper{
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 100px 30px;
}
</style>

