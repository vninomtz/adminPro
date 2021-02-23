<template>
  <v-card elevation="0" max-height="500">
    <v-card-text class="pa-5 text-center">
      <div class="d-flex justify-center my-5">
        <div>
          <v-sheet elevation="6" class="rounded-circle">
            <v-img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              aspect-ratio="1"
              width="150"
              class="rounded-circle"
            ></v-img>
          </v-sheet>
        </div>
      </div>
      <h4 class="headline">Mark J. Freeman</h4>
      <h6 class="subtitle-1 txt-secondary">Web Developer</h6>
      <div class="mt-5">
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-icon class="mx-2" size="20" v-bind="attrs" v-on="on">
              mdi-twitter
            </v-icon>
          </template>
          <span>Twitter</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-icon class="mx-2" size="20" v-bind="attrs" v-on="on">
              mdi-facebook
            </v-icon>
          </template>
          <span>Facebook</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-icon class="mx-2" size="20" v-bind="attrs" v-on="on">
              mdi-instagram
            </v-icon>
          </template>
          <span>Instagram</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-icon class="mx-2" size="20" v-bind="attrs" v-on="on">
              mdi-youtube
            </v-icon>
          </template>
          <span>Youtube</span>
        </v-tooltip>
      </div>
    </v-card-text>
    <v-container>
      <v-row align="center" justify="center" class="blue-grey lighten-4">
        <v-col cols="6" class="borderCol">
          <div class="text-center">
            <p class="headline ma-0">3500</p>
            <p class="subtitle-1 ma-0">Seguidores</p>
          </div>
        </v-col>
        <v-col cols="6">
          <div class="text-center">
            <p class="headline ma-0">180</p>
            <p class="subtitle-1 ma-0">Siguiendo</p>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row align="center" justify="center" class="pa-4">
        <v-btn elevation="0" rounded dark class="primary" x-large
          >Sigueme</v-btn
        >
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {};
</script>

<style>
.borderCol {
  border-right: 1px solid #fafafa;
}
</style>