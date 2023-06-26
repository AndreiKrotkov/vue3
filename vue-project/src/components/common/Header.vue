<template>
  <header>
    <div class="header d-flex align-center px-2">
        <v-icon :icon="props.icon" size="x-large" class="mr-2"></v-icon>

        <h1>{{ props.title }}</h1>
    </div>
  </header>
</template>

<script setup lang="ts">
    const props = defineProps(['title', 'icon'])
</script>

<style scoped lang="scss">
    .header {
      width: fit-content;
        border-bottom: 1px solid black;
    }
</style>