import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import _ from 'lodash';
import VueSweetalert2 from 'vue-sweetalert2';
import "./utils/vee-validate.js";
import "./utils/date-filter.js";
import "./utils/html-to-paper.js";
import 'sweetalert2/dist/sweetalert2.min.css';
Vue.use(VueSweetalert2);
Object.defineProperty(Vue.prototype, '$_', { value: _ });

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
