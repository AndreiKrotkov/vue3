<template>
    <div class="">
        <template v-if="!isValidForm">
            <v-form v-model="valid">
                <div class="d-flex align-center">
                    <div class="form-input px-0 mr-3">
                      <v-text-field
                        v-model="title"
                        :rules="titleRules"
                        label="Title product"
                        required
                      ></v-text-field>
                    </div>

                    <div class="form-input px-0 mr-3">
                      <v-text-field
                        v-model="price"
                        :rules="priceRules"
                        label="Price product"
                        required
                      ></v-text-field>
                    </div>
                </div>

                <div class="d-flex">
                    <v-btn @click="fnSubmit" class="my-1 mx-1" :disabled="!valid">Добавить</v-btn>
                </div>
            </v-form>
        </template>
        <template v-else>
            <TodoItem
                :item="productCard"
            />

            <span>Карточка продукта добавленна!</span>
        </template>
    </div>
</template>

<script setup lang="ts">
    import TodoItem from '@/components/TodoItem.vue'
    import { reactive, ref } from 'vue'
    const valid = ref(false)
    const isValidForm = ref(false)
    const title = ref('')
    const price = ref('')

    const productCard = ref({
        id: Math.floor(Math.random() * 10),
        title: '',
        rating: {
            count: ''
        },
        image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'
    })

    const titleRules = ref([
        (value: any) => {
            if (value) return true
            return 'Title product is requred.'
        }
    ])
    const priceRules = ref([
        (value: any) => {
            if (value) return true
                return 'Price is requred.'
        },
        (value: any) => {
            if (/^\d+$/.test(value)) return true
                return 'Price product must be number.'
        }
    ])

    const fnSubmit = () => {
        if (valid.value) {
            productCard.value.rating.count = price.value
            productCard.value.title = title.value
            isValidForm.value = true
        }
    }
</script>

<style scoped lang="scss">
    .form-input {
        width: 30%;
    }
</style>