<template>
  <header class="navbar" :class="{ scrolled }">

    <div class="container">

      <!-- LOGO -->
      <a href="#" class="logo" @click.prevent="scrollTo('home')">
        <span class="mark">&lt;/&gt;</span>
        Rafael A. Vettori
      </a>

      <!-- NAV -->
      <nav class="nav">
        <a @click.prevent="scrollTo('home')" :class="{ active: active === 'home' }">Home</a>
        <a @click.prevent="scrollTo('about')" :class="{ active: active === 'about' }">Sobre</a>
        <a @click.prevent="scrollTo('skills')" :class="{ active: active === 'skills' }">Skills</a>
        <a @click.prevent="scrollTo('projects')" :class="{ active: active === 'projects' }">Projetos</a>
        <a @click.prevent="scrollTo('contact')" :class="{ active: active === 'contact' }">Contato</a>
      </nav>

      <!-- ACTIONS -->
      <div class="actions">

        <button class="theme" @click="toggleTheme">
          <i class="fa-solid" :class="theme === 'dark' ? 'fa-sun' : 'fa-moon'"></i>
        </button>

        <button class="hamburger" @click="menuOpen = true">
          <i class="fa-solid fa-bars"></i>
        </button>

      </div>

    </div>

    <!-- MOBILE MENU -->
    <MobileMenu
      :open="menuOpen"
      @close="menuOpen = false"
    />

  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import MobileMenu from '../components/MobileMenu.vue'

const menuOpen = ref(false)
const scrolled = ref(false)
const active = ref('home')
const theme = ref('dark')

/* =========================
   SCROLL SMOOTH
========================= */
const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (!el) return

  const offset = 80

  const top = el.getBoundingClientRect().top + window.scrollY - offset

  window.scrollTo({
    top,
    behavior: 'smooth'
  })

  menuOpen.value = false
}

/* =========================
   THEME
========================= */
const toggleTheme = () => {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
  document.documentElement.setAttribute('data-theme', theme.value)
  localStorage.setItem('theme', theme.value)
}

/* =========================
   SCROLL LISTENER
========================= */
const handleScroll = () => {
  scrolled.value = window.scrollY > 20

  const sections = ['home', 'about', 'skills', 'projects', 'contact']

  const scrollPos = window.scrollY + 150

  for (const id of sections) {
    const el = document.getElementById(id)
    if (!el) continue

    if (
      el.offsetTop <= scrollPos &&
      el.offsetTop + el.offsetHeight > scrollPos
    ) {
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

/* =========================
   NAVBAR BASE (FIX)
========================= */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;

  padding: 18px 0;
  transition: 0.3s ease;

  /* 🔥 CORREÇÃO: sempre visível no topo */
  background: rgba(8, 11, 20, 0.35);
  backdrop-filter: blur(10px);
}

/* =========================
   SCROLLED STATE
========================= */
.scrolled {
  background: rgba(8, 11, 20, 0.85);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(255,255,255,0.05);
}

/* =========================
   CONTAINER
========================= */
.container {
  width: min(1200px, 92%);
  margin: auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* =========================
   LOGO
========================= */
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

/* =========================
   NAV
========================= */
.nav {
  display: flex;
  gap: 26px;
}

.nav a {
  cursor: pointer;
  color: var(--text-muted);
  font-weight: 500;
  transition: 0.3s;
  position: relative;
}

.nav a:hover {
  color: var(--text);
}

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

/* =========================
   ACTIONS
========================= */
.actions {
  display: flex;
  gap: 12px;
  align-items: center;
}

.theme,
.hamburger {
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 18px;
  color: var(--text);
}

/* =========================
   MOBILE
========================= */
.hamburger {
  display: none;
}

@media (max-width: 900px) {
  .nav {
    display: none;
  }

  .hamburger {
    display: block;
  }
}

</style>