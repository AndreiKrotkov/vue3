<template>
  <header>
    <div class="wrapper">
      {{ props.title }}
    </div>
  </header>
</template>

<script setup lang="ts">
    const props = defineProps(['title'])
</script>

<style scoped>

</style>