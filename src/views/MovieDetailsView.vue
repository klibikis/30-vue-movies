<template>
  <div class="backgroundWrapper"></div>
  <div class="pageWrapper">
    <MovieDetails/>
  </div>
</template>

<script lang="ts">
import MovieDetails from '@/components/MovieDetails.vue';

export default {
}
</script>

<style scoped>
.pageWrapper{
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.backgroundWrapper{
  background-image: url('https://static-prod.adweek.com/wp-content/uploads/2022/03/movie-theater-buys-back-2022.jpg');
  background-position: center;
  background-size: cover;
  width: 100vw;
  min-height: 100vh;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
}
</style>

