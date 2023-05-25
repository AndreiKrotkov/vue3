<template>
    <main>
        <v-row no-gutters class="d-flex justify-center mt-3 mb-5">
            <v-col cols="8" class="d-flex justify-space-between align-center px-5">
                <FiltersBar @setValue="handlerSearch"/>

                <v-btn to="/making_order" :disabled="disabledBtn">
                    Корзина: {{ basket.value?.length || 0 }}
                </v-btn>
            </v-col>
        </v-row>
        <v-row no-gutters class="d-flex justify-center">
            <v-col cols="8">
                <TodoList
                    :search="search.value"
                    @add-basket="addBasket"
                />
            </v-col>
        </v-row>
    </main>
</template>

<script setup lang="ts">
    import { ref, computed } from 'vue'
    import TodoList from '@/components/TodoList.vue'
    import FiltersBar from '@/components/common/FiltersBar.vue'

    const search = ref('')
    let basket = ref([])
    let disabledBtn = computed(() => {
        return basket.value.length === 0
    })

    function handlerSearch(value: string) {
        search.value = value
    }

    function addBasket(value: []) {
        console.log(value)
        basket.value = value
    }
</script>

<style scoped lang="scss">

</style>

