import { createRouter, createWebHistory } from "vue-router";
import AppLayout from '../components/AppLayout.vue';
import Dashboard from '../pages/authenticated/Dashboard.vue';
import Product from '../pages/authenticated/Product.vue';


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
   path: "/:pathMatch(.*)*",
   component: () => import("../pages/404.vue"),
  },
  {
    path: '/app',
    name:'app',
    component: AppLayout,

    children: [
      {
        path: 'dashboard',
        name: 'dashboard.home',
        component: Dashboard
      },
      {
        path: 'products',
        name: 'dashboard.products',
        component: Product
      }
    ]
  },
];

const router = createRouter({
 history: createWebHistory(),
 routes,
});

// 1
export default router;
