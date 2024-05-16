import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Make sure router import path is correct

const app = createApp(App);
app.use(router); // Use Vue Router
app.mount('#app');
