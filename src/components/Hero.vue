<template>
  <section id="home" class="hero">

    <!-- Blobs decorativos -->
    <div class="blur blur-1"></div>
    <div class="blur blur-2"></div>

    <div class="container hero-content">

      <!-- TEXTO -->
      <div class="hero-text fade-up">

        <!-- TAG -->
        <span class="tag">
          <i class="fa-solid fa-hand"></i>
          Olá, seja bem-vindo!
        </span>

        <h1>
          Rafael <span>Vettori</span>
        </h1>

        <h2>
          Desenvolvedor Front-end
        </h2>

        <p>
          Desenvolvedor Front-end apaixonado por criar interfaces modernas,
          responsivas e intuitivas utilizando
          <strong>Vue.js</strong>,
          <strong>JavaScript</strong>,
          <strong>HTML5</strong> e
          <strong>CSS3</strong>.
        </p>

        <p>
          Atualmente estou ampliando meus conhecimentos em Desenvolvimento
          Full Stack, sempre buscando escrever código limpo, reutilizável e
          seguindo as melhores práticas do mercado.
        </p>

        <!-- BOTÕES -->
        <div class="buttons">

          <a href="#projects" class="btn">
            <i class="fa-solid fa-folder-open"></i>
            Ver Projetos
          </a>

          <a
            href="/curriculo_rafael.pdf"
            class="btn outline"
            download
          >
            <i class="fa-solid fa-download"></i>
            Download CV
          </a>

        </div>

        <div class="techs">

          <span><i class="fa-brands fa-vuejs"></i> Vue.js</span>
          <span><i class="fa-brands fa-js"></i> JavaScript</span>
          <span><i class="fa-brands fa-html5"></i> HTML5</span>
          <span><i class="fa-brands fa-css3-alt"></i> CSS3</span>
          <span><i class="fa-brands fa-git-alt"></i> Git</span>
          <span><i class="fa-brands fa-github"></i> GitHub</span>
          <span><i class="devicon-sass-original"></i> Sass</span>
          <span><i class="devicon-gulp-plain"></i> Gulp</span>
          <span><i class="devicon-vercel-original"></i> Vercel</span>
          <span><i class="devicon-typescript-plain"></i> TypeScript</span>
          <span><i class="devicon-npm-original-wordmark"></i> Node</span>
          <span><i class="devicon-babel-plain"></i> Babel</span>
          <span><i class="devicon-bootstrap-plain"></i> Bootstrap</span>


        </div>

      </div>

      <!-- IMAGEM -->
      <div class="hero-image fade-up">

        <div class="avatar-glow"></div>

        <img
          src="../assets/avatar.jpeg"
          alt="Foto de Rafael Vettori"
        />

      </div>

    </div>

  </section>
</template>

<script setup>
</script>

<style scoped>

/* HERO */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding-top: 90px;
  z-index: var(--z-base);
}

/* GRID */
.hero-content {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 70px;
  align-items: center;
}

/* TAG */
.tag {
  display: inline-flex;
  align-items: center;
  gap: 10px;

  padding: 8px 18px;
  border-radius: 999px;

  background: rgba(124,58,237,.15);
  color: var(--secondary);

  margin-bottom: 24px;
}

/* TITULO */
.hero h1 {
  font-size: 70px;
  line-height: 1.1;
  margin-bottom: 10px;
}

.hero h1 span {
  background: linear-gradient(90deg, var(--primary), var(--secondary));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero h2 {
  color: var(--text-muted);
  font-size: 30px;
  margin-bottom: 25px;
}

.hero p {
  color: var(--text-muted);
  font-size: 18px;
  line-height: 1.8;
  margin-bottom: 20px;
}

/* BOTÕES */
.buttons {
  display: flex;
  gap: 20px;
  margin: 40px 0;
}

.buttons a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  text-decoration: none;
}

/* Botão principal */
.btn {
  padding: 14px 28px;
  border-radius: 999px;
  background: linear-gradient(90deg, var(--primary), var(--secondary));
  color: #fff !important;
  border: none;
  font-weight: 600;
  transition: all .3s ease;
}

.btn:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow);
  color: #fff !important;
}

/* Botão outline */
.btn.outline {
  background: transparent;
  border: 2px solid var(--primary);
  color: var(--primary) !important;
}

.btn.outline:hover {
  background: var(--primary);
  color: #fff !important;
  transform: translateY(-4px);
  box-shadow: var(--shadow);
}

.btn i,
.btn.outline i {
  color: inherit;
}

/* TECHS */
.techs {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.techs span {
  display: inline-flex;
  align-items: center;
  gap: 8px;

  padding: 10px 18px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 999px;

  transition: .3s;
}

.techs span:hover {
  transform: translateY(-5px);
  border-color: var(--primary);
}

/* IMAGEM */
.hero-image {
  display: flex;
  justify-content: center;
  position: relative;
}

.hero-image img {
  width: 360px;
  height: 360px;
  object-fit: cover;

  border-radius: 50%;
  border: 5px solid var(--surface);

  box-shadow: var(--shadow);
  z-index: 2;
}

.avatar-glow {
  position: absolute;
  width: 420px;
  height: 420px;

  background: radial-gradient(var(--primary), transparent 70%);
  filter: blur(90px);

  animation: pulse 5s infinite;
}

/* BLURS */
.blur {
  position: absolute;
  border-radius: 50%;
  filter: blur(120px);
  opacity: .35;
}

.blur-1 {
  width: 350px;
  height: 350px;
  background: var(--primary);
  top: -120px;
  left: -100px;
}

.blur-2 {
  width: 320px;
  height: 320px;
  background: var(--secondary);
  bottom: -120px;
  right: -100px;
}

/* ANIMAÇÃO */
@keyframes pulse {
  0% { transform: scale(.9); }
  50% { transform: scale(1.05); }
  100% { transform: scale(.9); }
}

/* RESPONSIVO */
@media(max-width:992px){

  .hero-content{
    grid-template-columns:1fr;
    text-align:center;
  }

  .hero-image{
    order:-1;
  }

  .hero h1{
    font-size:48px;
  }

  .hero h2{
    font-size:24px;
  }

  .buttons{
    justify-content:center;
    flex-wrap:wrap;
  }

  .techs{
    justify-content:center;
  }

  .hero-image img{
    width:280px;
    height:280px;
  }

}

</style>