<template>
  <Bar id="chart-id" :options="chartOptions" :data="chartData" />
</template>

<script>
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default {
  name: "ChartComponents",
  components: { Bar },
  props: {
    profitings: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      chartData: {
        labels: ["Profits", "Overdue", "Total Sales"],
        datasets: [
          {
            data: [this.profitings, 2000, 1200],
            backgroundColor: ["#FF6969", "#969696", "#3AC2CB"],
            borderRadius: 10,
          },
        ],
      },
      chartOptions: {
        plugins: {
          legend: {
            display: false, // Hide the legend
          },
        },
        responsive: true,
        indexAxis: "x",
        scales: {
          x: {
            grid: {
              display: false,
            },
            ticks: {
              color: ["#FAFAFA"],
            },
          },
          y: {
            display: false,
          },
        },
      },
    };
  },
  created() {
    console.log("Profitings:", this.profitings);
  },
};
</script>
