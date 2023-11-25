import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import util from "./server/util";
import baseurl from "./server/baseurl";
import  Modal  from '../src/components/Modal/Modal.vue';
import tahrirlash from "../src/components/tahrirlash.vue";
// import router from "./router/index.js";
const app = createApp(App);
app.config.globalProperties.$util = util;
app.config.globalProperties.$baseurl = baseurl; 
import 'bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min';
import './assets/scss/main.scss'
app
.component("Modal",Modal)
.component("tahrirlash",tahrirlash)
app.use(createPinia())
app.use(router)

app.mount('#app')
