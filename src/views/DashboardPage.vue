<template>
  <v-app>
    <app-header @update-drawer="changeDrawer"></app-header>
    <navigation-drawer ref="drawer"></navigation-drawer>
    <v-main class="grey lighten-3">
      <router-view></router-view>
    </v-main>
    <app-footer @open-config="openConfig"></app-footer>
    <app-config ref="config"></app-config>
  </v-app>
</template>

<script>
import NavigationDrawer from "@/components/layaout/AppNavigationDrawer.vue";
import Header from "@/components/layaout/AppHeader.vue";
import AppFooter from "@/components/layaout/AppFooter.vue";
import AppConfig from "@/components/layaout/AppConfiguration.vue";
export default {
  components: {
    "navigation-drawer": NavigationDrawer,
    "app-header": Header,
    "app-footer": AppFooter,
    "app-config": AppConfig,
  },
  data: () => ({
    drawer: false,
  }),
  methods: {
    changeDrawer() {
      this.$refs.drawer.updateStateDrawer();
    },
    openConfig() {
      this.$refs.config.open();
    },
  },
};
</script>

<style>
</style>