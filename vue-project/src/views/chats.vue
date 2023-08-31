<template>
  <v-row no-gutters class="d-flex justify-center">
    <v-col cols="8">
      <div class="d-flex justify-space-between align-center my-5">
        <Header :title="title" icon="mdi-account-eye" />

        <v-btn @click="fnShowDialog">
          Сообщить куда следует
        </v-btn>
      </div>

      <v-card>
        <v-tabs
          v-model="tab"
          bg-color="#5A69DE"
          color="white"
        >
          <v-tab value="vk">VK</v-tab>
          <v-tab value="odnk">Одноклассники</v-tab>
          <v-tab value="tg">Telegram</v-tab>
        </v-tabs>

        <v-card-text>
          <v-window v-model="tab">
            <v-window-item value="vk">
              <div class="chat">
                <img src="src/assets/vk-chat.jpg" alt="vk">
              </div>
            </v-window-item>

            <v-window-item value="odnk">
              <div class="chat">
                <img src="src/assets/odkl-chat.png" alt="odnk">
              </div>
            </v-window-item>

            <v-window-item value="tg">
              <div class="chat">
                <span>Пока не доступно. Пока...</span>
              </div>
            </v-window-item>
          </v-window>
        </v-card-text>
      </v-card>
    </v-col>

    <Dialog v-if="dialog" :dialog="dialog" @closeDialog="fnCloseDialog"/>
  </v-row>
</template>

<script setup lang="ts">
  import { ref, onMounted, computed } from 'vue'
  import Header from '@/components/common/Header.vue'
  import Dialog from '@/components/chats/dialog.vue'
  import { useStore } from 'vuex'

  const store = useStore()

  const dialog = ref(false)
  const tab = ref(null)
  const title = ref('Слежка за народом')

  const fnShowDialog = () => {
    dialog.value = true
  }

  const fnCloseDialog = (state: boolean) => {
    dialog.value = state
  }

  onMounted(() => {
    store.commit('setLoading', true)

    setTimeout(() => {
      store.commit('setLoading', false)
    }, 700)
  })
</script>

<style scoped lang="scss">
  .chat {
    text-align: center;
    img {
    }
  }

</style>