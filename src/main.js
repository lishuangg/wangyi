//入口文件main.js引入并挂在到节点
import Vue from 'vue';
import App from './App';
import router from '@/router';
import store from '@/store';
import axios from 'axios';
//引入字体图标
import './assets/font/iconfont.css';
//引入轮播图组件
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';

Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false
Vue.prototype.$http=axios
 
/* eslint-disable no-new */
new Vue({
 el: '#app',
 router,
 store,
 render: h => h(App)
});