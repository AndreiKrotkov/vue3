<template>
    <v-row no-gutters class="d-flex justify-center mt-3 mb-5">
        <v-col cols="8" class="d-flex justify-space-between align-center px-5">
            <FiltersBar @setValue="handlerSearch"/>

            <v-btn to="/making_order" :disabled="store.getters.basket.length === 0">
                Корзина: {{ store.getters.basket.length }}
            </v-btn>
        </v-col>
    </v-row>
    <v-row no-gutters class="d-flex justify-center">
        <v-col cols="8">
            <TodoList
                :search="search.value"
            />
        </v-col>
    </v-row>
</template>

<script setup lang="ts">
    import { ref } from 'vue'
    import TodoList from '@/components/TodoList.vue'
    import FiltersBar from '@/components/common/FiltersBar.vue'
    import { useStore } from 'vuex'

    const store = useStore()
    const search = ref('')

    function handlerSearch(value: string) {
        search.value = value
    }

</script>

<style scoped lang="scss">

</style>