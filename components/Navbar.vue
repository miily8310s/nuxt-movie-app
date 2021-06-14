<template>
  <header>
    <h1 @click="goToIndex">MovieApp</h1>
    <div class="header-navs">
      <span class="btn" @click="goToIndex">Trends</span>
      <span class="btn" @click="goToNetflix">Netflix Series</span>
    </div>
  </header>
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
  color: #333;
  font-family: 'Poppins', sans-serif;
}

h1,
img {
  margin-top: 0.3rem;
}

h1 {
  margin: 0.3rem 0.5rem;
  cursor: pointer;
}

header {
  display: flex;
  margin-left: 0;
  background-color: #98ddca;
}

header span {
  margin-top: 1rem;
}

.header-navs {
  margin-top: 1.1rem;
}
.btn {
  padding: 0.5rem;
}
.btn:hover {
  background-color: #d5ecc2;
  cursor: pointer;
}
</style>
