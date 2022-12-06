<template>

    <div>
        <aside>
            <button @click="logout">Logout</button>
        </aside>
        <section>

        </section>
    </div>


</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const logout = () => {
    localStorage.removeItem('token');
    router.push({ name: 'home' })
}
</script>