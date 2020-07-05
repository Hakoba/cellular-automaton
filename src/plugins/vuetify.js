import "material-design-icons-iconfont/dist/material-design-icons.css"; // Ensure you are using css-loader♂
import Vue from "vue";
import Vuetify from "vuetify/lib";
import ru from "vuetify/es5/locale/ru";
Vue.use(Vuetify);
export default new Vuetify({
  icons: {
    iconfont: "md"
  },
  theme: {
    themes: {
      light: {
        primary: "#2E7F3E",
        secondary: "#424242",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107"
      },
      dark: {
        primary: "#41B883",
        secondary: "#424242",
        accent: "#82B1FF",
        error: "#751010",
        info: "#1696F5",
        success: "#4CAF50",
        warning: "#FFC107",
        background: "#777"
      }
    }
  },
  lang: {
    locales: { ru },
    current: "ru"
  }
});
