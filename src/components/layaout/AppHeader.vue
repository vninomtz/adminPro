<template>
  <v-app-bar app flat class="white">
    <v-app-bar-nav-icon
      @click.stop="$emit('update-drawer')"
    ></v-app-bar-nav-icon>
    <v-toolbar-title>Admin<strong>Pro</strong></v-toolbar-title>
    <v-spacer></v-spacer>
    <header-notifications></header-notifications>
    <header-messages></header-messages>
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
  methods: {
    printMsg: function () {
      console.log("Entro");
    },
  },
};
</script>

<style>
</style>