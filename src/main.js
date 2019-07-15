import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueParticles from 'vue-particles'
import customJs from '@/mixins/custom';

//service
import service from '@/mixins/service';

Vue.use(VueParticles)
Vue.config.productionTip = false;

new Vue({
	mixins: [service, customJs],
  router,
  store,
  render: h => h(App),
}).$mount('#app');
