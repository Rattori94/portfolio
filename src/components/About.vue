<template>
  <section id="about" class="about">
    <div class="container">

      <!-- Cabeçalho -->
      <div class="section-header fade-up">

        <span class="subtitle">
          SOBRE MIM
        </span>

        <h2>
          Transformando aprendizado em soluções reais.
        </h2>

        <p>
          Estou construindo minha carreira como desenvolvedor Front-end,
          combinando dedicação, aprendizado contínuo e desenvolvimento de
          projetos práticos para criar interfaces modernas e intuitivas.
        </p>

      </div>

      <!-- Conteúdo -->
      <div class="about-grid">

        <!-- Texto -->
        <div class="about-text fade-up">

          <h3>Quem sou eu?</h3>

          <p>
            Meu nome é <strong>Rafael Arcangelo Vettori</strong> e sou
            Desenvolvedor Front-end em formação Full Stack Python.
          </p>

          <p>
            Atualmente curso a formação Full Stack Python da EBAC,
            aprofundando conhecimentos em desenvolvimento web,
            APIs REST, componentização, arquitetura de aplicações
            e boas práticas de engenharia de software.
          </p>

          <p>
            Tenho grande interesse em construir interfaces modernas,
            responsivas e acessíveis, sempre buscando proporcionar
            uma excelente experiência ao usuário.
          </p>

          <p>
            Meu objetivo é integrar uma equipe de tecnologia onde
            eu possa aprender continuamente, colaborar em projetos
            desafiadores e evoluir profissionalmente como desenvolvedor.
          </p>

        </div>

        <!-- Cards -->
        <div class="cards">

          <div class="card fade-up">

            <div class="icon">
              <i class="fa-solid fa-lightbulb"></i>
            </div>

            <h4>Aprendizado Contínuo</h4>

            <p>
              Estou constantemente estudando novas tecnologias e
              colocando o aprendizado em prática através de projetos.
            </p>

          </div>

          <div class="card fade-up">

            <div class="icon">
              <i class="fa-solid fa-code"></i>
            </div>

            <h4>Código Organizado</h4>

            <p>
              Desenvolvimento baseado em componentização,
              reutilização de código e boas práticas para
              facilitar manutenção e escalabilidade.
            </p>

          </div>

          <div class="card fade-up">

            <div class="icon">
              <i class="fa-solid fa-mobile-screen"></i>
            </div>

            <h4>Responsividade</h4>

            <p>
              Interfaces adaptáveis para desktop, tablets
              e dispositivos móveis, priorizando usabilidade.
            </p>

          </div>

          <div class="card fade-up">

            <div class="icon">
              <i class="fa-solid fa-rocket"></i>
            </div>

            <h4>Objetivo</h4>

            <p>
              Conquistar minha primeira oportunidade como
              Desenvolvedor Front-end e crescer continuamente
              na área de tecnologia.
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
// Nenhuma lógica necessária nesta seção.
</script>

<style scoped>

/* ==========================
   ABOUT
========================== */

.about{
  padding:120px 0;
}

/* ==========================
   CABEÇALHO
========================== */

.section-header{
  text-align:center;
  max-width:800px;
  margin:0 auto 70px;
}

.subtitle{
  color:var(--secondary);
  font-weight:700;
  letter-spacing:3px;
  font-size:14px;
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

/* ==========================
   GRID
========================== */

.about-grid{
  display:grid;
  grid-template-columns:1.1fr 1fr;
  gap:70px;
  align-items:start;
}

/* ==========================
   TEXTO
========================== */

.about-text h3{
  font-size:34px;
  margin-bottom:28px;
}

.about-text p{
  margin-bottom:22px;
  color:var(--text-muted);
  line-height:1.9;
}

.about-text strong{
  color:var(--text);
}

/* ==========================
   CARDS
========================== */

.cards{
  display:grid;
  grid-template-columns:repeat(2,1fr);
  gap:22px;
}

.card{
  background:var(--surface);
  border:1px solid var(--border);
  border-radius:22px;
  padding:30px;
  transition:.35s ease;
}

.card:hover{
  transform:translateY(-8px);
  border-color:var(--primary);
  box-shadow:var(--shadow);
}

/* ==========================
   ÍCONES
========================== */

.icon{
  width:64px;
  height:64px;

  display:flex;
  justify-content:center;
  align-items:center;

  border-radius:18px;

  background:rgba(124,58,237,.12);

  color:var(--secondary);

  font-size:24px;

  margin-bottom:22px;

  transition:.35s ease;
}

.card:hover .icon{
  transform:rotate(-8deg) scale(1.08);
  background:var(--secondary);
  color:#fff;
}

.card h4{
  font-size:20px;
  margin-bottom:14px;
}

.card p{
  color:var(--text-muted);
  line-height:1.7;
}

/* ==========================
   ESTATÍSTICAS
========================== */

.stats{
  margin-top:90px;

  display:grid;
  grid-template-columns:repeat(3,1fr);

  gap:30px;
}

.stat-card{

  background:linear-gradient(
      135deg,
      var(--surface),
      rgba(124,58,237,.10)
  );

  border:1px solid var(--border);

  border-radius:22px;

  padding:40px;

  text-align:center;

  transition:.35s;
}

.stat-card:hover{
  transform:translateY(-6px);
  box-shadow:var(--shadow);
}

.stat-card h3{
  font-size:48px;
  color:var(--secondary);
  margin-bottom:10px;
}

.stat-card span{
  color:var(--text-muted);
}

/* ==========================
   RESPONSIVO
========================== */

@media(max-width:992px){

  .about{
    padding:90px 0;
  }

  .about-grid{
    grid-template-columns:1fr;
    gap:50px;
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

  .about-text h3{
    font-size:28px;
  }

}

@media(max-width:576px){

  .card{
    padding:24px;
  }

  .stat-card{
    padding:30px;
  }

  .icon{
    width:56px;
    height:56px;
    font-size:22px;
  }

}

</style>