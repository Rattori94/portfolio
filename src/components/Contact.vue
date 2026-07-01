<template>
  <section id="contact" class="contact">
    <div class="container">

      <div class="section-header fade-up">
        <span class="subtitle">CONTATO</span>

        <h2>Vamos conversar?</h2>

        <p>
          Estou em busca da minha primeira oportunidade como Desenvolvedor
          Front-end. Se você procura alguém dedicado, comprometido com o
          aprendizado e apaixonado por tecnologia, será um prazer conversar.
        </p>
      </div>

      <div class="contact-grid">

        <!-- Informações -->
        <div class="contact-info card fade-up">

          <h3>Entre em contato</h3>

          <p>
            Estou disponível para oportunidades CLT, estágio ou projetos
            que contribuam para meu crescimento profissional.
          </p>

          <div class="contact-item">
            <span>📧</span>
            <a href="mailto:rafael.arcangelovettori@gmail.com">
              E-mail
            </a>
          </div>

          <div class="contact-item">
            <span>💼</span>
            <a
              href="https://www.linkedin.com/in/rafaelarcangelovettori"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>

          <div class="contact-item">
            <span>💻</span>
            <a
              href="https://github.com/Rattori94"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>

        </div>

        <!-- Chamada -->
        <div class="contact-card fade-up">
          <h3>Por que trabalhar comigo?</h3>

          <ul>
            <li>✔️ Comprometimento com qualidade e organização.</li>
            <li>✔️ Facilidade para aprender novas tecnologias.</li>
            <li>✔️ Experiência prática em projetos com Vue.js, JavaScript e CSS.</li>
            <li>✔️ Interesse em crescer junto com a equipe.</li>
          </ul>

          <a
            href="mailto:rafael.arcangelovettori@gmail.com"
            class="btn"
          >
            Enviar e-mail
          </a>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>

.contact{
  padding:120px 0;
}

.section-header{
  max-width:800px;
  margin:auto;
  text-align:center;
  margin-bottom:70px;
}

.subtitle{
  color:var(--secondary);
  letter-spacing:3px;
  font-weight:700;
}

.section-header h2{
  font-size:46px;
  margin:20px 0;
}

.section-header p{
  color:var(--text-muted);
  line-height:1.8;
}

.contact-grid{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:30px;
}

.contact-info{
  padding:40px;
}

.contact-info h3{
  margin-bottom:20px;
}

.contact-info p{
  color:var(--text-muted);
  line-height:1.8;
  margin-bottom:30px;
}

.contact-item{
  display:flex;
  align-items:center;
  gap:15px;
  margin-bottom:20px;
}

.contact-item span{
  font-size:24px;
}

.contact-item a{
  color:var(--text);
  transition:.3s;
}

.contact-item a:hover{
  color:var(--secondary);
}

.contact-card{
  background:linear-gradient(
    135deg,
    var(--surface),
    rgba(124,58,237,.12)
  );

  border:1px solid var(--border);
  border-radius:20px;
  padding:40px;
}

.contact-card h3{
  margin-bottom:25px;
}

.contact-card ul{
  list-style:none;
  padding:0;
  margin-bottom:30px;
}

.contact-card li{
  margin-bottom:15px;
  color:var(--text-muted);
  line-height:1.7;
}

@media(max-width:900px){

.contact-grid{
  grid-template-columns:1fr;
}

.section-header h2{
  font-size:36px;
}

}
</style>