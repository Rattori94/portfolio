<template>
  <DefaultLayout>
    <section class="fade">
      <h2>Skills</h2>

      <div class="skills">
        <div v-for="s in skills" :key="s.name" class="skill">
          <span>{{ s.name }}</span>

          <div class="bar">
            <div class="fill" :style="{ width: s.level + '%' }"></div>
          </div>
        </div>
      </div>
    </section>
  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from '../layouts/DefaultLayout.vue'

const skills = [
  { name: 'Vue.js', level: 80 },
  { name: 'JavaScript', level: 85 },
  { name: 'HTML/CSS', level: 90 },
  { name: 'Git', level: 70 }
]
</script>

<style scoped>
.skills {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.bar {
  height: 10px;
  background: var(--card);
  border-radius: 5px;
  overflow: hidden;
}

.fill {
  height: 100%;
  background: var(--primary);
  transition: width 0.6s ease;
}
</style>