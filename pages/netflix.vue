<template>
  <div v-if="loading">
    <Loading />
  </div>
  <div v-else>
    <Navbar />
    <div>
      <h1>Netflix Original Movies</h1>
      <NetflixList :trends="trendNetflixMovies" :mediaType="`movie`" />
      <h1>Netflix Original Series</h1>
      <NetflixList :trends="trendNetflixSeries" :mediaType="`tv`" />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { NETFLIX_MOVIE_URL, NETFLIX_SERIES_URL, NETFLIX_ID } from '@/api/index'

import NetflixList from '~/components/NetflixList.vue'

export default Vue.extend({
  components: {
    NetflixList,
  },
  data() {
    return {
      trendNetflixMovies: [],
      trendNetflixSeries: [],
      loading: true,
    }
  },
  async fetch() {
    this.trendNetflixMovies = await fetch(
      `${this.$config.baseURL}${NETFLIX_MOVIE_URL}${this.$config.apiSecret}${NETFLIX_ID}`
    )
      .then((response) => response.json())
      .then((result) => result.results)
    this.trendNetflixSeries = await fetch(
      `${this.$config.baseURL}${NETFLIX_SERIES_URL}${this.$config.apiSecret}${NETFLIX_ID}`
    )
      .then((response) => response.json())
      .then((result) => result.results)
    this.loading = false
  },
})
</script>
