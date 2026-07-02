import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/* Font Awesome */
import '@fortawesome/fontawesome-free/css/all.min.css'

/* Styles globais */
import './styles/reset.css'
import './styles/variables.css'
import './styles/global.css'
import './styles/animations.css'

createApp(App)
  .use(router)
  .mount('#app')