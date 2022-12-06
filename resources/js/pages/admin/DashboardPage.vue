<template>

    <div>
        <sidebar-page>
            <button @click="logout">Logout</button>
        </sidebar-page>
        <section>

        </section>
    </div>


</template>

<script setup>
import { useRouter } from 'vue-router';
import SidebarPage from './SidebarPage.vue';
const router = useRouter();

const logout = () => {
    localStorage.removeItem('token');
    router.push({ name: 'home' })
}
</script>