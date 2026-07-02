<template>
  <section id="projects" class="projects">
    <div class="container">

      <!-- Cabeçalho -->
      <div class="section-header fade-up">
        <span class="subtitle">PROJETOS</span>

        <h2>Alguns projetos desenvolvidos durante minha jornada.</h2>

        <p>
          Cada projeto representa uma etapa da minha evolução como
          desenvolvedor. Busco aplicar boas práticas, componentização,
          responsividade e interfaces modernas em todas as aplicações.
        </p>
      </div>

      <!-- Grid de projetos -->
      <div class="projects-grid">

        <article
          v-for="project in projects"
          :key="project.title"
          class="project-card"
        >

          <!-- Imagem -->
          <img
            :src="project.image"
            :alt="project.title"
          >

          <div class="content">

            <h3>{{ project.title }}</h3>

            <p>{{ project.description }}</p>

            <div class="stack">
              <span
                v-for="tech in project.techs"
                :key="tech"
              >
                {{ tech }}
              </span>
            </div>

            <div class="buttons">

              <a
                :href="project.github"
                target="_blank"
                rel="noopener noreferrer"
                class="btn"
              >
                GitHub
              </a>

              <a
                v-if="project.demo"
                :href="project.demo"
                target="_blank"
                rel="noopener noreferrer"
                class="btn outline"
              >
                Demo
              </a>

            </div>

          </div>

        </article>

      </div>

    </div>
  </section>
</template>

<script setup>

// Imagens dos projetos
import portfolioImg from '../assets/projects/portfolio.png'
import shiningImg from '../assets/projects/shining.png'
import curriculoImg from '../assets/projects/curriculo_rafa.png'
import disneyImg from '../assets/projects/disney_clone.png'

const projects = [

  {
    title: 'Portfólio com Vue.js',
    description:
      'Portfólio desenvolvido em Vue.js com foco em design moderno, componentização e responsividade.',
    image: portfolioImg,
    techs: ['Vue.js', 'CSS', 'JavaScript'],
    github: 'https://github.com/Rattori94/portfolio',
    demo: 'https://portfolio-rafael-vettori.vercel.app/'
  },

  {
    title: 'Página sobre filme preferido',
    description:
      'Landing page inspirada no filme O Iluminado, desenvolvida com HTML, SCSS e JavaScript.',
    image: shiningImg,
    techs: ['HTML', 'SCSS', 'JavaScript'],
    github: 'https://github.com/Rattori94/shining',
    demo: 'https://shining-six-black.vercel.app/'
  },

  {
    title: 'Currículo',
    description:
      'Currículo responsivo desenvolvido para apresentar experiências, competências e habilidades.',
    image: curriculoImg,
    techs: ['HTML', 'CSS'],
    github: 'https://github.com/Rattori94/curriculo',
    demo: 'https://curriculo-delta-flax.vercel.app/'
  },

  {
    title: 'Clone Disney+',
    description:
      'Reprodução da interface do Disney+ utilizando HTML, Sass e JavaScript.',
    image: disneyImg,
    techs: ['HTML', 'SASS', 'JavaScript'],
    github: 'https://github.com/Rattori94/clone_disneyplus',
    demo: 'https://clone-disneyplus-omega-plum.vercel.app/'
  }

]

</script>

<style scoped>

/* ===========================
   SEÇÃO PROJETOS
=========================== */

.projects {
  padding: 120px 0;
}

/* ===========================
   CABEÇALHO
=========================== */

.section-header {
  max-width: 800px;
  margin: 0 auto 70px;
  text-align: center;
}

.subtitle {
  color: var(--secondary);
  font-weight: 700;
  letter-spacing: 3px;
  font-size: 14px;
}

.section-header h2 {
  margin: 20px 0;
  font-size: 46px;
}

.section-header p {
  color: var(--text-muted);
  line-height: 1.8;
}

/* ===========================
   GRID
=========================== */

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  gap: 35px;
  align-items: stretch;
}

/* ===========================
   CARD
=========================== */

.project-card {
  display: flex;
  flex-direction: column;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 22px;
  overflow: hidden;
  transition: .35s ease;
  height: 100%;
}

.project-card:hover {
  transform: translateY(-8px);
  border-color: var(--primary);
  box-shadow: var(--shadow);
}

/* ===========================
   IMAGEM
=========================== */

.project-card img {
  width: 100%;
  height: 230px;
  object-fit: cover;
  transition: transform .4s ease;
}

.project-card:hover img {
  transform: scale(1.05);
}

/* ===========================
   CONTEÚDO
=========================== */

.content {
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 28px;
}

.content h3 {
  margin-bottom: 16px;
  font-size: 24px;
}

.content p {
  color: var(--text-muted);
  line-height: 1.7;
  margin-bottom: 24px;
}

/* ===========================
   TECNOLOGIAS
=========================== */

.stack {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 30px;
}

.stack span {
  padding: 8px 14px;
  border-radius: 999px;
  background: rgba(124, 58, 237, .12);
  color: var(--secondary);
  font-size: 14px;
  font-weight: 600;
}

/* ===========================
   BOTÕES
=========================== */

.buttons {
  margin-top: auto;
  display: flex;
  justify-content: center;
  gap: 16px;
  padding-top: 20px;
}

.buttons .btn {
  min-width: 130px;
  text-align: center;
}

.outline {
  background: transparent;
  border: 2px solid var(--primary);
  color: var(--primary);
}

.outline:hover {
  background: var(--primary);
  color: #fff;
}

/* ===========================
   RESPONSIVO
=========================== */

@media (max-width: 992px) {

  .projects-grid {
    grid-template-columns: 1fr;
  }

  .section-header h2 {
    font-size: 36px;
  }

  .project-card img {
    height: 210px;
  }

  .buttons {
    flex-direction: column;
    align-items: center;
  }

  .buttons .btn {
    width: 100%;
    max-width: 240px;
  }
}

@media (max-width: 576px) {

  .projects {
    padding: 90px 0;
  }

  .content {
    padding: 22px;
  }

  .content h3 {
    font-size: 21px;
  }

  .project-card img {
    height: 200px;
  }
}

</style>