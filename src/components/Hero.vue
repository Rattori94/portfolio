<template>
  <section id="home" class="hero">
    <!-- Elementos decorativos -->
    <div class="blur blur-1"></div>
    <div class="blur blur-2"></div>

    <div class="container hero-content">
      <!-- Texto -->
      <div class="hero-text fade-up">
        <span class="tag">👋 Olá, seja bem-vindo!</span>

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

        <div class="buttons">
          <a href="#projects" class="btn">
            Ver Projetos
          </a>

          <a href="/portfolio-vue/public/curriculo_rafael.pdf" class="btn outline" download>
            Download CV
          </a>
        </div>

        <div class="techs">
          <span>Vue.js</span>
          <span>JavaScript</span>
          <span>HTML5</span>
          <span>CSS3</span>
          <span>Git</span>
          <span>GitHub</span>
        </div>
      </div>

      <!-- Avatar -->
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
.hero {
  position: relative;
  min-height: 100vh;

  display: flex;
  align-items: center;

  overflow: hidden;
}

.hero-content {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 70px;
  align-items: center;
}

.tag {
  display: inline-block;
  padding: 8px 18px;

  border-radius: 999px;

  background: rgba(124,58,237,.15);

  color: var(--secondary);

  margin-bottom: 24px;
}

.hero h1 {
  font-size: 70px;
  line-height: 1.1;
  margin-bottom: 10px;
}

.hero h1 span {
  background: linear-gradient(
      90deg,
      var(--primary),
      var(--secondary)
  );

  -webkit-background-clip: text;
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

.buttons {
  display: flex;
  gap: 20px;

  margin: 40px 0;
}

.outline {
  background: transparent;

  border: 2px solid var(--primary);
}

.techs {
  display: flex;

  flex-wrap: wrap;

  gap: 12px;
}

.techs span {
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

  background: radial-gradient(
      var(--primary),
      transparent 70%
  );

  filter: blur(90px);

  animation: pulse 5s infinite;
}

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

@keyframes pulse {

  0% {
    transform: scale(.9);
  }

  50% {
    transform: scale(1.05);
  }

  100% {
    transform: scale(.9);
  }

}

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