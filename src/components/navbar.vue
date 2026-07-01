<template>
  <header class="navbar">
    <h1>Portfólio</h1>

    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">Sobre</router-link>
      <router-link to="/projects">Projetos</router-link>

      <button @click="toggleTheme">
        {{ theme === 'dark' ? '☀️' : '🌙' }}
      </button>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const theme = ref('light')

const toggleTheme = () => {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
  document.documentElement.setAttribute('data-theme', theme.value)
  localStorage.setItem('theme', theme.value)
}

onMounted(() => {
  const saved = localStorage.getItem('theme')
  if (saved) {
    theme.value = saved
    document.documentElement.setAttribute('data-theme', saved)
  }
})
</script>