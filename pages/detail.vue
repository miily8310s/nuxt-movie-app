<template>
  <div v-if="loading">
    <Loading />
  </div>
  <div v-else>
    <Navbar />
    <MovieDetail :movie="movie" />
    <div class="recommend">
      <RecommendList
        v-if="isMovie"
        :recommends="recommendMovie"
        mediaType="movie"
      />
      <RecommendList v-else :recommends="recommendSeries" mediaType="tv" />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { MOVIE_URL, SERIES_URL, API_URL } from '@/api/index'

import MovieDetail from '~/components/MovieDetail.vue'
import Navbar from '~/components/Navbar.vue'
import Loading from '~/components/Loading.vue'
import RecommendList from '~/components/RecommendList.vue'

export default Vue.extend({
  components: {
    MovieDetail,
    Navbar,
    Loading,
    RecommendList,
  },
  data() {
    return {
      movie: [],
      recommendMovie: [],
      recommendSeries: [],
      id: this.$route.query.id,
      media: this.$route.query.media,
      loading: true,
    }
  },
  async fetch() {
    this.movie = await fetch(this.movie_url).then((response) => response.json())
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
    this.loading = false
  },
  computed: {
    movie_url() {
      const apiKey = API_URL + this.$config.apiSecret
      const detailUrl = this.media === 'movie' ? MOVIE_URL : SERIES_URL
      return `${this.$config.baseURL}${detailUrl}${this.id}${apiKey}`
    },
    isMovie() {
      return this.$route.query.media === 'movie'
    },
  },
})
</script>

<style scoped>
.recommend {
  display: flex;
  flex-direction: column;
}
</style>
