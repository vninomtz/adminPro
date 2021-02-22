<template>
  <v-card elevation="0">
    <span class="line"></span>
    <v-card-text>
      <div class="d-flex align-center">
        <v-icon size="50"> mdi-cash-multiple </v-icon>
        <div class="ml-4">
          <h5 class="subtitle-1">Total de ingresos</h5>
          <h2 class="headline">500,000</h2>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {};
</script>

<style >
.line {
  border-left: 2px solid rgba(51, 149, 206, 0.972);
  margin-top: 2rem;
  position: absolute;
  display: block;
  height: 2rem;
}
</style>