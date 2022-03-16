import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const Search = () =>
  import(/* webpackChunkName: "search" */ "../views/Search.vue");

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/search",
    name: "search",
    component: Search,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior: (to, form, savedPosition) => {
    if (savedPosition) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ ...savedPosition, behavior: "smooth" });
        }, 1000);
      });
    } else {
      return { top: 0, left: 0, behavior: "smooth" };
    }
  },
});

export default router;
