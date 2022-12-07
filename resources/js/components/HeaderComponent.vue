<template>
    <header class="py-4 shadow-md w-full z-auto">
        <nav class="flex container mx-auto items-center justify-between">
            <router-link :to="{ name: 'home' }" class="text-3xl font-squada text-slate-600">TEMP</router-link>
            <ul class="flex text-md uppercase text-slate-500">
                <li>
                    <router-link :to="{ name: 'home' }">Home</router-link>
                </li>
                <li class="mx-2" v-if="isLogin == false">
                    <router-link :to="{ name: 'login' }">Login</router-link>
                </li>
                <li v-if="isLogin == false">
                    <router-link :to="{ name: 'register' }">Register</router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>
<script setup>
import { RouterLink } from "vue-router";

const props = defineProps({
    isLogin: {
        type: Boolean,
        default: false,
    }
})
</script>
