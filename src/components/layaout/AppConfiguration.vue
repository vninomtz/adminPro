<template>
  <v-navigation-drawer app v-model="drawer" temporary right>
    <div class="mx-5 mt-5">
      <span>Horizontal</span>
      <v-switch label="Horizontal"></v-switch>
    </div>
    <v-divider></v-divider>
    <div class="mx-5 mt-5">
      <span>Tema</span>
      <v-switch label="Modo oscuro"></v-switch>
    </div>
    <v-divider></v-divider>
    <div class="mx-5 mt-5">
      <span>Mini Sidebar</span>
      <v-switch label="Mini variant"></v-switch>
    </div>
    <v-divider></v-divider>
    <div class="mx-5 mt-5">
      <span>Color del tema</span>
      <v-item-group class="d-flex justify-space-around ma-3">
        <v-item>
          <v-avatar size="20" color="primary"></v-avatar>
        </v-item>
        <v-item>
          <v-avatar size="20" color="secondary"></v-avatar>
        </v-item>
        <v-item>
          <v-avatar size="20" color="success"></v-avatar>
        </v-item>
        <v-item>
          <v-avatar size="20" color="warning"></v-avatar>
        </v-item>
      </v-item-group>
    </div>
    <v-divider></v-divider>
    <div class="mx-5 mt-5">
      <span>Color del topbar</span>
      <v-switch label="Mini variant"></v-switch>
    </div>
    <v-divider></v-divider>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
  }),
  methods: {
    open() {
      this.drawer = !this.drawer;
    },
  },
};
</script>

<style>
</style>