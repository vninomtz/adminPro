<script>
import { Doughnut } from "vue-chartjs";
export default {
  extends: Doughnut,
  data: () => ({
    chartdata: {
      labels: ["Movil", "Tablet", "Desktop", "Otros"],
      datasets: [
        {
          backgroundColor: ["#2196F3", "#009688", "#FF9800", "#FFEB3B"],
          data: [200, 150, 450, 20],
        },
      ],
    },
    options: {
      responsive: true,
    },
  }),
  mounted() {
    this.renderChart(this.chartdata, this.options);
  },
};
</script>

<style>
</style>