<template>
  <Navbar />

  <main>
    <router-view />
  </main>

  <Footer />
</template>

<script setup>

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