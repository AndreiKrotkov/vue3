<template>
  <v-row no-gutters class="d-flex justify-center">
    <v-col cols="8">
      <div>
        <div class="d-flex align-center mt-5">
          <Header :title="title" icon="mdi-message" class="mr-15" />

          <div class="d-flex align-center">
            <v-switch
              v-model="model"
              inset
              :label="`Бот: ${model.toString()}`"
              class="mt-2 mr-2"
              hide-details
            />
            <v-progress-circular
              v-if="loading"
              color="#5A69DE"
              indeterminate
            />
          </div>
        </div>

        <div class="report-container">
          Генерация хвалебных отзывов - {{ counter }}
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
  import { ref, reactive, watch } from 'vue'
  import Header from '@/components/common/Header.vue'
  import { useStore } from 'vuex'

  const store = useStore()
  const title = ref('Запуск бота')
  const model = ref(false)
  const loading = ref(false)
  const counter = ref(0)
  let interval = ref(null)

  const messageList = reactive([])

  watch(model, (modelX) => {
    loading.value = true

    setTimeout(() => {
      loading.value = false
    }, 1000)

    if (modelX) {
      interval = setInterval(() => {
        counter.value++
      }, 700)
    } else {
      clearInterval(interval)
    }
  })
</script>

<style scoped>

</style>