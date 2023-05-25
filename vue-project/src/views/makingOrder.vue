<template>
    <v-row no-gutters class="d-flex justify-center">
        <v-col cols="6">
            <Header :title="title" class="my-5" />
            <Form />
        </v-col>
    </v-row>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Form from '@/components/common/Form.vue'
import Header from '@/components/common/Header.vue'
    const title = ref('Welcome to checkout')
</script>

<style scoped lang="scss">

</style>