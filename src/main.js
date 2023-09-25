import "./assets/base.css";
import GlobalStyles from "./components/GlobalStyles.vue";
import { createApp } from "vue";
import ClickAway from "vue3-click-away";
import clickOutside from "./store/clickOutside.js";
import App from "./App.vue";

// Связать приложение с переменной и добавить директиву
const app = createApp(App);

app.directive("click-outside", clickOutside);

// Смонтировать приложение
app.mount("#app");
