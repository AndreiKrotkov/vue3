<template>
  <v-row no-gutters class="d-flex justify-center">
    <v-col cols="8">
      <div class="d-flex justify-space-between align-center">
        <div class="d-flex align-center">
          <Header :title="title" icon="mdi-message" class="my-5 mr-2" />
          <span>+ {{ counter }}</span>
        </div>
        <v-btn @click="fnShowDialog">
          Похвалить всех
        </v-btn>
      </div>

      <List :personList="personList" />
    </v-col>

    <Dialog v-if="dialog" :dialog="dialog" @closeDialog="fnCloseDialog"/>
  </v-row>
</template>

<script setup lang="ts">
  import { ref, onMounted, computed } from 'vue'
  import Header from '@/components/common/Header.vue'
  import List from '@/components/denunciations/denunciationsList.vue'
  import Dialog from '@/components/denunciations/dialog.vue'
  import { useStore } from 'vuex'

  const store = useStore()
  const title = ref('Доносы сегодня')
  const dialog = ref(false)
  const counter = ref(21)

  const personList = ref([
    {
      name: 'Вера Доносовна',
      text: 'Представляете, соседка с 5 этажа Томарка, курит и ходит в юбке! Это все тлетворное влияние запада! Я вам говорю!'
    },
    {
      name: 'Валентин Алексеевич',
      text: 'Настоящим доношу вам неподобающем поведении гражданина - Сердюкова Андреанна Патриотовича. Жрет красную икру и не краснеет'
    },
    {
      name: 'Киркоров',
      text: 'Настоящим доношу до вашего сведения - Панин все врет! Не виноватая я'
    },
    {
      name: 'Николай Подставочкин',
      text: 'Это безобразие! В нашем подъезде опять напрудили в лифте. Это все Бэйдон этот акаяный. Примите меры'
    },
    {
      name: 'Медведев',
      text: 'Цены на алкоголь просто кошмар!'
    }
  ])

  const fnShowDialog = () => {
    dialog.value = true
  }

  const fnCloseDialog = (state: boolean) => {
    dialog.value = state
  }

  const fnPraise = () => {
    console.log('все похвалены')
  }

  onMounted(() => {
    store.commit('setLoading', true)

    setTimeout(() => {
      store.commit('setLoading', false)
    }, 700)

    setInterval(() => {
      counter.value++
    }, 700)
  })

</script>

<style scoped>

</style>