<template>
    <div class="product-list">
        <div class="mt-5 text-center" v-if="loading">
            <v-progress-circular
              :size="70"
              :width="7"
              color="blue"
              indeterminate
            ></v-progress-circular>
        </div>
        <div class="" v-else>
            <ul class="d-flex justify-space-between flex-wrap">
              <TodoItem
                v-for="item in filteredList"
                :key="item.id"
                :item="item"
              />
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
    import TodoItem from '@/components/TodoItem.vue'
    import { getList } from '../hooks/getProductList'

    const props: any = defineProps(['search'])
    const { filteredList, loading } = getList(props)
</script>

<style scoped lang="scss">
    .selected {
        box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5)
    }
</style>
