<template>
    <form @submit="(e) => {
      e.preventDefault()
      handleSearchSubmit(searchInput)}"
      class="search-form"
    >
      <button type="submit" class="btn-search">🔍</button>
      <input type="text" v-model="searchInput" placeholder="Search movie..." class="search-input" />
    </form>

</template>

<script lang="ts">
import { mapState, mapActions } from 'pinia'
import { useMoviesStore } from '@/stores/movies'

export default {
  data: () => {
    return {
      searchInput: ''
    }
  },
  computed: {
    ...mapState(useMoviesStore, {
      moviesFromDb: 'moviesFromDb'
    })
  },
  methods: {
    ...mapActions(useMoviesStore, {
      fetchMoviesFromDatabase: 'fetchMoviesFromDatabase',
      setMovieSearchKeyword: 'setMovieSearchKeyword'
    }),
    handleSearchSubmit(searchInput: string) {
      this.setMovieSearchKeyword(searchInput)
      this.fetchMoviesFromDatabase()
    }
  }
}
</script>

<style>
.btn-search{
  height: 30px;
  width: 40px;
  border-radius: 5px;
  border: none;
  background-color: wheat;
  cursor: pointer;
  transition: all 0.2s ease;
}
.btn-search:hover{
  box-shadow: 0 0 10px white;
}
.search-input{
  all: unset;
  height: 100%;
  width: 100%;
  border: none;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.417);
  padding: 0 5px;
  color: white;
}
.search-form{
  display: flex;
  gap: 5px;
  height: 50px;
  width: 20%;
  overflow: hidden;
  padding: 10px 0;
  padding-left: 10px;
}
.search-input::placeholder{
  color: white;
}
</style>

