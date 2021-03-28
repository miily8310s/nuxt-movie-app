<template>
  <div class="recommendlist">
    <div
      v-for="(recommend, index) in recommends"
      :key="index"
      @click="openDetail(recommend.id, mediaType)"
    >
      <img
        :src="
          'https://themoviedb.org/t/p/w600_and_h900_bestv2/' +
          recommend.poster_path
        "
        :alt="recommend.index"
      />
      <p>
        {{ mediaType === 'movie' ? recommend.title : recommend.name }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { Movie } from '@/types/index'

export default Vue.extend({
  name: 'RecommendList',
  props: {
    recommends: {
      type: Array as PropType<Movie[]>,
      required: true,
    },
    mediaType: {
      type: String,
      required: true,
    },
  },
  methods: {
    openDetail(id: string, media: string): void {
      this.$router.push(`detail?id=${id}&media=${media}`)
      window.open(location.href)
    },
  },
})
</script>

<style scoped>
.recommendlist {
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
