<template>
    <v-row no-gutters class="d-flex justify-center">
        <v-col cols="6">
            <Header :title="title" class="my-5" />
            <div class="text-center">
                <img src="src/assets/otus_scops_tunka.jpg" alt="otus">
            </div>
        </v-col>
    </v-row>
</template>

<script setup lang="ts">
    import { ref } from 'vue'
    import Header from '@/components/common/Header.vue'

    const title = ref('Welcome!')
</script>

<style scoped lang="scss">

</style>

