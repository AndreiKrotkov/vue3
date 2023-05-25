<template>
  <ul class="d-flex justify-space-between flex-wrap">
      <TodoItem
        v-for="item in filteredList"
        :key="item.id"
        :item="item"
        :class="selectedItems.indexOf(item.id) > -1 ? 'selected' : ''"
        @add-item-basket="fnHandlerAddBasket"
      />
  </ul>
</template>
<script setup lang="ts">
    import TodoItem from '@/components/TodoItem.vue'
    import {Url} from '@/enum/enum'
    import $http from '@/api/http'
    import { ref, onMounted, computed, defineEmits } from 'vue'

    const props: any = defineProps(['search'])

    let productsList: any = ref([])
    let selectedItems: any = ref([])
    let emit: any = defineEmits()

    const filteredList: any = computed(() => {
        const search: string = props.search || '';
        return productsList.value.filter(function (elem: any) {
            if(search === '') return true;
            else return elem.title.indexOf(search) > -1;
        })
    })

    const fnGetCompositionData = () => {
        $http.get(Url.productList).then((resp: any) => {
            productsList.value = resp.data
        }).catch((err: any) => err)
    }

    onMounted(fnGetCompositionData)

    const fnHandlerAddBasket = (id: number) => {
        if (selectedItems.value.includes(id)) {
          selectedItems.value = selectedItems.value.filter((selectedKeyID: any) => selectedKeyID !== id
          )
        } else {
          selectedItems.value.push(id)
        }

        emit('add-basket', selectedItems)
    }
</script>

<style scoped lang="scss">
    .selected {
        box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5)
    }
</style>
