<template>
  <div v-if="loading">
    <Loading />
  </div>
  <div v-else>
    <Navbar />
    <h1>Trend All</h1>
    <TrendList :trends="trendAll" />
    <h1>Trend Movies</h1>
    <TrendList :trends="trendMovies" />
    <h1>Trend Series</h1>
    <TrendList :trends="trendSeries" />
  </div>
</template>

<script>
import Vue from 'vue'
import {
  TRENDS_ALL_URL,
  TRENDS_MOVIES_URL,
  TRENDS_SERIES_URL,
} from '@/api/index'

import TrendList from '~/components/TrendList.vue'
import Loading from '~/components/Loading.vue'
import Navbar from '~/components/Navbar.vue'

export default Vue.extend({
  components: {
    TrendList,
    Loading,
    Navbar,
  },
  data() {
    return {
      trendAll: [],
      trendMovies: [],
      trendSeries: [],
      loading: true,
    }
  },
  async created() {
    this.trendAll = await fetch(
      `${this.$config.baseURL}${TRENDS_ALL_URL}${this.$config.apiSecret}`
    )
      .then((response) => response.json())
      .then((result) => result.results)
    this.trendMovies = await fetch(
      `${this.$config.baseURL}${TRENDS_MOVIES_URL}${this.$config.apiSecret}`
    )
      .then((response) => response.json())
      .then((result) => result.results)
    this.trendSeries = await fetch(
      `${this.$config.baseURL}${TRENDS_SERIES_URL}${this.$config.apiSecret}`
    )
      .then((response) => response.json())
      .then((result) => result.results)
    this.loading = false
  },
})
</script>
