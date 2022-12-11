<template>

  <aside class="w-[200px] bg-slate-300 p-2 border">

    <ul>
      <li>
        <RouterLink :to="{ name: 'dashboard.home' }">Dashboard</RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'dashboard.products' }">Products</RouterLink>
      </li>
    </ul>

  </aside>

</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>