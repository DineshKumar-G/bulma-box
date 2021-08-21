import Vue from 'vue';
import {
  Dropdown,
  Button,
  Checkbox,
} from 'buefy';
import App from './App.vue';
import router from './router';
import 'buefy/dist/buefy.css';

Vue.use(Dropdown);
Vue.use(Button);
Vue.use(Checkbox);

require('./styles/main.scss');

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
