<template>
  <div class="trendlist">
    <div v-for="(trend, index) in trends" :key="index">
      <img
        :src="
          'https://themoviedb.org/t/p/w600_and_h900_bestv2/' + trend.poster_path
        "
        :alt="trend.index"
      />
      <p>{{ trend.media_type === 'movie' ? trend.title : trend.name }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'TrendList',
  props: {
    trends: {
      type: Array,
      required: true,
    },
  },
})
</script>

<style scoped>
.trendlist {
  display: flex;
  max-width: 1980px;
  white-space: nowrap;
  overflow-x: scroll;
}
img {
  width: 250px;
}
p {
  text-align: center;
}
</style>
