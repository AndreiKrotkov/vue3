<template>
  <div>
    <v-expansion-panels>
      <v-expansion-panel
        v-for="(item, i) in personList"
        :key="i"
        :title="item.name"
        :text="item.text"
      ></v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps(['personList'])
</script>

<style scoped lang="scss">

</style>