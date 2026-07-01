<template>
  <div class="layout">
    <Navbar />

    <main class="content">
      <slot />
    </main>
  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'
</script>

<style scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.content {
  flex: 1;
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
}
</style>