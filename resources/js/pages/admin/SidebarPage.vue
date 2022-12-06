<template>
    <aside>
        <p>{{ title }}</p>
        <slot />
    </aside>
</template>

<script setup>

const props = defineProps({
    title: {
        type: String,
        default: 'No title'
    }
})

</script>