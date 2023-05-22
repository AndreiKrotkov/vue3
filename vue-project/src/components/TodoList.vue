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
  import { ref, computed } from 'vue'
  import TodoItem from '@/components/TodoItem.vue'
  import { Url } from '@/enum/enum'
  import $http  from '@/api/http'

  let dataProducts: any = ref([])
  const open: any = ref(['Users'])
  const products = computed(() => dataProducts.value)

  $http.get(Url.todoLis).then((resp: any) => {
    dataProducts.value = resp.data
  }).catch((err: any) => err)
</script>

<style scoped>

</style>
