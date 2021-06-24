import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

const theme = {
  primary: "#7209B7",
  secondary: "#FE7624",
  accent: "#8c9eff",
  info: "#00CAE3",
  success: "#4CAF50",
  warning: "#FB8C00",
  error: "#FF5252",
  blackDark: "#222",
};

export default new Vuetify({
  theme: {
    themes: {
      light: theme,
      dark: theme,
    },
    options: {
      customProperties: true,
    },
  },
});
