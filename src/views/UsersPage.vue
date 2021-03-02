<template>
  <v-container fluid>
    <toolbar-navigation></toolbar-navigation>
    <v-row>
      <v-tabs v-model="tab">
        <v-tab v-for="item in tabs" :key="item.name">
          {{ item.name }}
        </v-tab>
      </v-tabs>
      <v-tabs-items v-model="tab">
        <v-tab-item v-for="item in tabs" :key="item.name">
          <keep-alive>
            <component :is="getComponent" />
          </keep-alive>
        </v-tab-item>
      </v-tabs-items>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "UsersPage",
  components: {
    "toolbar-navigation": () =>
      import("@/components/layaout/AppToolbarNavigation.vue"),
  },
  data: () => ({
    tab: 0,
    tabs: [
      {
        name: "Todo",
        value: "ToDoList",
      },
      {
        name: "Master",
        value: "MasterTable",
      },
    ],
  }),
  computed: {
    getComponent() {
      var componentName = this.tabs[this.tab].value;
      return () => import("@/components/activities/" + componentName);
    },
  },
};
</script>