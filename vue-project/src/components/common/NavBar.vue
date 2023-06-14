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
                        exact
                        :to="{
                            path: '/product_card',
                            query: { test: 1 }
                        }"
                    >
                        Product card
                    </v-btn>
                    <v-btn
                        exact
                        v-if="isRoleAdmin"
                        :to="{
                            path: '/admin'
                        }"
                    >
                        Admin
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
    import { Roles } from '@/types/roles'
    import { computed } from 'vue'

    const isRoleAdmin = computed(() => {
        // @ts-ignore
        const user = JSON.parse(localStorage.getItem('user'))
        return [Roles.ADMIN].includes(user?.role)
    })

    const logout = () => {
        localStorage.removeItem('user')
        router.push('/auth')
    }
</script>

<style scoped>

</style>