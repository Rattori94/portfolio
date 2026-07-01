import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// CSS global (inclui variables.css, resets, etc.)
import './assets/css/variables.css'

const app = createApp(App)

// plugins
app.use(router)

// mount
app.mount('#app')