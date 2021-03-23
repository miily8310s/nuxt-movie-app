<template>
  <div class="trendlist">
    <img
      :src="
        'https://themoviedb.org/t/p/w600_and_h900_bestv2/' + movie.poster_path
      "
    />
    <p>{{ movie.title }}</p>
    <p>{{ movie.name }}</p>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { Movie } from '@/types/index'

export default Vue.extend({
  name: 'MovieDetail',
  props: {
    movie: {
      type: Object as PropType<Movie>,
      required: true,
    },
  },
  // methods: {
  //   openDetail(id: string, media: string): void {
  //     this.$router.push(`detail?id=${id}&media=${media}`)
  //   },
  // },
})
</script>

<style scoped>
.trendlist {
  display: flex;
  max-width: 1980px;
  white-space: nowrap;
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
