<template>
    <div class="block xl:w-[25vw] mt-[50px] mx-auto px-4 py-5 shadow-lg">
        {{ form }}
        <p v-if="(error.length > 0)">{{ error }}</p>
        <form @submit.prevent="loginHandler">
            <h1 class="text-3xl font-squada bg-gradient-to-tr from-cyan-500 to-pink-500 text-transparent bg-clip-text">
                Login
            </h1>
            <input type="email" placeholder="Email Address"
                class="w-full p-2 bg-transparent text-slate-600 border-2 outline-none border-slate-500 mt-[20px]"
                v-model="form.email" />
            <input type="password" placeholder="Password"
                class="w-full p-2 bg-transparent text-slate-600 border-2 outline-none border-slate-500 mt-[20px] mb-[20px]"
                v-model="form.password" />
            <button
                class="py-2 px-5 font-bold text-slate-500 hover:text-pink-500 hover:border-pink-500 border-2 uppercase border-slate-500">
                Sign in
            </button>
        </form>
    </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import axios from "axios";
import { useRouter } from 'vue-router';

const router = useRouter();
// composition api
let form = reactive({
    email: "",
    password: "",
});

let error = ref({});
const loginHandler = async () => {
    await axios
        .post("/api/login", form)
        .then((res) => {

            if (res.data.success) {
                // Stored token to localstorage
                console.log(res.data)
                localStorage.setItem("token", res.data.data[0]);
                router.push({ name: 'dashboard' })
            }
            if (!res.data.success) {
                error.value = res.data.message
            }
        })
};
</script>
