<template>
    <v-row no-gutters class="d-flex justify-center">
        <v-col cols="6">
            <Header :title="title" icon="mdi-order-numeric-ascending" class="my-5" />

            <div class="product-list">
                <v-col cols="12" class="d-flex justify-end px-0 py-0">
                    <v-btn @click="clearBasket">
                        Clear basket
                    </v-btn>
                </v-col>
                <div class="product-list__title mb-3">Products:</div>

                <div class="d-flex flex-wrap">
                    <v-col cols="4" class="" v-for="item in store.getters.basket" :key="item.id">
                        <div class="d-flex flex-column pb-2 mb-4">
                            <span>title: {{ item.title }}</span>
                            <span>value: {{ item.counter }}</span>
                            <span>total: {{ item.rating.count * item.counter }} $</span>
                        </div>
                    </v-col>
                </div>

                <v-divider></v-divider>
            </div>

            <Form class="mt-5"/>
        </v-col>
    </v-row>
</template>

<script setup lang="ts">
    import { ref } from 'vue'
    import { useStore } from 'vuex'
    import Form from '@/components/common/Form.vue'
    import Header from '@/components/common/Header.vue'

    const store = useStore()
    const title = ref('Making order')

    const clearBasket = () => {
        store.commit('clearBasket')
    }
</script>

<style scoped lang="scss">
    .product-list {
        &__title {
            font-size: 16px;
        }
    }
</style>