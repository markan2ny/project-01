<template>
  <div class="block xl:w-[25vw] mt-[50px] mx-auto px-4 py-5 shadow-lg">
    <h1 class="text-3xl font-squada bg-gradient-to-tr from-cyan-500 to-pink-500 text-transparent bg-clip-text">
      {{ title }} - {{ !subTitle ? 'd' : subTitle }}
    </h1>
    <slot></slot>
  </div>
</template>

<script setup>

const { title } = defineProps({
  title: String,
})

</script>