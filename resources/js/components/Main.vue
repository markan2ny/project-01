<template>
    <header-component />
    <main class="container mx-auto">
        <router-view />
    </main>
</template>
<script setup>
import { RouterView } from "vue-router";
import HeaderComponent from "./HeaderComponent.vue";
</script>
