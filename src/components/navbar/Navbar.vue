<template>
  <header class="navbar" :class="{ scrolled }">

    <div class="container">

      <!-- LOGO -->
      <a href="#" class="logo" @click.prevent="scrollTo('home')">
        <span class="mark">&lt;/&gt;</span>
        Rafael A. Vettori
      </a>

      <!-- DESKTOP NAV -->
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

    <!-- MOBILE MENU (Apple-style overlay + animation) -->
    <Transition name="overlay">
      <div
        v-if="menuOpen"
        class="mobile-overlay"
        @click.self="menuOpen = false"
      >
        <Transition name="sheet">
          <div v-if="menuOpen" class="mobile-menu">

            <!-- CLOSE -->
            <button class="close-btn" @click="menuOpen = false">
              <i class="fa-solid fa-xmark"></i>
            </button>

            <!-- LINKS (stagger via CSS) -->
            <nav class="mobile-links">

              <a
                v-for="(item, i) in sections"
                :key="item.id"
                :style="{ '--i': i }"
                :class="{ active: active === item.id }"
                @click="go(item.id)"
              >
                {{ item.label }}
              </a>

            </nav>

          </div>
        </Transition>
      </div>
    </Transition>

  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'

const menuOpen = ref(false)
const scrolled = ref(false)
const active = ref('home')
const theme = ref('dark')

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'Sobre' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projetos' },
  { id: 'contact', label: 'Contato' }
]

/* =========================
   SCROLL TO SECTION
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

/* MOBILE NAV GO */
const go = (id) => {
  scrollTo(id)
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
   SCROLL TRACKING
========================= */
const handleScroll = () => {
  scrolled.value = window.scrollY > 20

  const scrollPos = window.scrollY + 150

  for (const s of sections) {
    const el = document.getElementById(s.id)
    if (!el) continue

    if (
      el.offsetTop <= scrollPos &&
      el.offsetTop + el.offsetHeight > scrollPos
    ) {
      active.value = s.id
    }
  }
}

/* =========================
   BODY LOCK (important UX)
========================= */
watch(menuOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})

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
  document.body.style.overflow = ''
})
</script>

<style scoped>

/* =========================
   NAVBAR
========================= */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;

  padding: 18px 0;

  background: rgba(8, 11, 20, 0.35);
  backdrop-filter: blur(10px);

  transition: 0.3s ease;
}

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
  text-decoration: none;
}

.mark {
  color: var(--secondary);
}

/* =========================
   DESKTOP NAV
========================= */
.nav {
  display: flex;
  gap: 26px;
}

.nav a {
  cursor: pointer;
  color: var(--text-muted);
  position: relative;
  transition: .3s;
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
}

.theme,
.hamburger {
  background: transparent;
  border: none;
  cursor: pointer;
  color: var(--text);
}

/* =========================
   MOBILE OVERLAY (Apple style blur)
========================= */
.mobile-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,.35);

  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);

  z-index: 2000;
}

/* OVERLAY FADE */
.overlay-enter-active,
.overlay-leave-active {
  transition: opacity .35s ease;
}

.overlay-enter-from,
.overlay-leave-to {
  opacity: 0;
}

/* =========================
   MOBILE SHEET
========================= */
.mobile-menu {
  position: absolute;
  right: 0;
  top: 0;

  width: 320px;
  height: 100%;

  background: var(--surface);
  padding: 28px;

  display: flex;
  flex-direction: column;
}

/* SLIDE ANIMATION */
.sheet-enter-active,
.sheet-leave-active {
  transition: transform .35s cubic-bezier(.2,.9,.2,1), opacity .35s;
}

.sheet-enter-from,
.sheet-leave-to {
  transform: translateX(40px);
  opacity: 0;
}

/* CLOSE BUTTON */
.close-btn {
  align-self: flex-end;
  background: transparent;
  border: none;
  font-size: 22px;
  color: var(--text);
  cursor: pointer;
}

/* =========================
   MOBILE LINKS (STAGGER ANIMATION)
========================= */
.mobile-links {
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  gap: 18px;
}

.mobile-links a {
  color: var(--text-muted);
  font-size: 18px;
  cursor: pointer;

  opacity: 0;
  transform: translateY(10px);

  animation: fadeUp .4s ease forwards;
  animation-delay: calc(var(--i) * 0.06s);
}

.mobile-links a.active {
  color: var(--secondary);
}

@keyframes fadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* =========================
   RESPONSIVE
========================= */
@media (max-width: 900px) {
  .nav {
    display: none;
  }

  .hamburger {
    display: block;
  }
}

</style>