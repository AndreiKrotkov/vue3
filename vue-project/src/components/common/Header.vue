<template>
  <header>
    <div class="header d-flex align-center pb-1">
        <v-icon :icon="props.icon" size="x-large" class="mr-3"></v-icon>

        <h1>{{ props.title }}</h1>
    </div>
  </header>
</template>

<script setup lang="ts">
    const props = defineProps(['title', 'icon'])
</script>

<style scoped lang="scss">
    .header {
        border-bottom: 1px solid black;
    }
</style>