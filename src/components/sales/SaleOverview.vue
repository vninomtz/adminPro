<template>
  <v-card elevation="0">
    <span class="line"></span>
    <v-card-title>
      <div>
        <h3 class="headline">Vista General</h3>
        <h6 class="subtitle-1">Año 2020</h6>
      </div>
      <v-spacer></v-spacer>
      <v-row no-gutters align="end" justify="end">
        <v-col class="d-flex justify-end" cols="7" sm="4" md="3">
          <div class="d-inline-flex align-center text-left">
            <span class="bullet blue"></span>
            <div class="d-flex flex-column ml-2">
              <span class="headline">10368</span>
              <span class="subtitle-1 text--secondary">Ganado</span>
            </div>
          </div>
        </v-col>
        <v-col class="d-flex justify-end" cols="7" sm="4" md="3">
          <div class="d-inline-flex align-center text-left">
            <span class="bullet red"></span>
            <div class="d-flex flex-column ml-2">
              <span class="headline">10368</span>
              <span class="subtitle-1 text--secondary">Gastado</span>
            </div>
          </div>
        </v-col>
        <v-col class="d-flex justify-end" cols="7" sm="4" md="3">
          <div class="d-inline-flex align-center text-left">
            <span class="bullet green"></span>
            <div class="d-flex flex-column ml-2">
              <span class="headline">10368</span>
              <span class="subtitle-1 text--secondary">Vendido</span>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-card-title>
    <v-card-text class="pa-5">
      <chart-sales class=""></chart-sales>
    </v-card-text>
  </v-card>
</template>

<script>
import ChartSales from "@/components/ui/ChartSales";
export default {
  components: {
    "chart-sales": ChartSales,
  },
  data: () => ({
    value: [200, 675, 410, 390, 310, 460, 250, 240, 400, 600, 650, 500],
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
  }),
};
</script>

<style>
.bullet {
  width: 10px;
  height: 10px;
  position: relative;
  top: -0.6rem;
  border-radius: 50%;
}
</style>