<template>
  <DefaultLayout>

    <Hero />

    <About />

    <Skills />

    <Projects />

    <Contact />

    <Footer />

  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from '../layouts/DefaultLayout.vue'

import Hero from '../components/Hero.vue'
import About from '../components/About.vue'
import Skills from '../components/Skills.vue'
import Projects from '../components/Projects.vue'
import Contact from '../components/Contact.vue'
import Footer from '../components/Footer.vue'
</script>

<style scoped>

:deep(section){

scroll-margin-top:90px;

}

</style>