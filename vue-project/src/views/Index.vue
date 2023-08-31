<template>
  <v-row no-gutters class="d-flex justify-center">
    <v-col cols="8">
      <Header :title="title" icon="mdi-chart-arc" class="my-5" />
      <div class="subtitle-chart">
        <span>Волнения в народе</span>
      </div>

      <Bar
        id="my-chart-id"
        :options="chartOptions"
        :data="chartData"
        class="mb-5"
      />

      <div class="subtitle-chart">
        <span>Шалости Байдена</span>
      </div>

      <Bar
        id="my-chart-id1"
        :options="chartOptions"
        :data="chartDataByiden"
      />
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
  import { ref, onMounted, computed } from 'vue'
  import Header from '@/components/common/Header.vue'
  import { Bar } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
  import { useStore } from 'vuex'

  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

  const store = useStore()
  const title = ref('Краткая сводка положений дел')

  const chartData = ref({
    labels: [ 'Средний класс', 'Низший класс', 'Планктон', 'Патриоты', 'ТурбоПатриоты', 'Сечин' ],
    datasets: [ { label: '%', data: [70, 20, 7, 35, 17, 0], backgroundColor: [
        'rgba(255,207,44,0.37)',
        'rgba(255,91,182,0.42)',
        'rgba(62,255,84,0.41)',
        'rgba(255,205,86,0.2)',
      ], fill: false, borderColor: 'rgb(75, 192, 192)' }]
  })

  const chartDataByiden = ref({
    labels: [ 'Асфальт', 'Подъезд', 'Налоги' ],
    datasets: [ { label: 'кол-во', data: [267, 356, 100], backgroundColor: [
        'rgba(255,207,44,0.37)',
        'rgba(255,91,182,0.42)',
        'rgba(62,255,84,0.41)'
      ], borderColor: 'rgb(75, 192, 192)' }]
  })


  const chartOptions = ref({
    responsive: true
  })

  onMounted(() => {
    store.commit('setLoading', true)

    setTimeout(() => {
      store.commit('setLoading', false)
    }, 700)
  })
</script>

<style scoped lang="scss">

  .subtitle-chart {
    span {
      font-size: 18px;
      font-weight: 600;
    }
  }

</style>

