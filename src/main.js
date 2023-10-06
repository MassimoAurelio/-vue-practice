import { createApp } from "vue";
import "./assets/base.css";
import { mask } from "vue-the-mask";
import App from "./App.vue";
import router from "./router";

const app = createApp(App).use(router);

app.directive("mask", mask);

app.mount("#app");
