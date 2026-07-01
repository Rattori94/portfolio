<template>
  <button
    v-show="visible"
    class="scroll-top"
    @click="scrollToTop"
  >
    ↑
  </button>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const visible = ref(false)

const handleScroll = () => {
  visible.value = window.scrollY > 400
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.scroll-top {
  position: fixed;
  bottom: 30px;
  right: 30px;

  width: 50px;
  height: 50px;

  border-radius: 50%;

  border: none;

  cursor: pointer;

  background: linear-gradient(
    90deg,
    var(--primary),
    var(--secondary)
  );

  color: white;

  font-size: 22px;

  box-shadow: var(--shadow);

  transition: 0.3s;

  z-index: 999;
}

.scroll-top:hover {
  transform: translateY(-5px);
}
</style>