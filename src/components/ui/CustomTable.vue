<template>
  <v-data-table v-if="existContent" :headers="headers" :items="items">
    <template v-if="user != null" v-slot:top>
      <div class="pa-2">
        <v-avatar>
          <v-img :src="user.avatar"></v-img>
        </v-avatar>
        <span class="ml-3">{{ user.name }}</span>
      </div>
    </template>
    <template v-slot:[`item.salary`]="{ item }">
      <input type="text" v-mask="monedaMask" :value="item.salary" disabled />
    </template>
  </v-data-table>
</template>

<script>
import createNumberMask from "text-mask-addons/dist/createNumberMask";
const currencyMask = createNumberMask({
  prefix: "$",
  allowDecimal: true,
  includeThousandsSeparator: true,
  allowNegative: false,
});
export default {
  data: () => ({
    monedaMask: currencyMask,
  }),
  props: {
    headers: {
      type: Array,
      default: [],
    },
    items: {
      type: Array,
      default: [],
    },
    user: {
      type: Object,
      default: null,
    },
  },
  computed: {
    existContent() {
      if (this.items.length > 0) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style>
</style>