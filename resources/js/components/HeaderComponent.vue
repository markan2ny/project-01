<template>
    <header class="py-4 shadow-md">
        <nav class="flex container mx-auto items-center justify-between">
            <router-link
                :to="{ name: 'home' }"
                class="text-3xl font-squada text-slate-600"
                >LARAVEL + VUE</router-link
            >
            <ul class="flex text-md uppercase text-slate-500">
                <li class="mr-3">
                    <router-link :to="{ name: 'home' }">Home</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'products' }"
                        >Product</router-link
                    >
                </li>
            </ul>
        </nav>
    </header>
</template>
<script setup>
import { RouterLink } from "vue-router";
</script>
