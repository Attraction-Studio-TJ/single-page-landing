<template>
    <div class="mx-auto container">
        <h1>{{ title }}</h1>
        <h3><slot name="subtitle" mdc-unwrap="p"/></h3>
        <p><slot name="description"/></p>
        
    </div>
</template>

<script setup lang="ts">
interface Props {
    title: string
    description: string
}

const props = defineProps<Props>()

</script>
