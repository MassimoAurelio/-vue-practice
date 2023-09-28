import "./assets/base.css";
import GlobalStyles from "./components/GlobalStyles.vue";
import { createApp } from "vue";
import ClickAway from "vue3-click-away";
import clickOutside from "./utils/clickOutside.js";

import App from "./App.vue";

const app = createApp(App);

app.directive("click-outside", clickOutside);


app.mount("#app");
