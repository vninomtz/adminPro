<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    dark
    :permanent="!isMobile"
    :expand-on-hover="expand"
  >
    <v-list>
      <v-list-item link class="pa-2">
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title class="title"> Sandra Adams </v-list-item-title>
          <v-list-item-subtitle>sandra_a88@gmail.com</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-divider></v-divider>

    <v-list dense>
      <v-list-item link to="home">
        <v-list-item-icon>
          <v-icon>mdi-view-dashboard</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Inicio</v-list-item-title>
      </v-list-item>
      <v-list-item link to="users">
        <v-list-item-icon>
          <v-icon>mdi-account-multiple</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Usuarios</v-list-item-title>
      </v-list-item>
      <v-list-item link>
        <v-list-item-icon>
          <v-icon>mdi-finance</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Estadísticas</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    expand: true,
  }),
  methods: {
    updateStateDrawer() {
      if (this.isMobile) {
        this.drawer = !this.drawer;
      } else {
        this.expand = !this.expand;
      }
    },
  },
  computed: {
    isMobile() {
      if (this.$vuetify.breakpoint.name === "xs") {
        this.expand = false;
        return true;
      } else {
        this.expand = true;
        return false;
      }
    },
    isDrawerActive() {},
  },
};
</script>

<style>
</style>