<template>

  <div class="flex mt-[50px] gap-x-5">

    <Sidebar />

    <main class="border bg-slate-200 grow shadow-md p-2">
      <RouterView />
    </main>

  </div>


</template>

<script setup>
import Sidebar from './Sidebar.vue';
import { RouterView } from 'vue-router';
</script>
