<template>
  <v-app>
    <NavBar />
    <v-main>
      <v-container
        fluid
        class="px-0 py-0 my-0 mx-0"
      >
        <v-layout
          align-center
          justify-center
        >
          <v-flex>
             <RouterView />
          </v-flex>
        </v-layout>
      </v-container>
    </v-main>

    <Footer/>
  </v-app>
</template>

<script setup lang="ts">
    import NavBar from '@/components/common/NavBar.vue'
    import Footer from '@/components/common/Footer.vue'

    import { computed, onMounted } from "vue";
    import router from '@/router/index'

    const authUser = computed(() => {
        // @ts-ignore
        return JSON.parse(localStorage.getItem('user'))
    })

    onMounted(() => {
        if (!authUser.value) {
            router.push('/auth')
        }
    })
</script>
<style>

</style>
