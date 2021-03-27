<template>
  <div>
    <header>
      <img src="~/assets/logo.svg" alt="nuxtjs's logo" />
      <h1>Movie App</h1>
      <div class="header-navs">
        <span class="btn" @click="goToIndex">Trends</span>
        <span class="btn" @click="goToNetflix">Netflix Series</span>
      </div>
    </header>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Navbar',
  methods: {
    goToIndex() {
      this.$router.push('/')
    },
    goToNetflix() {
      this.$router.push('/netflix')
    },
  },
})
</script>

<style scoped>
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
.btn {
  padding: 0.5rem;
  background-color: black;
  border-radius: 5%;
}
.btn:hover {
  background-color: pink;
  cursor: pointer;
}
</style>
