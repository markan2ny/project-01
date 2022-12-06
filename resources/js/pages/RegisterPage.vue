<template>

    <div class="block xl:w-[25vw] mt-[50px] mx-auto px-4 py-5 shadow-lg">
        <form @submit.prevent="registerHandler">
            <h1 class="text-3xl font-squada bg-gradient-to-tr from-cyan-500 to-pink-500 text-transparent bg-clip-text">
                Register</h1>
            <p v-for="error in errors" :key="error">
                <span v-for="err in error" class="text-red-300">{{ err }}</span>
            </p>
            <input type="text" placeholder="Full Name"
                class="w-full p-2 bg-transparent text-slate-600 border-2 outline-none border-slate-500 mt-[20px]"
                v-model="form.name">
            <input type="email" placeholder="Email Address"
                class="w-full p-2 bg-transparent text-slate-600 border-2 outline-none border-slate-500 mt-[20px]"
                v-model="form.email">
            <input type="password" placeholder="Password"
                class="w-full p-2 bg-transparent  text-slate-600 border-2 outline-none border-slate-500 mt-[20px]"
                v-model="form.password">
            <input type="password" placeholder="Confirm Password"
                class="w-full p-2 bg-transparent  text-slate-600 border-2 outline-none border-slate-500 mt-[20px] mb-[20px]"
                v-model="form.cpassword">
            <button
                class="py-2 px-5 font-bold text-slate-500 hover:text-pink-500 hover:border-pink-500 border-2 uppercase border-slate-500">Sign
                in</button>
        </form>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const router = useRouter();
const errors = ref([]);
let form = reactive({
    name: '',
    email: '',
    password: '',
    cpassword: ''
})

const registerHandler = async () => {
    await axios.post('/api/register', form)
        .then(res => {
            router.push({ name: 'dashboard' })
            localStorage.setItem('token', res.data.data[0]);
        })
        .catch(error => {
            errors.value = error.response.data.message;
        })
}


</script>