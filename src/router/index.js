import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import Footer from "../components/Footer.vue";
import NavBar from "../components/NavBar.vue";
import List from "../components/List.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/navbar",
    name: "navbar",
    component: NavBar,
  },
  {
    path: "/Footer",
    name: "Footer",
    component: Footer,
  },
  {
    path: "/list",
    name: "List",
    component: List,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
