<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  data: () => ({
    chartdata: {
      labels: [
        "Ene",
        "Feb",
        "Mar",
        "Abri",
        "Mayo",
        "Jun",
        "Jul",
        "Agos",
        "Sep",
        "Octu",
        "Novi",
        "Dic",
      ],
      datasets: [
        {
          label: "Ingresos en el 2020",
          backgroundColor: ["#42b3f4"],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 0,
          data: [
            100,
            200,
            300,
            400,
            350,
            600,
            200,
            200,
            300,
            400,
            350,
            600,
            200,
          ],
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      tooltips: {
        mode: "point",
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  }),
  mounted() {
    this.renderChart(this.chartdata, this.options);
  },
};
</script>

