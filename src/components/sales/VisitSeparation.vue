<template>
  <v-card elevation="0">
    <v-card-title class="headline"> Separación de visitas </v-card-title>
    <v-card-text class="pa-5">
      <v-row align="center" justify="center">
        <chart-visits style="max-width: 90%"></chart-visits>
      </v-row>
      <v-row align="center" justify="center">
        <v-col cols="12" v-for="device in devices" :key="device.name">
          <v-row align="center" justify="center" class="mx-3 my-3">
            <span>{{ device.name }}</span>
            <v-spacer></v-spacer>
            <span>{{ device.percentage }}</span>
          </v-row>
          <v-row align="center" justify="center" class="mx-3">
            <v-divider></v-divider>
          </v-row>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import ChartVisits from "@/components/ui/ChartVisits";
export default {
  components: {
    "chart-visits": ChartVisits,
  },
  data: () => ({
    devices: [
      {
        name: "Movil",
        percentage: "38.5%",
      },
      {
        name: "Tablet",
        percentage: "30.8%",
      },
      {
        name: "Desktop",
        percentage: "7.7%",
      },
      {
        name: "Otros",
        percentage: "23.1%",
      },
    ],
  }),
};
</script>

<style>
</style>