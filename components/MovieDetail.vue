<template>
  <div>
    <div class="movieDetail">
      <div class="movieDetail_image">
        <img
          :src="
            'https://themoviedb.org/t/p/w600_and_h900_bestv2/' +
            movie.poster_path
          "
        />
        <div class="movieDetail_image_number">
          <span>people</span>
          <span>vote</span>
        </div>
        <div class="movieDetail_image_number">
          <span>{{ movie.vote_count }}</span>
          <span>{{ movie.vote_average }}</span>
        </div>
      </div>
      <div class="movieDetail_data">
        <p>{{ movie.title || movie.name }}</p>
        <div class="movieDetail_data_genres">
          <p v-for="(genre, index) in movie.genres" :key="index">
            {{ genre.name }}
          </p>
          <p>
            {{ movie.runtime ? movie.runtime : movie.episode_run_time[0] }} min.
          </p>
        </div>
        <p class="movieDetail_data_overview">{{ movie.overview }}</p>
        <div>
          <button @click="openHomePage(movie.homepage)">HomePage</button>
          <button @click="openTMDb()">TMDB</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { MOVIE_URL, SERIES_URL, API_URL } from '@/api/index'

export default Vue.extend({
  name: 'MovieDetail',
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
  data() {
    return { recommendMovie: [], recommendSeries: [] }
  },
  async fetch() {
    this.recommendMovie = await fetch(
      `${this.$config.baseURL}${MOVIE_URL}${this.$route.query.id}/recommendations${API_URL}${this.$config.apiSecret}`
    )
      .then((response) => response.json())
      .then((result) => result.results)
    this.recommendSeries = await fetch(
      `${this.$config.baseURL}${SERIES_URL}${this.$route.query.id}/recommendations${API_URL}${this.$config.apiSecret}`
    )
      .then((response) => response.json())
      .then((result) => result.results)
  },
  methods: {
    openHomePage(link: string): void {
      open(link, '_blank')
    },
    openTMDb(): void {
      const id = this.movie.id
      if (this.$route.query.media === 'movie') {
        open(`https://www.themoviedb.org/movie/${id}`, '_blank')
      }
      open(`https://www.themoviedb.org/tv/${id}`, '_blank')
    },
  },
})
</script>

<style scoped>
img {
  width: 400px;
}
p {
  font-size: 1.8rem;
}
button {
  padding: 0.5rem;
  font-size: 1.5rem;
  cursor: pointer;
}
.movieDetail {
  display: flex;
  max-width: 1980px;
}
.movieDetail_image {
  display: flex;
  flex-direction: column;
}
.movieDetail_image_number {
  display: flex;
  justify-content: space-around;
  font-size: 1.5rem;
  margin: 0;
}
.movieDetail_data {
  display: flex;
  flex-direction: column;
}
.movieDetail_data_genres {
  display: flex;
  flex-direction: row;
}
.movieDetail_data_genres p {
  font-size: 1.5rem;
  background-color: darkslateblue;
  color: #fff;
  padding: 0.5rem;
  border-radius: 3%;
}
.movieDetail_data_overview {
  font-size: 1.5rem;
}
.movieDetail_recommend {
  display: flex;
  flex-direction: column;
}
</style>
