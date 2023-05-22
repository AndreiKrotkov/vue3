<template>
  <v-footer class="py-3 footer" app>
    <v-row justify="center" no-gutters>
      <v-col class="text-center">
        {{ new Date().getFullYear() }} — <strong>K.A.M</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script setup lang="ts">

</script>

<style scoped>
  .footer {
    border-top: 1px solid #bebcbc;
  }
</style>