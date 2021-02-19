<template>
  <v-app>
    <v-row align="center" justify="center" class="ma-0 grey lighten-4">
      <v-col cols="12" sm="6" md="6">
        <v-card class="pa-8" elevation="1">
          <v-card-title>
            <v-row align="center" justify="center" class="pa-5">
              Bienvenido
            </v-row>
          </v-card-title>
          <v-card-subtitle>
            <v-row align="center" justify="center" class="pa-3">
              Ingresar a tu cuenta
            </v-row>
          </v-card-subtitle>
          <v-card-text>
            <v-row align="center" justify="center">
              <v-col cols="8">
                <v-text-field label="Usuario"> </v-text-field>
              </v-col>
              <v-col cols="8">
                <v-text-field label="Contraseña"> </v-text-field>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-row align="center" justify="center">
              <v-col cols="6">
                <v-btn block color="primary" @click="login"
                  >Iniciar sesión</v-btn
                >
              </v-col>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
export default {
  methods: {
    login() {
      this.$router.push({ name: "HomePage" });
    },
  },
};
</script>

<style>
</style>