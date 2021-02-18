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
        <v-icon>mdi-bell</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-title> Notificaciones </v-card-title>

      <v-divider></v-divider>

      <v-list>
        <v-list-item link dense>
          <v-list-item-avatar>
            <v-icon class="blue" dark> mdi-bell </v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>Titulo</v-list-item-title>
            <v-list-item-subtitle>Subtitulo</v-list-item-subtitle>
            <v-list-item-subtitle>Time</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </v-menu>
</template>

<script>
export default {};
</script>

<style>
</style>