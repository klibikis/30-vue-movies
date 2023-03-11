import { defineStore } from 'pinia'
import axios from 'axios'

type Movie = {
  Title: string,
  Year: number, 
  Type: string,
  imdbID: string,
  Poster: string
}
type MovieDetailed = {
  Actors: string,
  Awards: string,
  Country: string,
  Released: string,
  Genre: string,
  Plot: string,
  Title: string,
  Runtime: string,
  imdbRating: string,
  Writer: string,
  Poster: string
}

export const useMoviesStore = defineStore('main', {
  state: () => ({
    moviesFromDb: [] as Movie[],
    searchMovie: '',
    singleMovieFromDb: {} as MovieDetailed,
    currentMoviesPage: 1,
    lastMoviesPage: 0,
    isFirstPage: true,
    isLastPage: false
  }),
  actions: {
    setMovieSearchKeyword(movie: string) {
      this.searchMovie=movie
    },
    fetchMoviesFromDatabase() {
      if(!this.searchMovie){
        this.searchMovie='get'
      }
      const formattedSearchMovie = this.searchMovie.replace(/\s/g, '+')
      axios.get(`http://www.omdbapi.com/?s=${formattedSearchMovie}&page=${this.currentMoviesPage}&apikey=4ad8f06c`).then(({data}) => {
        this.moviesFromDb = data.Search
        this.setLastMoviePage(data.totalResults)
      })
    },
    fetchMovieFromDBbyID(id: string | string[]) {
      axios.get(`http://www.omdbapi.com/?i=${id}&plot=full&apikey=4ad8f06c`).then((res) => {
        this.singleMovieFromDb = res.data
      })
    },
    setLastMoviePage(results: number) {
      this.lastMoviesPage = Math.floor(results/10)+1
    },
    openNextPage() {
      this.currentMoviesPage += 1
      this.fetchMoviesFromDatabase()
      this.checkIfValidPage()
      this.smoothScrollTop()
    },
    openPreviousPage() {
      this.currentMoviesPage -= 1
      this.fetchMoviesFromDatabase()
      this.checkIfValidPage()
      this.smoothScrollTop()
    },
    openFirstPage() {
      this.currentMoviesPage = 1
      this.fetchMoviesFromDatabase()
      this.checkIfValidPage()
      this.smoothScrollTop()
    },
    openLastPage() {
      this.currentMoviesPage = this.lastMoviesPage
      this.fetchMoviesFromDatabase()
      this.checkIfValidPage()
      this.smoothScrollTop()
    },
    checkIfValidPage(){
      if(this.currentMoviesPage===1){
        this.isFirstPage=true
        this.isLastPage=false
      }else if(this.currentMoviesPage===this.lastMoviesPage){
        this.isLastPage=true
        this.isFirstPage=false
      }else{
        this.isFirstPage=false
        this.isLastPage=false
      }
    },
    smoothScrollTop() {
      window.scrollTo({top: 0, behavior: 'smooth'});
    }
  }
})
