<template>
    <v-row no-gutters class="d-flex justify-center">
        <v-col cols="8">
            <Header :title="title" icon="mdi-account-key" class="my-5" />

            <div class="product-list">
                <div class="product-list__title pb-2">Added product</div>
            </div>

            <FormProduct class="mt-5"/>
        </v-col>
    </v-row>
</template>

<script setup lang="ts">
    import { ref } from 'vue'
    import FormProduct from '@/components/common/FormProduct.vue'
    import Header from '@/components/common/Header.vue'

    const title = ref('AdminKa')
</script>

<style scoped lang="scss">
    .product-list {
        &__title {
            max-width: 30%;
            font-size: 16px;
            border-bottom: 1px solid;
        }
    }
</style>