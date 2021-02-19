<template>
  <v-menu
    :close-on-content-click="false"
    :nudge-width="200"
    offset-x
    left
    rounded="lg"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon v-bind="attrs" v-on="on" class="mx-2">
        <v-avatar size="38">
          <v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
        </v-avatar>
      </v-btn>
    </template>
    <v-card>
      <v-list>
        <v-list-item link dense>
          <v-list-item-avatar>
            <v-img
              src="https://randomuser.me/api/portraits/women/85.jpg"
            ></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>Carla García </v-list-item-title>
            <v-list-item-subtitle>Ingeniera de Software</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-card-text>
        <v-subheader>Profile</v-subheader>
        <v-list>
          <v-list-item link v-for="item in options" :key="item.name">
            <v-list-item-title> {{ item.name }} </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
  </v-menu>
</template>

<script>
export default {
  data: () => ({
    options: [
      { name: "Mis contactos", to: "" },
      { name: "Mis balance", to: "" },
      { name: "Inbox", to: "" },
      { name: "Configuración de la cuenta", to: "" },
      { name: "Cerrar sesión", to: "" },
    ],
  }),
};
</script>

<style>
</style>