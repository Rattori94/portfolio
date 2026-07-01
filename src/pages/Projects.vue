<template>
  <DefaultLayout>
    <section class="fade">
      <h2>Projetos</h2>

      <div class="grid">
        <div class="card" v-for="p in projects" :key="p.id">
          <h3>{{ p.title }}</h3>
          <p>{{ p.description }}</p>
        </div>
      </div>
    </section>
  </DefaultLayout>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import DefaultLayout from '../layouts/DefaultLayout.vue'

const repos = ref([])

onMounted(async () => {
  const res = await fetch('https://api.github.com/users/Rattori94/repos')
  const data = await res.json()

  repos.value = data.slice(0, 6)
})
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  margin-top: 20px;
}

.card {
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
}
</style>