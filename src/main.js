import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/tailwind.css'
// Register the icons with addIcons
const app = createApp(App)

// Register the OhVueIcon component globally

// Use the router
app.use(router)

// Mount the app
app.mount('#app')



