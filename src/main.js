import Vue from 'vue'
import App from './App.vue'
import Paginate from 'vuejs-paginate'

Vue.component('paginate', Paginate)
import Lingallery from 'lingallery'
Vue.component('lingallery', Lingallery)
import rate from 'vue-rate';
Vue.use(rate);
import store from './store/store'

Vue.config.productionTip = false
new Vue({
  store,
  render: h => h(App),
}).$mount('#app')