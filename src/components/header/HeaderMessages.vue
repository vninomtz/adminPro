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
        <v-badge content="3">
          <v-icon>mdi-message</v-icon>
        </v-badge>
      </v-btn>
    </template>
    <v-card>
      <v-card-title>Mensajes</v-card-title>

      <v-divider></v-divider>

      <v-list>
        <v-list-item link dense v-for="item in messages" :key="item.text">
          <v-list-item-avatar>
            <v-img :src="item.avatar"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{ item.username }}</v-list-item-title>
            <v-list-item-subtitle>{{ item.text }}</v-list-item-subtitle>
            <v-list-item-subtitle>{{ item.time }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </v-menu>
</template>

<script>
export default {
  data: () => ({
    messages: [
      {
        username: "Carla Hernández",
        text: "Hola buen día",
        time: "10:30 AM",
        avatar: "https://randomuser.me/api/portraits/women/85.jpg",
      },
      {
        username: "Carla Hernández",
        text: "Necesito el reporte",
        time: "10:32 AM",
        avatar: "https://randomuser.me/api/portraits/women/85.jpg",
      },
      {
        username: "Carla Hernández",
        text: "Espero su respuesta",
        time: "10:33 AM",
        avatar: "https://randomuser.me/api/portraits/women/85.jpg",
      },
    ],
  }),
};
</script>

<style>
</style>