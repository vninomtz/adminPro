<template>
  <v-card elevation="0" :class="socialMedia.color">
    <v-card-text class="pa-5">
      <div class="d-flex">
        <div>
          <h1 class="display-1 white--text">{{ socialMedia.number }}</h1>
          <h6 class="subtitle-1 white--text">{{ socialMedia.message }}</h6>
          <v-btn class="mt-4" elevation="0" rounded>Visitar</v-btn>
        </div>
        <v-spacer></v-spacer>
        <v-icon size="50" dark class="iconSocialMedia">{{
          socialMedia.icon
        }}</v-icon>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    socialMedia: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
.iconSocialMedia {
  position: absolute;
  top: -2rem;
}
</style>