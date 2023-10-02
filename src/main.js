import { createApp } from "vue";
import "./assets/base.css";
import clickOutside from "./utils/clickOutside.js";
import { mask } from "vue-the-mask";
import App from "./App.vue";

const app = createApp(App);

app.directive("click-outside", clickOutside);
app.directive("mask", mask);


app.mount("#app");
