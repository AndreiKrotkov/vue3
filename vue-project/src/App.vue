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

<!--    <Footer/>-->
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
<style lang="scss" scoped>
.blur {
  position: relative;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    -webkit-backdrop-filter: blur(2px);
    backdrop-filter: blur(2px);
  }
}
.app {
  .v-application--wrap {
    flex-direction: column;

    @media screen and (min-width: 1200px) {
      flex-direction: inherit;
    }
  }
  .container {
    background: #f5f8ff;
    height: 100%;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
