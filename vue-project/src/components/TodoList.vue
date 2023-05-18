<template>
  <v-row no-gutters class="d-flex justify-center">
    <v-col cols="6">
      <v-list v-model:opened="open">
        <v-list-group>
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              prepend-icon="mdi-account-circle"
              title="Products"
            />
          </template>

          <TodoItem
            v-for="item in products"
            :key="item.id"
            :title="item.title"
            :value="item.title"
          />
        </v-list-group>
      </v-list>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
  import axios from 'axios'
  import { ref, computed } from 'vue'
  import TodoItem from '@/components/TodoItem.vue'

  let dataProducts: any = ref([])
  const open: any = ref(['Users'])
  const products = computed(() => dataProducts.value)

  axios.get('https://fakestoreapi.com/products').then((resp: any) => {
    dataProducts.value = resp.data
    console.log('resp', resp.data)
  }).catch((err: any) => err)
</script>

<style scoped>

</style>
