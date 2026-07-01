<template>
  <div>
    <Navbar />

    <main class="container">
      <slot />
    </main>
  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'
</script>

<style scoped>
.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 24px;
}
</style>