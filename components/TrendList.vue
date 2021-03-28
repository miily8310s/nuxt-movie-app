<template>
  <div class="trendlist">
    <div
      v-for="(trend, index) in trends"
      :key="index"
      @click="openDetail(trend.id, trend.media_type)"
    >
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
import Vue, { PropType } from 'vue'
import { Movie } from '@/types/index'

export default Vue.extend({
  name: 'TrendList',
  props: {
    trends: {
      type: Array as PropType<Movie[]>,
      required: true,
    },
  },
  methods: {
    openDetail(id: string, media: string): void {
      this.$router.push(`detail?id=${id}&media=${media}`)
    },
  },
})
</script>

<style scoped>
.trendlist {
  display: flex;
  max-width: 1980px;
  overflow-x: scroll;
  cursor: pointer;
}
img {
  width: 250px;
}
p {
  text-align: center;
}
</style>
