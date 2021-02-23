<template>
  <v-menu
    :close-on-content-click="false"
    :nudge-width="200"
    offset-x
    left
    rounded="lg"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon v-bind="attrs" v-on="on">
        <v-badge dot>
          <v-icon>mdi-bell</v-icon>
        </v-badge>
      </v-btn>
    </template>
    <v-card>
      <v-card-title>Notificaciones</v-card-title>

      <v-divider></v-divider>

      <v-list>
        <v-list-item link dense v-for="item in notifications" :key="item.title">
          <v-list-item-avatar>
            <v-icon class="blue" dark> {{ item.icon }} </v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
            <v-list-item-subtitle>{{ item.subtitle }}</v-list-item-subtitle>
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
    notifications: [
      {
        title: "Evento nuevo",
        subtitle: "Recordatorio de evento nuevo",
        time: "10:30 AM",
        icon: "mdi-calendar",
      },
      {
        title: "Nueva configuración",
        subtitle: "Recordatorio de configuración",
        time: "10:30 AM",
        icon: "mdi-cog",
      },
      {
        title: "Nuevo registro",
        subtitle: "Recordatorio de evento registro",
        time: "10:30 AM",
        icon: "mdi-bell",
      },
    ],
  }),
};
</script>

<style>
</style>