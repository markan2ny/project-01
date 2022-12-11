<template>
    <GuestLayout title="Login">
        <form>
            <input type="email" placeholder="Email Address"
                class="w-full p-2 bg-transparent text-slate-600 border-2 outline-none border-slate-500 mt-[20px]" />
            <input type="password" placeholder="Password"
                class="w-full p-2 bg-transparent text-slate-600 border-2 outline-none border-slate-500 mt-[20px] mb-[20px]" />
            <button
                class="py-2 px-5 font-bold text-slate-500 hover:text-pink-500 hover:border-pink-500 border-2 uppercase border-slate-500">
                Sign in
            </button>
        </form>
    </GuestLayout>
</template>

<script setup>

import GuestLayout from "../components/GuestLayout.vue";

const login = () => {
    console.log('HELLO')
}

</script>
