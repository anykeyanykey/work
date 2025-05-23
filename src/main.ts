import { createApp } from 'vue';
import App from './App';
import router from './router';
import './assets/styles/main.scss';

createApp(App).use(router).mount('#app');