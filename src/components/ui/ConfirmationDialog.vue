<template>
  <v-dialog v-model="dialog" persistent max-width="320">
    <v-card>
      <v-card-title class="title-1">
        <span> {{ information.action }} </span>
        <v-spacer></v-spacer>
        <v-icon disabled>{{ information.icon }}</v-icon>
      </v-card-title>
      <v-card-text>{{ information.message }}</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text @click="dialog = false"> Cancelar </v-btn>
        <v-btn color="primary" @click="dialog = false"> Guardar </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    information: {
      type: Object,
    },
  },
  data: () => ({
    dialog: false,
  }),
};
</script>

<style>
</style>