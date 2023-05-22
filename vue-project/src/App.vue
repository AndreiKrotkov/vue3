<script setup lang="ts">
import NavBar from '@/components/common/NavBar.vue'
import Footer from '@/components/common/Footer.vue'
</script>

<template>
  <v-app>
    <NavBar />
    <v-main>
      <v-container
        fluid
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

<style>

</style>
