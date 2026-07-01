<template>
  <section id="skills" class="skills">
    <div class="container">

      <!-- Cabeçalho -->
      <div class="section-header fade-up">
        <span class="subtitle">TECNOLOGIAS</span>
        <h2>Ferramentas que utilizo para desenvolver aplicações modernas.</h2>
        <p>
          Minha formação está focada no desenvolvimento Front-end com Vue.js,
          mas também venho ampliando meus conhecimentos em desenvolvimento
          Full Stack, APIs e boas práticas de engenharia de software.
        </p>
      </div>

      <!-- Grid de categorias -->
      <div class="skills-grid">

        <!-- FRONT-END -->
        <div class="category card fade-up">
          <h3>Front-end</h3>
          <div class="skill">
            <span>HTML5</span>
            <small>Domínio sólido</small>
          </div>
          <div class="skill">
            <span>CSS3</span>
            <small>Layouts responsivos</small>
          </div>
          <div class="skill">
            <span>JavaScript ES6+</span>
            <small>Intermediário</small>
          </div>
          <div class="skill">
            <span>Vue.js</span>
            <small>Principal framework</small>
          </div>
          <div class="skill">
            <span>Vite</span>
            <small>Build moderno</small>
          </div>
        </div>

        <!-- FERRAMENTAS -->
        <div class="category card fade-up">
          <h3>Ferramentas</h3>
          <div class="skill">
            <span>Git</span>
            <small>Controle de versão</small>
          </div>
          <div class="skill">
            <span>GitHub</span>
            <small>Versionamento e Portfólio</small>
          </div>
          <div class="skill">
            <span>VS Code</span>
            <small>Ambiente principal</small>
          </div>
          <div class="skill">
            <span>NPM</span>
            <small>Gerenciamento de pacotes</small>
          </div>
          <div class="skill">
            <span>Figma</span>
            <small>Leitura de interfaces</small>
          </div>
        </div>

        <!-- EM DESENVOLVIMENTO -->
        <div class="category card fade-up">
          <h3>Em desenvolvimento</h3>
          <div class="skill">
            <span>Python</span>
            <small>Curso Full Stack</small>
          </div>
          <div class="skill">
            <span>APIs REST</span>
            <small>Integração</small>
          </div>
          <div class="skill">
            <span>Banco de Dados</span>
            <small>SQL</small>
          </div>
          <div class="skill">
            <span>Node.js</span>
            <small>Fundamentos</small>
          </div>
          <div class="skill">
            <span>Testes</span>
            <small>Aprendizado contínuo</small>
          </div>
        </div>

      </div>

      <!-- Destaques -->
      <div class="highlights">
        <div class="highlight fade-up">
          <h4>💻 Código limpo</h4>
          <p>
            Priorizo componentes reutilizáveis, organização de arquivos e
            manutenção facilitada.
          </p>
        </div>
        <div class="highlight fade-up">
          <h4>📱 Responsividade</h4>
          <p>
            Desenvolvimento voltado para desktop, tablets e smartphones,
            garantindo boa experiência em qualquer dispositivo.
          </p>
        </div>
        <div class="highlight fade-up">
          <h4>🚀 Evolução constante</h4>
          <p>
            Estou sempre estudando novas tecnologias e aplicando o aprendizado
            em projetos práticos.
          </p>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
/* ===== SEÇÃO SKILLS ===== */
.skills {
  padding: 120px 0;
}

/* ===== CABEÇALHO ===== */
.section-header {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 70px auto;
}

.subtitle {
  color: var(--secondary);
  font-weight: 700;
  letter-spacing: 3px;
  font-size: 14px;
}

.section-header h2 {
  font-size: 46px;
  margin: 20px 0;
}

.section-header p {
  color: var(--text-muted);
  line-height: 1.8;
}

/* ===== GRID DE CATEGORIAS ===== */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px; /* mais espaço entre os cards */
}

/* ===== CADA CATEGORIA (CARD) ===== */
.category {
  padding: 45px 35px; /* mais espaçamento interno */
  background: var(--surface);
  border-radius: 24px;
  border: 1px solid var(--border);
  box-shadow: 0 4px 20px rgba(0,0,0,0.04);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.category:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow);
}

.category h3 {
  margin-bottom: 30px;
  font-size: 22px;
  color: var(--secondary);
  letter-spacing: 1px;
}

/* ===== ITEM DE HABILIDADE ===== */
.skill {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  border-bottom: 1px solid var(--border);
}

.skill:last-child {
  border-bottom: none;
}

.skill span {
  font-weight: 600;
  font-size: 18px; /* nome da tecnologia maior */
}

.skill small {
  color: var(--text-muted);
  font-size: 14px;  /* descrição maior */
  opacity: 0.9;
  text-align: right;   /* alinha o texto à direita */
  white-space: nowrap; /* evita quebra em duas linhas */
  line-height: 1.3;
}

/* ===== DESTAQUES ===== */
.highlights {
  margin-top: 80px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.highlight {
  padding: 35px 30px;
  background: linear-gradient(135deg, var(--surface), rgba(6, 182, 212, 0.08));
  border-radius: 20px;
  border: 1px solid var(--border);
  transition: 0.35s ease;
}

.highlight:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow);
}

.highlight h4 {
  font-size: 20px;
  margin-bottom: 18px;
}

.highlight p {
  color: var(--text-muted);
  line-height: 1.8;
}

/* ===== RESPONSIVIDADE ===== */
@media (max-width: 992px) {
  .skills-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .highlights {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .section-header h2 {
    font-size: 36px;
  }

  .category {
    padding: 30px 25px;
  }

  .skill span {
    font-size: 16px;
  }

  .skill small {
    font-size: 13px;
  }
}
</style>