import { createRouter, createWebHistory } from "vue-router";

const routes = [
 {
  path: "/",
  name: "home",
  component: () => import("../pages/HomePage.vue"),
  meta: {
   requireAuth: false,
  },
 },
 {
  path: "/login",
  name: "login",
  component: () => import("../pages/LoginPage.vue"),
  meta: {
   requireAuth: false,
  },
 },
 {
  path: "/register",
  name: "register",
  component: () => import("../pages/RegisterPage.vue"),
  meta: {
   requireAuth: false,
  },
 },
 {
  path: "/dashboard",
  name: "dashboard",
  component: () => import("../pages/admin/DashboardPage.vue"),
  meta: {
   requireAuth: true,
  },
 },
 {
  path: "/:pathMatch(.*)*",
  component: () => import("../pages/404.vue"),
 },
];

const router = createRouter({
 history: createWebHistory(),
 routes,
});

router.beforeEach((to, from) => {
 if (to.meta.requireAuth && !localStorage.getItem("token")) {
  return { name: "login" };
 }
 if (to.meta.requireAuth == false && localStorage.getItem("token")) {
  return { name: "dashboard" };
 }
});

export default router;
