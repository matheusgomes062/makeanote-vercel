import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home/Home.vue";
import Atividade2 from "../views/Atividade2/Atividade2.vue";
import Atividade3 from "../views/Atividade3/Atividade3.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/Atividade2",
    name: "Atividade2",
    component: Atividade2
  },
  {
    path: "/Atividade3",
    name: "Atividade3",
    component: Atividade3
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
