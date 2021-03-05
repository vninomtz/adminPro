<template>
  <v-app-bar app flat class="white">
    <v-app-bar-nav-icon @click.stop="changeDrawer"></v-app-bar-nav-icon>
    <v-toolbar-title>Inter<strong>Mercado</strong></v-toolbar-title>

    <v-spacer></v-spacer>
    <header-notifications></header-notifications>
    <header-messages></header-messages>
    <span class="vertical-spacer"></span>
    <div class="d-flex align-center justify-left ml-2" v-if="!isMobile">
      <div class="caption font-weight-medium text--secondary">
        <div>Ramón Gómez Desarrollo Hightek</div>
        <div>(Multiempresa) Administrador</div>
      </div>
      <v-icon class="ml-2">mdi-chevron-down</v-icon>
    </div>
    <header-profile></header-profile>
  </v-app-bar>
</template>

<script>
import HeaderNotifications from "@/components/header/HeaderNotifications.vue";
import HeaderMessages from "@/components/header/HeaderMessages.vue";
import HeaderProfile from "@/components/header/HeaderProfile.vue";
export default {
  components: {
    "header-notifications": HeaderNotifications,
    "header-messages": HeaderMessages,
    "header-profile": HeaderProfile,
  },
  data: () => ({
    showSearch: false,
  }),
  methods: {
    changeDrawer() {
      this.$emit("update-drawer");
    },
  },
  computed: {
    isMobile() {
      if (this.$vuetify.breakpoint.name === "xs") {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style>
.vertical-spacer {
  border-left: 1px solid gainsboro;
  height: 2rem;
  margin-left: 1rem;
  margin-right: 1rem;
}
</style>