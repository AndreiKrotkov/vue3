<template>
    <div class="product-list">
        <div class="mt-5 text-center" v-if="store.state.loading">
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
    import {Url} from '@/enum/enum'
    import $http from '@/api/http'
    import { ref, onMounted, computed, defineEmits } from 'vue'
    import { useStore } from 'vuex'

    const props: any = defineProps(['search'])
    const store = useStore()

    const productsList: any = ref([])
    const loading: any = ref(false)
    const filteredList: any = computed(() => {
        const search: string = props.search || '';
        return search ? productsList.value.filter(function (elem: any) {
            if(search === '') return true;
            else return elem.title.indexOf(search) > -1;
        }) : productsList.value

    })
    const fnGetProductList = () => {
        store.commit('setLoading', true)

        loading.value = true
        $http.get(Url.productList).then((resp: any) => {
            productsList.value = resp.data

            store.commit('setLoading', false)
        }).catch((err: any) => err)
    }

    onMounted(fnGetProductList)
</script>

<style scoped lang="scss">
    .selected {
        box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5)
    }
</style>
