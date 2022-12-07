<template>
    <button @click.prevent="logout"
        class="border-none py-5 px-4 absolute bottom-0 w-full bg-gradient-to-tr from-cyan-500 to-pink-500 text-white ">Logout</button>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()

const logout = () => {
    localStorage.removeItem('token')
    router.push({ name: 'home' })
}
</script>