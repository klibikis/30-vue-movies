<template>
  <div class="searchBar-wrapper">
    <SearchBar/>
  </div>
    <MovieList/>
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

<style>
.searchBar-wrapper{
  display: flex;
  justify-content: flex-end;
  padding: 20px 0;
}
</style>

