import { createApp } from 'vue';
import App from './App';
import router from './router';
import './assets/styles/main.scss';
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';

createApp(App).use(Toast).use(router).mount('#app');
