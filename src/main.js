import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import util from "./server/util";
import baseurl from "./server/baseurl";
import  Modal  from '../src/components/Modal/Modal.vue';
import router from './router/index';
import Aos from 'aos';
const app = createApp(App);
app.config.globalProperties.$util = util;
app.config.globalProperties.$baseurl = baseurl; 
import 'bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min';
import './assets/scss/main.scss'
import store from './store';
import VueVideoPlayer from '@videojs-player/vue'
import 'video.js/dist/video-js.css';
app
.component("Modal",Modal)
app.use(createPinia())
app.use(router);
app.use(store);
app.use(VueVideoPlayer)
app.mount('#app')
Aos.init()