<template>
  <div class="loading">
    Now Loading...
    <div class="loading_bar"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Loading',
})
</script>

<style scoped>
.loading {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 10vh;
  font-size: 24px;
}
.loading_bar {
  width: 200px;
  height: 2px;
  background-color: #cfcfcf;
  overflow: hidden;
  z-index: 1;
  /* transform: rotateY(0); */
  transition: transform 0.3s ease-in;
  position: relative;
}
.loading_bar::before {
  content: '';
  width: 65px;
  height: 100%;
  background-color: #0073b1;
  transform: translate(-34px, 0);
  animation: bluebar 1.5s infinite ease;
  position: absolute;
  left: -34px;
}
@keyframes bluebar {
  50% {
    left: 96px;
    background-color: #0073b6;
  }
  100% {
    left: 180px;
    background-color: #0073b6;
  }
}
</style>
