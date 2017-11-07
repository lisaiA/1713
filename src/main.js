import Vue from 'vue'
import App from './app/App'
import router from './router'
import store from './vuex'
import FastClick from 'fastclick';
FastClick.attach(document.body);
import VueAwesomeSwiper from 'vue-awesome-swiper';
import VuePaginate from 'vue-paginate'
Vue.use(VuePaginate);

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
