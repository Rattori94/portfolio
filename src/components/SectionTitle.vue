<template>
  <div class="section-title fade-up">
    <span v-if="subtitle" class="subtitle">{{ subtitle }}</span>

    <h2>{{ title }}</h2>

    <p v-if="description">
      {{ description }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  subtitle: String,
  description: String
})
</script>

<style scoped>
.section-title {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 70px auto;
}

.subtitle {
  color: var(--secondary);
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
}

h2 {
  font-size: 46px;
  margin: 18px 0;
}

p {
  color: var(--text-muted);
  line-height: 1.8;
  font-size: 16px;
}

@media (max-width: 900px) {
  h2 {
    font-size: 34px;
  }
}
</style>