import { createRouter, createWebHistory } from "vue-router";
import Transform from "../views/Transform.vue";

const routes = [
  {
    path: "/",
    name: "transition",
    component: Transform,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
