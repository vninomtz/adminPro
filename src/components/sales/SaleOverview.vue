<template>
  <v-card elevation="0">
    <v-card-title>
      <div>
        <h3 class="headline">Vista General</h3>
        <h6 class="subtitle-1">Año 2020</h6>
      </div>
      <v-spacer></v-spacer>
      <v-row no-gutters align="end" justify="end">
        <v-col
          class="d-flex flex-column justify-content-center"
          cols="7"
          sm="2"
        >
          <span class="headline">10368</span>
          <span class="subtitle-1">Ganado</span>
        </v-col>
        <v-col class="d-flex flex-column" cols="7" sm="2">
          <span class="headline">10368</span>
          <span class="subtitle-1">Ganado</span>
        </v-col>
        <v-col class="d-flex flex-column" cols="7" sm="2">
          <span class="headline">10368</span>
          <span class="subtitle-1">Ganado</span>
        </v-col>
      </v-row>
    </v-card-title>
    <v-card-text>
      <chart-sales></chart-sales>
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
</style>