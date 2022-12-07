<template>
    <aside
        class="w-[150px] h-[80vh] shadow-md relative bg-gradient-to-br from-cyan-400 to-pink-400 rounded-md overflow-hidden">
        <div class="flex flex-col items-center py-10 h-full">
            <router-link :to="{ name: 'dashboard' }" class="font-squada text-4xl text-white">LOGO</router-link>
            <ul class="grow mt-10 text-white">
                <li>
                    <router-link to="#">Employee</router-link>
                </li>
                <li>
                    <router-link to="#">Employee</router-link>
                </li>
                <li>
                    <router-link to="#">Employee</router-link>
                </li>
            </ul>
            <logout-button />
        </div>
    </aside>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import LogoutButton from '../../components/LogoutButton.vue';

const props = defineProps([''])

</script>