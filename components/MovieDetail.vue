<template>
  <div class="movieDetail">
    <div class="movieDetail_image">
      <img
        :src="
          'https://themoviedb.org/t/p/w600_and_h900_bestv2/' + movie.poster_path
        "
      />
      <div class="movieDetail_image_number">
        <span>people</span>
        <span>vote</span>
      </div>
      <div class="movieDetail_image_number">
        <span>{{ movie.vote_count }}</span>
        <span>{{ movie.vote_average }}</span>
      </div>
    </div>
    <div class="movieDetail_data">
      <p>{{ movie.title || movie.name }}</p>
      <div class="movieDetail_data_genres">
        <p v-for="(genre, index) in movie.genres" :key="index">
          {{ genre.name }}
        </p>
        <p>{{ movie.runtime }} min.</p>
      </div>
      <p class="movieDetail_data_overview">{{ movie.overview }}</p>
      <!-- <div>
        <a :href="{{" movie.homepage "}}">dddd</a>
      </div> -->
    </div>
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
img {
  width: 400px;
}
p {
  font-size: 1.8rem;
}
.movieDetail {
  display: flex;
  max-width: 1980px;
}
.movieDetail_image {
  display: flex;
  flex-direction: column;
}
.movieDetail_image_number {
  display: flex;
  justify-content: space-around;
  font-size: 1.5rem;
}
.movieDetail_data {
  display: flex;
  flex-direction: column;
}
.movieDetail_data_genres {
  display: flex;
  flex-direction: row;
}
.movieDetail_data_genres p {
  font-size: 1.5rem;
  background-color: darkslateblue;
  padding: 0.5rem;
  border-radius: 3%;
}
.movieDetail_data_overview {
  font-size: 1.5rem;
}
</style>
