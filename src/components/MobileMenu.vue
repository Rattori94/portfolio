<template>
  <div>
    <!-- Overlay -->
    <div
      v-if="open"
      class="overlay"
      @click="close"
    ></div>

    <!-- Menu -->
    <aside
      class="mobile-menu"
      :class="{ open }"
    >
      <nav>
        <a href="#home" @click="close">Home</a>
        <a href="#about" @click="close">Sobre</a>
        <a href="#skills" @click="close">Skills</a>
        <a href="#projects" @click="close">Projetos</a>
        <a href="#contact" @click="close">Contato</a>
      </nav>
    </aside>
  </div>
</template>

<script setup>
defineProps({
  open: Boolean
})

const emit = defineEmits(['close'])

const close = () => {
  emit('close')
}
</script>

<style scoped>
.overlay {
  position: fixed;
  inset: 0;

  background: rgba(0,0,0,0.6);

  z-index: 998;
}

.mobile-menu {
  position: fixed;
  top: 0;
  right: -260px;

  width: 260px;
  height: 100vh;

  background: var(--surface);

  padding: 40px 25px;

  transition: 0.3s ease;

  z-index: 999;

  display: flex;
  flex-direction: column;
  gap: 20px;
}

.mobile-menu.open {
  right: 0;
}

.mobile-menu nav {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.mobile-menu a {
  color: var(--text);
  font-size: 18px;
  text-decoration: none;
  transition: 0.3s;
}

.mobile-menu a:hover {
  color: var(--secondary);
  transform: translateX(5px);
}
</style>