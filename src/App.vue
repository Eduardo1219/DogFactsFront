<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  /* line-height: 1.5; */
  max-height: 100vh;
  max-width: 100vh;
}

</style>
