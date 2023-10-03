import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("./components/MainTable.vue"),
  },
  {
    path: "/reference",
    name: "Reference",
    component: () => import("./components/ReferenceCurrencies.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes,
});

export default router;
