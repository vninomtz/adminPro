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
            <component :is="item.value" />
          </keep-alive>
        </v-tab-item>
      </v-tabs-items>
    </v-row>
  </v-container>
</template>
<script>
const ToDoList = () => import("@/components/activities/ToDoList");
const MasterTable = () => import("@/components/activities/MasterTable");

export default {
  name: "UsersPage",
  components: {
    "toolbar-navigation": () =>
      import("@/components/layaout/AppToolbarNavigation.vue"),
  },
  data: () => ({
    tab: "",
    tabs: [
      {
        name: "Todo",
        value: ToDoList,
      },
      {
        name: "Master",
        value: MasterTable,
      },
    ],
  }),
  computed: {
    getComponent(name) {
      return this.tab.name;
    },
  },
};
</script>