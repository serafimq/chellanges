import { createApp } from 'vue';
import { createPinia } from 'pinia'
import App from './App.vue';

const pinia = createPinia();

import router from './router/router.js';

createApp(App)
  .use(router)
  .use(pinia)
  .mount('#app');
