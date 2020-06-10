import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("../layouts/MainLayout.vue"),
    children: [
      {
        path: "/",
        component: () => import("../views/Main.vue"),
        name: "first",
      },
      {
        path: "verification",
        component: () => import("../views/Verification.vue"),
        name: "second",
      },
      {
        path: "validation",
        component: () => import("../views/Validation.vue"),
        name: "third",
      },
    ],
  },
  {
    path: "/auth",
    component: () => import("../layouts/AuthLayout.vue"),
    children: [
      { path: "login", component: () => import("../views/auth/Login.vue") },
      {
        path: "register",
        component: () => import("../views/auth/Register.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
