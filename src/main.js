import Vue from "vue";
import AOS from "aos";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import "aos/dist/aos.css";

import "../src/assets/sass/style.scss";

Vue.config.productionTip = false;

new Vue({
  created() {
    AOS.init();
  },
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
