import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import '@arco-design/web-vue/dist/arco.css';
import ArcoVue from '@arco-design/web-vue';
import ArcoVueIcon from '@arco-design/web-vue/es/icon';

const app = createApp(App)

app.use(createPinia())
app.use(router)
// 使用 Arco Design
app.use(ArcoVue, {
  // 用于改变使用组件时的前缀名称
  componentPrefix: 'arco'
});
app.use(ArcoVueIcon);

app.mount('#app')
