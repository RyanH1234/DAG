import Vue from 'vue'
import VueRouter from 'vue-router'

import Menu from "../components/menu/Menu";
import Dashboard from "../components/game/Dashboard";
import Admin from "../components/admin/Admin";

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
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin
  }
];

const router = new VueRouter({
  routes
})

export default router;