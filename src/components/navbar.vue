<template>
  <header class="navbar" :class="{ scrolled }">

    <div class="container">

      <!-- Logo -->
      <a href="#home" class="logo">
        <span class="mark">&lt;/&gt;</span>
        Rafael A. Vettori
      </a>

      <!-- Desktop nav -->
      <nav class="nav">
        <a href="#home" :class="{ active: active === 'home' }">Home</a>
        <a href="#about" :class="{ active: active === 'about' }">Sobre</a>
        <a href="#skills" :class="{ active: active === 'skills' }">Skills</a>
        <a href="#projects" :class="{ active: active === 'projects' }">Projetos</a>
        <a href="#contact" :class="{ active: active === 'contact' }">Contato</a>
      </nav>

      <!-- Actions -->
      <div class="actions">

        <button class="theme" @click="toggleTheme">
          {{ theme === 'dark' ? '☀️' : '🌙' }}
        </button>

        <button class="hamburger" @click="menuOpen = true">
          ☰
        </button>

      </div>

    </div>

    <!-- Mobile Menu -->
    <MobileMenu
      :open="menuOpen"
      @close="menuOpen = false"
    />

  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import MobileMenu from './MobileMenu.vue'

const menuOpen = ref(false)
const scrolled = ref(false)
const active = ref('home')
const theme = ref('dark')

/* THEME */
const toggleTheme = () => {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
  document.documentElement.setAttribute('data-theme', theme.value)
  localStorage.setItem('theme', theme.value)
}

/* SCROLL EFFECT */
const handleScroll = () => {
  scrolled.value = window.scrollY > 20

  const sections = ['home','about','skills','projects','contact']

  for (const id of sections) {
    const el = document.getElementById(id)
    if (!el) continue

    const rect = el.getBoundingClientRect()

    if (rect.top <= 120 && rect.bottom >= 120) {
      active.value = id
    }
  }
}

/* INIT */
onMounted(() => {

  const saved = localStorage.getItem('theme')

  if (saved) {
    theme.value = saved
    document.documentElement.setAttribute('data-theme', saved)
  } else {
    document.documentElement.setAttribute('data-theme', 'dark')
  }

  window.addEventListener('scroll', handleScroll)

})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>

/* NAVBAR BASE */
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;

  padding: 18px 0;

  transition: 0.3s ease;
}

/* GLASS EFFECT */
.scrolled {
  background: rgba(8, 11, 20, 0.7);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(255,255,255,0.05);
}

/* CONTAINER */
.container {
  width: min(1200px, 92%);
  margin: auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* LOGO */
.logo {
  font-weight: 700;
  color: var(--text);
  display: flex;
  gap: 10px;
  align-items: center;
  text-decoration: none;
}

.mark {
  color: var(--secondary);
}

/* NAV */
.nav {
  display: flex;
  gap: 26px;
}

.nav a {
  color: var(--text-muted);
  text-decoration: none;
  font-weight: 500;
  transition: 0.3s;
  position: relative;
}

.nav a:hover {
  color: var(--text);
}

/* ACTIVE LINK */
.active {
  color: var(--secondary) !important;
}

.active::after {
  content: "";
  position: absolute;
  bottom: -6px;
  left: 0;
  width: 100%;
  height: 2px;
  background: var(--secondary);
}

/* ACTIONS */
.actions {
  display: flex;
  gap: 12px;
  align-items: center;
}

/* BUTTONS */
.theme,
.hamburger {
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 18px;
  color: var(--text);
}

/* MOBILE */
.hamburger {
  display: none;
}

/* RESPONSIVE */
@media (max-width: 900px) {

  .nav {
    display: none;
  }

  .hamburger {
    display: block;
  }
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}

</style>