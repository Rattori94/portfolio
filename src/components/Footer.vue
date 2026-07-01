<template>
  <footer class="footer">
    <div class="container">

      <!-- Logo -->
      <div class="footer-brand">
        <h2>
          <span>&lt;/&gt;</span> Rafael A. Vettori
        </h2>

        <p>
          Desenvolvedor Front-end Full-stack Pyhton.
        </p>
      </div>

      <!-- Navegação -->
      <div class="footer-links">

        <h3>Navegação</h3>

        <a href="#home">Home</a>

        <a href="#about">Sobre</a>

        <a href="#skills">Skills</a>

        <a href="#projects">Projetos</a>

        <a href="#contact">Contato</a>

      </div>

      <!-- Redes -->
      <div class="footer-social">

        <h3>Redes</h3>

        <a
          href="https://github.com/Rattori94"
          target="_blank"
        >
          GitHub
        </a>

        <a
          href="https://linkedin.com/in/rafaelarcangelovettori"
          target="_blank"
        >
          LinkedIn
        </a>

        <a
          href="mailto:rafael.arcangelovettori@gmail.com"
        >
          E-mail
        </a>

      </div>

    </div>

    <div class="bottom">

      <p>
        © {{ year }} Rafael A. Vettori.
        Todos os direitos reservados.
      </p>

      <button
        class="top-button"
        @click="scrollTop"
      >
        ↑
      </button>

    </div>

  </footer>
</template>

<script setup>
const year = new Date().getFullYear()

const scrollTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>

<style scoped>

.footer{

padding:80px 0 30px;

background:var(--surface);

border-top:1px solid var(--border);

margin-top:120px;

}

.container{

width:min(1200px,90%);

margin:auto;

display:grid;

grid-template-columns:2fr 1fr 1fr;

gap:60px;

}

.footer-brand h2{

margin-bottom:18px;

font-size:28px;

}

.footer-brand span{

color:var(--secondary);

}

.footer-brand p{

color:var(--text-muted);

line-height:1.8;

max-width:420px;

}

.footer-links,

.footer-social{

display:flex;

flex-direction:column;

gap:14px;

}

.footer-links h3,

.footer-social h3{

margin-bottom:12px;

}

.footer-links a,

.footer-social a{

color:var(--text-muted);

transition:.3s;

}

.footer-links a:hover,

.footer-social a:hover{

color:var(--secondary);

transform:translateX(5px);

}

.bottom{

width:min(1200px,90%);

margin:60px auto 0;

padding-top:25px;

border-top:1px solid var(--border);

display:flex;

justify-content:space-between;

align-items:center;

}

.bottom p{

color:var(--text-muted);

}

.top-button{

width:45px;

height:45px;

border:none;

border-radius:50%;

cursor:pointer;

background:linear-gradient(
90deg,
var(--primary),
var(--secondary)
);

color:white;

font-size:22px;

transition:.3s;

}

.top-button:hover{

transform:translateY(-5px);

box-shadow:var(--shadow);

}

@media(max-width:900px){

.container{

grid-template-columns:1fr;

text-align:center;

}

.footer-brand p{

margin:auto;

}

.bottom{

flex-direction:column;

gap:20px;

}

}

</style>