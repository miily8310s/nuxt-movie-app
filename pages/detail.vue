<template>
  <div v-if="loading">
    <Loading />
  </div>
  <div v-else>
    <Navbar />
    <MovieDetail :movie="movie" />
  </div>
</template>

<script>
import Vue from 'vue'
import { MOVIE_URL, SERIES_URL, API_URL } from '@/api/index'

import MovieDetail from '~/components/MovieDetail.vue'
import Navbar from '~/components/Navbar.vue'
import Loading from '~/components/Loading.vue'

export default Vue.extend({
  components: {
    MovieDetail,
    Navbar,
    Loading,
  },
  data() {
    return {
      movie: [],
      id: this.$route.query.id,
      media: this.$route.query.media,
      loading: true,
    }
  },
  async fetch() {
    this.movie = await fetch(this.movie_url).then((response) => response.json())
    this.loading = false
  },
  computed: {
    movie_url() {
      const apiKey = API_URL + this.$config.apiSecret
      const detailUrl = this.media === 'movie' ? MOVIE_URL : SERIES_URL
      return `${this.$config.baseURL}${detailUrl}${this.id}${apiKey}`
    },
  },
})
</script>
