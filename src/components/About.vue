<template>
  <section id="about" class="about">
    <div class="container">

      <div class="section-header fade-up">
        <span class="subtitle">SOBRE MIM</span>

        <h2>Transformando aprendizado em soluções reais.</h2>

        <p>
          Estou construindo minha carreira como desenvolvedor Front-end,
          combinando dedicação, aprendizado contínuo e desenvolvimento de
          projetos práticos para criar interfaces modernas e intuitivas.
        </p>
      </div>

      <div class="about-grid">

        <!-- Texto principal -->
        <div class="about-text fade-up">

          <h3>Quem sou eu?</h3>

          <p>
            Meu nome é <strong>Rafael Arcangelo Vettori</strong> e sou desenvolvedor
            Front-end Full-stack Python.
          </p>

          <p>
            Atualmente estou cursando a formação Full Stack Python da EBAC,
            aprofundando conhecimentos em desenvolvimento web, APIs,
            componentização e boas práticas de engenharia de software.
          </p>

          <p>
            Gosto de construir interfaces limpas, responsivas e acessíveis,
            sempre buscando entregar uma boa experiência para o usuário.
          </p>

          <p>
            Meu objetivo é ingressar em uma equipe onde eu possa aprender,
            colaborar e evoluir profissionalmente, contribuindo para projetos
            que gerem valor para usuários e empresas.
          </p>

        </div>

        <!-- Cards -->
        <div class="cards">

          <div class="card fade-up">
            <div class="icon">💡</div>

            <h4>Aprendizado Contínuo</h4>

            <p>
              Estou constantemente estudando novas tecnologias e aplicando os
              conhecimentos em projetos pessoais.
            </p>
          </div>

          <div class="card fade-up">
            <div class="icon">⚡</div>

            <h4>Código Organizado</h4>

            <p>
              Priorizo componentização, reutilização de código e boas práticas
              para facilitar manutenção e escalabilidade.
            </p>
          </div>

          <div class="card fade-up">
            <div class="icon">📱</div>

            <h4>Responsividade</h4>

            <p>
              Desenvolvo interfaces adaptáveis para desktop, tablets e
              dispositivos móveis.
            </p>
          </div>

          <div class="card fade-up">
            <div class="icon">🚀</div>

            <h4>Objetivo</h4>

            <p>
              Conquistar minha primeira oportunidade como Desenvolvedor
              Front-end e crescer continuamente na área de tecnologia.
            </p>
          </div>

        </div>

      </div>

      <!-- Estatísticas -->
      <div class="stats">

        <div class="stat-card">
          <h3>10+</h3>
          <span>Projetos desenvolvidos</span>
        </div>

        <div class="stat-card">
          <h3>6+</h3>
          <span>Tecnologias estudadas</span>
        </div>

        <div class="stat-card">
          <h3>100%</h3>
          <span>Comprometimento</span>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>

.about{

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

.section-header h2{

font-size:48px;

margin:20px 0;

}

.section-header p{

color:var(--text-muted);

line-height:1.8;

font-size:18px;

}

.about-grid{

display:grid;

grid-template-columns:1fr 1fr;

gap:60px;

align-items:start;

}

.about-text h3{

font-size:34px;

margin-bottom:25px;

}

.about-text p{

margin-bottom:22px;

line-height:1.9;

color:var(--text-muted);

}

.cards{

display:grid;

grid-template-columns:1fr 1fr;

gap:20px;

}

.card{

background:var(--surface);

border:1px solid var(--border);

padding:30px;

border-radius:20px;

transition:.35s;

}

.card:hover{

transform:translateY(-10px);

border-color:var(--primary);

box-shadow:var(--shadow);

}

.icon{

font-size:36px;

margin-bottom:20px;

}

.card h4{

margin-bottom:15px;

}

.card p{

color:var(--text-muted);

line-height:1.7;

}

.stats{

margin-top:80px;

display:grid;

grid-template-columns:repeat(3,1fr);

gap:30px;

}

.stat-card{

background:linear-gradient(
135deg,
var(--surface),
rgba(124,58,237,.12)
);

padding:40px;

text-align:center;

border-radius:20px;

border:1px solid var(--border);

}

.stat-card h3{

font-size:46px;

color:var(--secondary);

margin-bottom:10px;

}

.stat-card span{

color:var(--text-muted);

}

@media(max-width:992px){

.about-grid{

grid-template-columns:1fr;

}

.cards{

grid-template-columns:1fr;

}

.stats{

grid-template-columns:1fr;

}

.section-header h2{

font-size:36px;

}

}

</style>