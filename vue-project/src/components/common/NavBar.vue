<template>
    <v-app-bar
        color="gray"
    >
        <v-row no-gutters class="justify-center">
            <v-col cols="10" class="d-flex justify-space-between">
                <v-toolbar-title>OTUS learning</v-toolbar-title>

                <div class="">
                    <v-btn to="/">Home</v-btn>
                    <v-btn
                        :to="{
                            path: '/product_card',
                            query: { test: 1 }
                        }"
                    >
                        Product card
                    </v-btn>
                </div>
                <v-btn>
                    <v-icon @click="logout" icon="mdi-logout"></v-icon>
                </v-btn>
            </v-col>
        </v-row>
    </v-app-bar>
</template>

<script setup lang="ts">
    import router from '@/router/index'

    const logout = () => {
        localStorage.removeItem('user')
        router.push('/auth')
    }
</script>

<style scoped>

</style>