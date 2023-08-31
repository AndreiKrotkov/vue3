<template>
  <v-navigation-drawer width="300" color="#5a69de" permanent class="menu">
    <div class="menu__content px-5 pt-13">
      <div class="logo mb-4">
        <img src="src/assets/logo.jpg" alt="logo">
      </div>

      <div class="menu__title mb-8 d-flex flex-column">
        <span> не Личный кабинет </span>
      </div>

      <v-list class="py-0">
        <v-list-item
          v-for="(item, i) in menuItems"
          :key="i"
          :to="item.to"
          exact
          class="menu-item px-1 mb-2"
          @click="handleClick(item)"
        >
          <v-list-item-content class="d-flex align-center py-1">
            <v-icon color="white" :icon="item.icon" class="mr-3"></v-icon>
            <v-list-item-title class="">{{ item.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </div>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
    import router from '@/router/index'
    import { Roles } from '@/types/roles'
    import { computed, ref } from 'vue'
    import { useStore } from 'vuex'

    const store = useStore()
    const menuItems = ref([
      {
        name: 'Сводка',
        to: '/',
        icon: 'mdi-chart-bar'
      },
      {
        name: 'Чаты',
        to: '/chats',
        icon: 'mdi-account-card-outline'
      },
      {
        name: 'Доносы',
        to: '/denunciations',
        icon: 'mdi-account'
      },
      {
        name: 'Запуск бота',
        to: '/bots',
        icon: 'mdi-robot-excited-outline'
      },
      {
        name: 'Выход',
        to: '',
        icon: 'mdi-logout'
      }
    ])

    const isRoleAdmin = computed(() => {
        // @ts-ignore
        const user = JSON.parse(localStorage.getItem('user'))
        return [Roles.ADMIN].includes(user?.role)
    })

    const handleClick = (item: any) => {
      if (item.to) {
        return
      }
      store.commit('setUser', null)
      router.push('/auth')
    }
</script>

<style scoped lang="scss">
.menu {
  max-width: 45rem;

  ::v-deep(.v-navigation-drawer__content) {
    display: flex;
    justify-content: end;
    width: 100%;
  }

  ::v-deep(.v-list-item) {
    min-height: 2.2rem;
  }

  ::v-deep(.v-list-item--link:before) {
    border-radius: 5px;
  }

  .logo {
    width: 100%;
    height: 200px;

    img {
      width: 100%;
      height: auto;
    }
  }

  &__title {
    span {
      font-weight: 500;
      font-size: 1.5rem;
      color: white;
    }
  }

  &__content {
    width: 100%;
  }
  .v-list-item-title {
    font-size: 1.125rem !important;
    font-weight: 300 !important;
    line-height: 1.56rem;
    color: white;
  }
}
</style>