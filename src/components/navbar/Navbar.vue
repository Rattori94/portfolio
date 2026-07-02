```vue
<template>
  <header class="navbar" :class="{ scrolled }">
    <div class="container">

      <!-- LOGO -->
      <a href="#" class="logo" @click.prevent="scrollTo('home')">
        <img
          src="../../favicon/favicon.png"
          alt="Logo Rafael Vettori"
          class="logo-img"
        />

        <span class="logo-text">
          Rafael A. Vettori
        </span>
      </a>

      <!-- DESKTOP NAV -->
      <nav class="nav">
        <a
          v-for="item in sections"
          :key="item.id"
          @click.prevent="scrollTo(item.id)"
          :class="{ active: active === item.id }"
        >
          {{ item.label }}
        </a>
      </nav>

      <!-- ACTIONS -->
      <div class="actions">

        <button
          class="theme"
          @click="toggleTheme"
          aria-label="Alternar tema"
        >
          <i
            class="fa-solid"
            :class="theme === 'dark'
              ? 'fa-sun'
              : 'fa-moon'"
          ></i>
        </button>

        <button
          class="hamburger"
          @click="toggleMenu"
          aria-label="Abrir menu"
        >
          <i
            class="fa-solid"
            :class="menuOpen ? 'fa-xmark' : 'fa-bars'"
          ></i>
        </button>

      </div>

    </div>
    
    <!-- MOBILE MENU -->
<teleport to="body">
  <Transition name="overlay">
    <div
      v-if="menuOpen"
      class="mobile-overlay"
      @click.self="closeMenu"
    >
      <Transition name="sheet">
        <aside class="mobile-menu">

          <div class="mobile-header">

            <div class="mobile-brand">
              <img src="../../favicon/favicon.png" class="logo-img" />
              <span>Rafael A. Vettori</span>
            </div>

            <button class="close-btn" @click="closeMenu">
              <i class="fa-solid fa-xmark"></i>
            </button>

          </div>

          <nav class="mobile-links">
            <a v-for="(item,index) in sections"
               :key="item.id"
               :style="{ '--delay': index }"
               @click="go(item.id)">
              {{ item.label }}
            </a>
          </nav>

        </aside>
      </Transition>
    </div>
  </Transition>
</teleport>

  </header>
</template>

<script setup>
import {
  ref,
  watch,
  onMounted,
  onUnmounted
} from 'vue'

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

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const closeMenu = () => {
  menuOpen.value = false
}

const go = (id) => {
  scrollTo(id)
  closeMenu()
}

const scrollTo = (id) => {

  const el = document.getElementById(id)

  if (!el) return

  const offset = 80

  const top =
    el.getBoundingClientRect().top +
    window.scrollY -
    offset

  window.scrollTo({
    top,
    behavior: 'smooth'
  })

  closeMenu()
}

const toggleTheme = () => {

  theme.value =
    theme.value === 'dark'
      ? 'light'
      : 'dark'

  document.documentElement.setAttribute(
    'data-theme',
    theme.value
  )

  localStorage.setItem(
    'theme',
    theme.value
  )
}

const handleScroll = () => {

  scrolled.value = window.scrollY > 20

  const scrollPos = window.scrollY + 150

  for (const item of sections) {

    const el = document.getElementById(item.id)

    if (!el) continue

    if (
      el.offsetTop <= scrollPos &&
      el.offsetTop + el.offsetHeight > scrollPos
    ) {
      active.value = item.id
    }
  }
}

watch(menuOpen, (value) => {
  document.body.style.overflow = value ? 'hidden' : ''
})

const handleKey = (e) => {
  if (e.key === 'Escape') {
    closeMenu()
  }
}

onMounted(() => {

  const saved =
    localStorage.getItem('theme')

  if (saved) {
    theme.value = saved
  }

  document.documentElement.setAttribute(
    'data-theme',
    theme.value
  )

  window.addEventListener(
    'scroll',
    handleScroll
  )

  window.addEventListener(
    'keydown',
    handleKey
  )

  handleScroll()
})

onUnmounted(() => {

  window.removeEventListener(
    'scroll',
    handleScroll
  )

  window.removeEventListener(
    'keydown',
    handleKey
  )

  document.body.style.overflow = ''
})
</script>

```vue
<style scoped>

/* =========================
   NAVBAR
========================= */
.navbar{
  position:fixed;
  top:0;
  left:0;
  width:100%;
  z-index: var(--z-navbar);

  padding:18px 0;

  background:rgba(8,11,20,.35);
  backdrop-filter:blur(14px);
  -webkit-backdrop-filter:blur(14px);

  transition:
    background .35s,
    backdrop-filter .35s,
    border-color .35s,
    box-shadow .35s;
}

.scrolled{
  background:rgba(8,11,20,.82);
  backdrop-filter:blur(20px);
  border-bottom:1px solid rgba(255,255,255,.06);
  box-shadow:0 10px 35px rgba(0,0,0,.18);
}

/* =========================
   CONTAINER
========================= */
.container{
  width:min(1200px,92%);
  margin:auto;

  display:flex;
  align-items:center;
  justify-content:space-between;
}

/* =========================
   LOGO
========================= */
.logo{
  display:flex;
  align-items:center;
  gap:12px;

  text-decoration:none;
  color:var(--text);
  font-weight:700;
}

.logo-img{
  width:38px;
  height:38px;
  object-fit:contain;

  transition:
    transform .35s,
    filter .35s;
}

.logo:hover .logo-img{
  transform:rotate(-8deg) scale(1.08);
}

.logo-text{
  transition:.3s;
}

/* =========================
   DESKTOP NAV
========================= */
.nav{
  display:flex;
  align-items:center;
  gap:30px;
}

.nav a{
  position:relative;

  color:var(--text-muted);

  cursor:pointer;

  transition:.3s;
}

.nav a:hover{
  color:var(--text);
}

.nav a.active{
  color:var(--secondary);
}

.nav a.active::after{
  content:"";

  position:absolute;

  left:0;
  bottom:-8px;

  width:100%;
  height:2px;

  background:var(--secondary);

  border-radius:999px;
}

/* =========================
   ACTIONS
========================= */
.actions{
  display:flex;
  align-items:center;
  gap:10px;
}

.theme,
.hamburger,
.close-btn{

  width:44px;
  height:44px;

  display:flex;
  align-items:center;
  justify-content:center;

  border-radius:12px;

  border:1px solid var(--border);

  background:rgba(255,255,255,.05);

  color:var(--text);

  cursor:pointer;

  transition:
    transform .25s,
    background .25s,
    border-color .25s;
}

.theme:hover,
.hamburger:hover,
.close-btn:hover{

  transform:translateY(-2px);

  background:rgba(124,58,237,.15);

  border-color:var(--secondary);
}

.theme i,
.hamburger i,
.close-btn i{
  font-size:18px;
}

/* =========================
   HAMBURGER
========================= */
.hamburger{
  display:none;
}

/* =========================
   OVERLAY
========================= */
.mobile-overlay{

  position:fixed;
  inset:0;

  background:rgba(0,0,0,.35);

  backdrop-filter:blur(18px);
  -webkit-backdrop-filter:blur(18px);

  z-index: var(--z-overlay);z-index: var(--z-navbar);
}

/* =========================
   MENU
========================= */
.mobile-menu{

  position:absolute;

  right:0;
  top:0;

  width:min(340px,90vw);
  height:100%;

  padding:28px;

  background:var(--surface);

  border-left:1px solid var(--border);

  display:flex;
  flex-direction:column;
}

.mobile-header{

  display:flex;
  align-items:center;
  justify-content:space-between;

  margin-bottom:40px;
}

.mobile-brand{

  display:flex;
  align-items:center;
  gap:12px;

  color:var(--text);
  font-weight:700;
}

/* =========================
   LINKS
========================= */
.mobile-links{

  display:flex;
  flex-direction:column;

  gap:22px;
}

.mobile-links a{

  color:var(--text-muted);

  cursor:pointer;

  font-size:18px;

  opacity:0;

  transform:translateX(24px);

  animation:slideLinks .45s ease forwards;
  animation-delay:calc(var(--delay) * 70ms);

  transition:.25s;
}

.mobile-links a:hover{
  color:var(--text);
}

.mobile-links a.active{
  color:var(--secondary);
}

/* =========================
   ANIMAÇÕES
========================= */

.overlay-enter-active,
.overlay-leave-active{
  transition:opacity .35s ease;
}

.overlay-enter-from,
.overlay-leave-to{
  opacity:0;
}

.sheet-enter-active,
.sheet-leave-active{
  transition:
    transform .35s cubic-bezier(.2,.9,.2,1),
    opacity .35s;
}

.sheet-enter-from,
.sheet-leave-to{
  transform:translateX(80px);
  opacity:0;
}

@keyframes slideLinks{

  to{

    opacity:1;

    transform:translateX(0);

  }

}

/* =========================
   RESPONSIVO
========================= */

@media(max-width:900px){

  .nav{
    display:none;
  }

  .hamburger{
    display:flex;
  }

  .logo-text{
    display:none;
  }

}


</style>