<template>
    <li class="list-item d-flex flex-column justify-space-between">
        <div>
            <div class="image">
                <img :src="props.item.image" alt="img">
            </div>
            <div class="desc my-4">
                <span>{{ props.item.title }}</span>
            </div>
        </div>

        <div class="rating d-flex justify-space-between align-center px-4">
            <span>Price: {{ props.item.rating.count }} $</span>
            <v-btn @click="fnAddBasket">
                Buy
            </v-btn>
        </div>
    </li>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue'
    const props = defineProps(['item'])
    const emit = defineEmits()
    const fnAddBasket = () => {
        emit('add-item-basket', props.item.id)
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