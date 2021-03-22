<template>
  <div>
    <!-- <h1>Trend All</h1>
    <TrendList :trends="trendAll" />
    <h1>Trend Movies</h1>
    <TrendList :trends="trendMovies" />
    <h1>Trend Series</h1>
    <TrendList :trends="trendSeries" /> -->
  </div>
</template>

<script>
import Vue from 'vue'
// import {
//   TRENDS_ALL_URL,
//   TRENDS_MOVIES_URL,
//   TRENDS_SERIES_URL,
// } from '@/api/index'

// import TrendList from '~/components/TrendList.vue'

export default Vue.extend({
  // components: {
  //   TrendList,
  // },
  // data() {
  //   return {
  //     trendAll: [],
  //     trendMovies: [],
  //     trendSeries: [],
  //   }
  // },
  // async fetch() {
  //   this.trendAll = await fetch(TRENDS_ALL_URL)
  //     .then((response) => response.json())
  //     .then((result) => result.results)
  //   this.trendMovies = await fetch(TRENDS_MOVIES_URL)
  //     .then((response) => response.json())
  //     .then((result) => result.results)
  //   this.trendSeries = await fetch(TRENDS_SERIES_URL)
  //     .then((response) => response.json())
  //     .then((result) => result.results)
  // },
})
</script>
