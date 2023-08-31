<template>
  <v-app>
    <NavBar v-if="authUser" />
    <v-main>
      <v-container
        fluid
        class="px-0 py-0 my-0 mx-0"
      >
        <v-layout
          align-center
          justify-center
          class="layout"
        >
          <div v-if="isLoading" class="overlay d-flex justify-center align-center">
            <v-progress-circular
              :size="70"
              :width="7"
              color="purple"
              indeterminate
            />
          </div>
          <v-flex>
            <router-view v-slot="{ Component }">
              <transition name="fade">
                <component :is="Component" />
              </transition>
            </router-view>
          </v-flex>
        </v-layout>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
    import { computed, onMounted } from "vue";
    import router from '@/router/index'
    import { useStore } from 'vuex'
    import NavBar from '@/components/common/NavBar.vue'

    const store = useStore()
    const isLoading = computed(() => {
      return store.state.loading
    })

    const authUser = computed(() => {
      return store.state.user
    })

    onMounted(() => {
      if (!authUser.value) {
          router.push('/auth')
      }
    })
</script>
<style lang="scss">
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

.layout {
  position: relative;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;

    -webkit-backdrop-filter: blur(4px);
    backdrop-filter: blur(4px);
  }
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.1s ease;
}

.v-enter-from,
.v-leave-to {
 display: none;
}
</style>
