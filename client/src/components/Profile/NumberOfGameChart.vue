<script setup lang="ts">
import { onMounted } from 'vue';
import Chart, { ChartItem } from 'chart.js/auto';

onMounted(() => {
  const ctx = document.getElementById('myChart') as ChartItem;

  const labels = ['Янв. 2021', 'Фев. 2021', 'Март 2021', 'Апр. 2021', 'Май 2021', 'Июнь 2021', 'Июль 2021', 'Авг. 2021', 'Сен. 2021', 'Окт. 2021', 'Ноя. 2021', 'Дек. 2021', 'Янв. 2022', 'Фев. 2022', 'Март 2022', 'Апр. 2022', 'Май 2022', 'Июнь 2022', 'Июль 2022', 'Авг. 2022', 'Сен. 2022', 'Окт. 2022', 'Ноя. 2022', 'Дек. 2022', 'Янв. 2023', 'Фев. 2023', 'Март 2023', 'Апр. 2023', 'Май 2023', 'Июнь 2023', 'Июль 2023', 'Авг. 2023', 'Сен. 2023'];
  const data = {
    labels: labels,
    
    datasets: [{
      data: [65, 59, 80,  109, 65, 249, 80, 81, 56, 105, 40, 200,  81, 56, 55, 40, 200, 500, 345, 76, 256,200, 500, 345, 76, 256, 156, 200,  81, 56, 55, 40, 250],
      label: 'Количество игр',
      fill: false,
      borderColor: 'white',
      pointRadius: 0,
    }],
  };

  new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
      interaction: {
        intersect: false,
        mode: 'index',
        
      },
      plugins:{
        legend: {
          display: false
        },
        tooltip:{
          displayColors: false
        }
      },
      scales: {
        x: {
          ticks: {
            color: '#b5d9f7',
            font:{
              size: 15,
              weight: 'bolder'
            },
            maxTicksLimit: 20
          }
        },
        y: {
          ticks: {
            color: '#b5d9f7',
            font:{
              size: 15,
              weight: 'bold'
            },
          }
        }
      }
    },
  });
});
</script>

<template>
  <div>
    <v-card
      class="align-centerfill-height mx-auto mt-5"
      max-width="900"
      rounded="lg"
      color="#72befc"
    >
      <v-container>
        <div class="text-white mb-4">График игр по месяцам</div>
        <canvas id="myChart" height="130"></canvas>
      </v-container>
    </v-card>
  </div>
</template>

<style scoped lang="scss">
</style>