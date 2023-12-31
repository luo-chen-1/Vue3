import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import  './assets/style.css'
// import './index.css'
// import './assets/main.css'
import { format } from 'prettier'

const app = createApp(App)

app.use(router)

app.mount('#app')
