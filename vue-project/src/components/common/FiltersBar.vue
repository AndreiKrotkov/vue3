<template>
    <v-text-field class="search" @input="handlerSearch" v-model="search" clearable hide-details label="Search"></v-text-field>
</template>

<script setup lang="ts">
    import { ref } from 'vue'

    const search = ref('')
    const emit = defineEmits()

    const handlerSearch = () => {
         emit('set-value', search)
    }
</script>

<style scoped lang="scss">
    .search {
        max-width: 40%;
    }
</style>