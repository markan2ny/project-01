import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "home",
        component: () => import("../pages/HomePage.vue"),
    },
    {
        path: "/products",
        name: "products",
        component: () => import("../pages/ProductPage.vue"),
    },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});
