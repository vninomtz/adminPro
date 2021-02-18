<template>
  <v-app>
    <app-header></app-header>
    <navigation-drawer></navigation-drawer>
    <v-main class="grey lighten-3">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import NavigationDrawer from "@/components/layaout/AppNavigationDrawer.vue";
import Header from "@/components/layaout/AppHeader.vue";
export default {
  components: {
    "navigation-drawer": NavigationDrawer,
    "app-header": Header,
  },
};
</script>

<style>
</style>