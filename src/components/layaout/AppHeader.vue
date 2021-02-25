<template>
  <v-app-bar app flat class="white">
    <v-toolbar-title>Admin<strong>Pro</strong></v-toolbar-title>
    <v-app-bar-nav-icon @click.stop="changeDrawer"></v-app-bar-nav-icon>
    <div class="d-flex align-center justify-space-between">
      <v-icon size="25" @click="showSearch = !showSearch">mdi-magnify</v-icon>
      <div class="pa-3 mt-3">
        <v-text-field
          style="width: 300px"
          v-if="showSearch"
          clearable
          @click:clear="showSearch = !showSearch"
          flat
        ></v-text-field>
      </div>
    </div>
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
  data: () => ({
    showSearch: false,
  }),
  methods: {
    changeDrawer() {
      this.$emit("update-drawer");
    },
  },
};
</script>

<style>
</style>