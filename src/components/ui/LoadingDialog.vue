<template>
  <v-dialog v-model="dialog" persistent max-width="300">
    <v-card>
      <v-card-title class="text--secondary mb-3"> Guardando </v-card-title>
      <v-card-text class="d-flex justify-center" style="min-height: 100px">
        <v-progress-circular
          v-show="progress"
          indeterminate
          color="primary"
          size="70"
          class="mb-0"
        ></v-progress-circular>
        <v-expand-x-transition>
          <v-card
            v-show="confirmation"
            elevation="8"
            :class="states[getVariant].color"
            class="rounded-circle"
            height="80"
            width="80"
          >
            <v-card-text class="ma-1">
              <v-icon size="40" dark> {{ states[getVariant].icon }} </v-icon>
            </v-card-text>
          </v-card>
        </v-expand-x-transition>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    progress: true,
    confirmation: false,
    variantSelected: 0,
    states: [
      {
        color: "success",
        icon: "mdi-check",
      },
      {
        color: "error",
        icon: "mdi-close",
      },
    ],
  }),
  watch: {
    dialog(val) {
      //   if (!val) return;
      //   setTimeout(() => {
      //     this.progress = false;
      //     this.confirmation = true;
      //     setTimeout(() => {
      //       this.dialog = false;
      //       this.progress = true;
      //       this.confirmation = false;
      //     }, 700);
      //   }, 1000);
    },
  },
  methods: {
    startLoad: function () {
      this.dialog = true;
      this.progress = true;
      this.confirmation = false;
    },
    finishSuccess() {
      this.variantSelected = 0;
      this.finishLoad();
    },
    finishError() {
      this.variantSelected = 1;
      this.finishLoad();
    },
    finishLoad() {
      this.progress = false;
      this.confirmation = true;
      setTimeout(() => {
        this.dialog = false;
      }, 700);
    },
  },
  computed: {
    getVariant() {
      return this.variantSelected;
    },
  },
};
</script>

<style>
</style>