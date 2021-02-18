import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "LoginPage",
    component: () =>
      import(/* webpackChunkName: "loginpage" */ "../views/LoginPage.vue"),
  },
  {
    path: "/dashboard",
    name: "DashboardPage",
    component: () =>
      import(
        /* webpackChunkName: "dashboardpage" */ "../views/DashboardPage.vue"
      ),
    children: [
      {
        path: "/dashboard/home",
        name: "HomePage",
        component: () => import("../views/HomePage.vue"),
      },
    ],
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
