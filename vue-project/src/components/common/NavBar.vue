<template>
  <v-navigation-drawer width="20%" permanent class="menu">
    <div class="menu__content px-5 pt-13">
      <div class="logo mb-6">
<!--        <img :src="require('~/static/logo.svg')" alt="" />-->
      </div>

      <div class="menu__title mb-8">
        <span style="color: red">Otus</span>
      </div>

      <v-list class="py-0">
        <v-list-item
          v-for="(item, i) in menuItems"
          :key="i"
          :to="item.to"
          exact
          class="px-1 mb-2"
          @click="handleClick(item)"
        >
          <v-list-item-action class="mr-5 my-0">
<!--            <img-->
<!--              :src="-->
<!--                item.icon-->
<!--                  ? require(~/components/common/Menu/icons/${item.icon}.svg)-->
<!--                  : ''-->
<!--              "-->
<!--            />-->
          </v-list-item-action>
          <v-list-item-content class="py-1">
            <v-list-item-title>{{ item.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </div>
  </v-navigation-drawer>
<!--    <v-app-bar-->
<!--        color="gray"-->
<!--    >-->
<!--        <v-row no-gutters class="justify-center">-->
<!--            <v-col cols="10" class="d-flex justify-space-between">-->
<!--                <v-toolbar-title>OTUS learning</v-toolbar-title>-->

<!--                <div class="">-->
<!--                    <v-btn to="/">Home</v-btn>-->
<!--                    <v-btn-->
<!--                        exact-->
<!--                        :to="{-->
<!--                            path: '/product_card',-->
<!--                            query: { test: 1 }-->
<!--                        }"-->
<!--                    >-->
<!--                        Product card-->
<!--                    </v-btn>-->
<!--                    <v-btn-->
<!--                        exact-->
<!--                        v-if="isRoleAdmin"-->
<!--                        :to="{-->
<!--                            path: '/admin'-->
<!--                        }"-->
<!--                    >-->
<!--                        Admin-->
<!--                    </v-btn>-->
<!--                </div>-->
<!--  -->
<!--                <v-btn>-->
<!--                    <v-icon @click="logout" icon="mdi-logout"></v-icon>-->
<!--                </v-btn>-->
<!--            </v-col>-->
<!--        </v-row>-->
<!--    </v-app-bar>-->
</template>

<script setup lang="ts">
    import router from '@/router/index'
    import { Roles } from '@/types/roles'
    import { computed, ref } from 'vue'

    const menuItems = ref([
      {
        name: 'Активность',
        to: '/activity'
      },
      {
        name: 'Персонал',
        to: '/staff'
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
      localStorage.removeItem('user')
      router.push('/auth')
    }
</script>

<style scoped lang="scss">
.v-navigation-drawer {
  border-radius: 0 1.25rem 1.25rem 0;
  background-color: #5a69de !important;
}

.menu {
  max-width: 40rem;

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

  &__title {
    span {
      font-weight: 500;
      font-size: 1.5rem;
      color: white;
    }
  }

  &__content {
    width: 100%;
    max-width: 16.5rem;
  }
  .v-list-item__title {
    font-size: 1.125rem !important;
    font-weight: 300 !important;
    line-height: 1.56rem;
    color: white;
  }
}
</style>