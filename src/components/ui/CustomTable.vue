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
  </v-data-table>
</template>

<script>
export default {
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