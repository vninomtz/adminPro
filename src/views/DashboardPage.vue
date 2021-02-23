<template>
  <v-app>
    <app-header :update-drawer="changeDrawer"></app-header>
    <navigation-drawer ref="drawer"></navigation-drawer>
    <v-main class="grey lighten-3">
      <router-view></router-view>
    </v-main>
    <app-footer></app-footer>
  </v-app>
</template>

<script>
import NavigationDrawer from "@/components/layaout/AppNavigationDrawer.vue";
import Header from "@/components/layaout/AppHeader.vue";
import AppFooter from "@/components/layaout/AppFooter.vue";
export default {
  components: {
    "navigation-drawer": NavigationDrawer,
    "app-header": Header,
    "app-footer": AppFooter,
  },
  data: () => ({
    drawer: false,
  }),
  methods: {
    changeDrawer() {
      console.log("Entro");
    },
  },
};
</script>

<style>
</style>