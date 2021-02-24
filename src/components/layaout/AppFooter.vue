<template>
  <v-footer app padless class="white">
    <v-col cols="11" class="text-center">
      Admin <strong>Pro</strong> - 2021
    </v-col>
    <v-col cols="1">
      <div>
        <v-btn
          fab
          depressed
          elevation="3"
          dark
          class="primary floatBtn"
          @click="$emit('open-config')"
        >
          <v-icon>mdi-cog</v-icon>
        </v-btn>
      </div>
    </v-col>
  </v-footer>
</template>

<script>
export default {};
</script>

<style>
.floatBtn {
  position: absolute;
  top: -2.5rem;
  right: 1rem;
}
</style>