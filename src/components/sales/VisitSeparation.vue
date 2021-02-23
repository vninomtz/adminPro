<template>
  <v-card elevation="0" height="550" max-height="550">
    <span class="line"></span>
    <v-card-title class="headline"> Separación de visitas </v-card-title>
    <v-card-text class="pa-5">
      <v-container>
        <v-row align="center" justify="center">
          <chart-visits style="max-width: 250px"></chart-visits>
        </v-row>
      </v-container>
      <v-container>
        <v-row align="center" justify="center">
          <v-col
            cols="12"
            v-for="device in devices"
            :key="device.name"
            class="my-2"
          >
            <v-row align="center" justify="center">
              <span>{{ device.name }}</span>
              <v-spacer></v-spacer>
              <span>{{ device.percentage }}</span>
            </v-row>
            <v-row align="center" justify="center">
              <v-divider></v-divider>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
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