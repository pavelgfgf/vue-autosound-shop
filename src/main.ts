import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'

// Создаем приложение
const app = createApp(App)

// Явно используем router
app.use(router)

// Монтируем приложение
app.mount('#app')

// Добавляем Font Awesome
const link = document.createElement('link')
link.rel = 'stylesheet'
link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
document.head.appendChild(link)