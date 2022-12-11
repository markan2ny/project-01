<template>
  <div class="block xl:w-[25vw] mt-[50px] mx-auto px-4 py-5 shadow-lg">
    <h1 class="text-3xl font-squada bg-gradient-to-tr from-cyan-500 to-pink-500 text-transparent bg-clip-text">
      {{ title }}
    </h1>
    <slot></slot>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import axios from "axios";
import { useRouter } from 'vue-router';

const emit = defineEmits(['submitHandler'])

const { title } = defineProps({
  title: String
})



</script>