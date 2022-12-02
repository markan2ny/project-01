<template>
    <div class="flex items-center flex-col h-screen mt-[200px]">
        <h1 class="text-5xl font-squada text-slate-500">404 NOT FOUND</h1>
        <p class="mt-5 text-slate-600 text-lg">Go back to <router-link :to="{ name: 'home' }"
                class="uppercase">Home</router-link></p>
    </div>
</template>
<script setup>
import { RouterLink } from 'vue-router';
</script>
