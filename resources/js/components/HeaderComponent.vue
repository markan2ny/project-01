<template>
    <header>
        <nav>
            <router-link :to="{ name: 'home' }">LOGO</router-link>
            <ul>
                <li>
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
