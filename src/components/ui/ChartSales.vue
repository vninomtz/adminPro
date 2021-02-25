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
          label: "Ganado",
          backgroundColor: "rgb(240, 128, 128)",
          borderColor: ["red"],
          borderWidth: 1,
          data: [0, 50, 30, 60, 180, 120, 180, 80, 190, 150, 240, 240],
        },
        {
          label: "Gastado",
          backgroundColor: "rgb(30, 144, 255)",
          borderColor: ["blue"],
          borderWidth: 1,
          data: [0, 100, 70, 100, 200, 180, 220, 140, 250, 210, 340, 320],
        },
        {
          label: "Vendido",
          backgroundColor: "rgb(50, 205, 50)",
          borderColor: ["green"],
          borderWidth: 1,
          data: [0, 150, 110, 200, 240, 200, 300, 200, 380, 300, 400, 380],
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
      tooltips: {
        mode: "index",
        events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
      },
      scales: {
        xAxes: [
          {
            gridLines: {
              color: "rgba(0,0,0,0)",
            },
          },
        ],
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

