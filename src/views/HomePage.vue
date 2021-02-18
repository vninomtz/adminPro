<template>
  <v-container fluid>
    <toolbar-navigation></toolbar-navigation>
    <v-row>
      <v-col cols="12">
        <v-row align="center" justify="center">
          <v-col
            cols="12"
            sm="6"
            md="6"
            lg="3"
            v-for="item in revenues"
            :key="item"
          >
            <revenue-card></revenue-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="12" lg="9">
        <sale-overview></sale-overview>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ToolbarNavigation from "@/components/layaout/AppToolbarNavigation";
import RevenueCard from "@/components/ui/RevenueCard";
import SaleOverview from "@/components/sales/SaleOverview";
export default {
  components: {
    "toolbar-navigation": ToolbarNavigation,
    "revenue-card": RevenueCard,
    "sale-overview": SaleOverview,
  },
  data: () => ({
    revenues: ["1", "2", "3", "4"],
  }),
};
</script>
