<template>
  <div>
    <h1>Trend All</h1>
    <TrendList :trends="trendAll" />
  </div>
</template>

<script>
import Vue from 'vue'
import { TRENDS_ALL_URL } from '@/api/index'

import TrendList from '~/components/TrendList.vue'

export default Vue.extend({
  components: {
    TrendList,
  },
  data() {
    return {
      trendAll: [],
    }
  },
  async fetch() {
    this.trendAll = await fetch(TRENDS_ALL_URL)
      .then((response) => response.json())
      .then((result) => result.results)
  },
})
</script>
