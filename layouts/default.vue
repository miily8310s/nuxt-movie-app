<template>
  <div>
    <header>
      <img src="~/assets/logo.svg" alt="nuxtjs's logo" />
      <h1>Movie App</h1>
      <div class="header-navs">
        <span v-for="list in lists" :key="list">{{ list }}</span>
      </div>
    </header>
    <Nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  computed: {
    lists: () => {
      return ['Trends', 'Netflix Series', 'Movies', 'TV Series']
    },
  },
})
</script>

<style>
* {
  margin: 0.5rem 0.5rem;
  background-color: purple;
  color: #fff;
}

h1,
img {
  margin-top: 0.3rem;
}

header {
  display: flex;
}

header span {
  margin-top: 1rem;
}

.header-navs {
  margin-top: 1.1rem;
}
</style>
