<template>
  <v-combobox
    v-model="select"
    :items="items"
    label="Combobox"
    class="0"
  ></v-combobox>
</template>

<script>
export default {
  name: "ComboBox",
  data: () => ({
    select: "",
    items: ["Item1", "Item1", "Item1"],
  }),
};
</script>

<style>
</style>