<template>
  <v-dialog
    v-model="props.dialog"
    persistent
    width="560"
  >
    <v-card class="pa-5">
      <v-card-title class="text-center">
        <span class="text-h5">Путевки в санаторий Гулаг отправленны!</span>
      </v-card-title>
      <v-card-actions class="d-flex justify-end mt-3">
        <v-btn
          variant="text"
          @click="fnCloseDialog"
        >
          Забыть пигмеев
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
  import { defineProps, defineEmits } from 'vue'
  const props = defineProps(['dialog'])
  const emit = defineEmits(['closeDialog'])

  const fnCloseDialog = () => {
    emit('closeDialog', false)
  }
</script>

<style scoped lang="scss">

</style>