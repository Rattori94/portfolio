<template>
  <section id="projects" class="projects">
    <div class="container">

      <div class="section-header fade-up">
        <span class="subtitle">PROJETOS</span>

        <h2>Alguns projetos desenvolvidos durante minha jornada.</h2>

        <p>
          Cada projeto representa uma etapa da minha evolução como
          desenvolvedor. Busco aplicar boas práticas, componentização,
          responsividade e interfaces modernas em todas as aplicações.
        </p>
      </div>

      <div class="projects-grid">

        <article
          v-for="project in projects"
          :key="project.title"
          class="project-card"
        >
          <img
            :src="project.image"
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
                class="btn"
              >
                GitHub
              </a>

            </div>

          </div>

        </article>

      </div>

    </div>
  </section>
</template>

<script setup>

const projects = [

{
description:'Portfólio desenvolvido em Vue.js com foco em design moderno, componentização e responsividade.',
techs:['Vue','CSS','JavaScript'],
github:'https://github.com/Rattori94/portfolio',
},

{
description:'Landing page com contagem regressiva dinâmica publicada na Vercel.',
techs:['HTML','SCSS','JavaScript'],
github:'https://github.com/Rattori94/niver',
},

{
description:'Currículo responsivo desenvolvido para apresentar experiências e habilidades.',
techs:['HTML','CSS'],
github:'https://github.com/Rattori94/curriculo',
},

{
title:'Clone Disney+',
description:'Reprodução da interface do Disney+ utilizando HTML, Sass e JavaScript.',
image:'/projects/disney.jpg',
techs:['HTML','SASS','JavaScript'],
github:'https://github.com/Rattori94/disneyplus',
},

]

</script>

<style scoped>

.projects{

padding:120px 0;

}

.section-header{

text-align:center;

max-width:800px;

margin:auto;

margin-bottom:70px;

}

.subtitle{

color:var(--secondary);

font-weight:700;

letter-spacing:3px;

}

.projects-grid{

display:grid;

grid-template-columns:repeat(auto-fit,minmax(340px,1fr));

gap:30px;

}

.project-card{

background:var(--surface);

border:1px solid var(--border);

border-radius:20px;

overflow:hidden;

transition:.35s;

display:flex;

flex-direction:column;

}

.project-card:hover{

transform:translateY(-10px);

box-shadow:var(--shadow);

border-color:var(--primary);

}

.project-card img{

width:100%;

height:220px;

object-fit:cover;

}

.content{

padding:25px;

display:flex;

flex-direction:column;

gap:18px;

}

.stack{

display:flex;

flex-wrap:wrap;

gap:10px;

}

.stack span{

padding:8px 14px;

border-radius:999px;

background:rgba(124,58,237,.12);

color:var(--secondary);

font-size:14px;

}

.buttons{

display:flex;

gap:15px;

margin-top:auto;

}

.outline{

background:transparent;

border:2px solid var(--primary);

}

</style>