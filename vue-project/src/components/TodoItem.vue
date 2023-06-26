<template>
    <li class="list-item d-flex flex-column justify-space-between">
        <div>
            <div class="image">
                <img :src="localItem.image" alt="img">
            </div>
            <div class="desc my-4">
                <span>{{ localItem.title }}</span>
            </div>
        </div>

        <div class="rating d-flex justify-space-between align-center px-4">
            <div class="info d-flex flex-column">
                <span>Price: {{ localItem.rating.count }} $</span>
                <span v-if="totalPrice !== 0">Total: {{ totalPrice }} $</span>
            </div>

            <div class="action">
                <v-btn v-if="isBuy" @click="fnBuy">
                    Buy
                </v-btn>

                <div v-else class="">
                    <v-btn variant="plain" @click="fnCounterMinus">
                        <v-icon icon="mdi-minus"></v-icon>
                    </v-btn>

                    {{ counter }}

                    <v-btn variant="plain" @click="fnCounterPlus">
                        <v-icon icon="mdi-plus"></v-icon>
                    </v-btn>
                </div>
            </div>
        </div>
    </li>
</template>

<script setup lang="ts">
    import { ref, computed } from 'vue'
    import { useStore } from 'vuex'

    const store = useStore()
    const props = defineProps(['item'])

    const isBuy = ref(true)
    const counter = ref(0)
    const localItem = ref({ ...props.item })
    const totalPrice = computed(() => {
        return localItem.value.rating.count * localItem.value.counter || 0
    })

    const fnBuy = () => {
        counter.value++
        localItem.value.counter = counter.value
        store.commit('setPurchasedGoods', localItem.value)
        isBuy.value = false
    }

    const fnCounterMinus = () => {
        counter.value--
        localItem.value.counter = counter.value
        store.commit('updatePurchasedGoods', localItem.value)

        if (counter.value === 0) {
            isBuy.value = true
        }
    }

    const fnCounterPlus = () => {
        counter.value++
        localItem.value.counter = counter.value
        store.commit('updatePurchasedGoods', localItem.value)
    }
</script>

<style scoped lang="scss">
    .list-item {
        width: 32%;
        list-style-type: none;
        border-radius: 8px;
        background-color: white;
        margin-bottom: 20px;
        padding: 1.5rem;
        cursor: pointer;

        .image {
            width: 120px;
            height: 120px;
            margin: 0 auto;

            img {
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
        }
        .desc {
            padding: 0 20px;
            text-align: center;

            span {

            }
        }
        .rating {
            span {
                color: black
            }
        }
    }
</style>