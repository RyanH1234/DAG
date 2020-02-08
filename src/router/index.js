import Vue from 'vue'
import VueRouter from 'vue-router'

import Menu from "../components/menu/Menu";
import Dashboard from "../components/Dashboard";

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Menu",
    component: Menu
  },
  {
    path: "/dash",
    name: "Dashboard",
    component: Dashboard
  }
];

const router = new VueRouter({
  routes
})

export default router;