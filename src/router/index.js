import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home/Home.vue";
import Atividade2 from "../views/Atividade2/Atividade2.vue";
import Atividade3 from "../views/Atividade3/Atividade3.vue";
import home from "../views/Atividade3/Pages/home.vue";
import ofertas from "../views/Atividade3/Pages/ofertas.vue";
import lancamentos from "../views/Atividade3/Pages/lancamentos.vue";
import snkrs from "../views/Atividade3/Pages/snkrs.vue";
import masculino from "../views/Atividade3/Pages/masculino.vue";
import feminino from "../views/Atividade3/Pages/feminino.vue";
// import { component } from "vue/types/umd";

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
    component: Atividade3,
    children: [
      { path: "home", component: home },
      { path: "ofertas", component: ofertas },
      { path: "lancamentos", component: lancamentos },
      { path: "snkrs", component: snkrs },
      { path: "masculino", component: masculino },
      { path: "feminino", component: feminino }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
