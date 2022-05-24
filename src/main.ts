import { createApp } from 'vue';
import router from './router';
import App from './App.vue';
import { ENV } from '@/api/config';

if (process.env.NODE_ENV === 'production') {
  // rewirteLog()
}

const app = createApp(App);
app.config.performance = ENV === 'development';
app.use(router);
app.mount('#app');

