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
          <loading-dialog ref="load"></loading-dialog>
          <confirmation-dialog
            :information="confirmation"
          ></confirmation-dialog>
          <v-btn @click="saveExample">Guardar ejemplo</v-btn>
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
    "loading-dialog": () => import("@/components/ui/LoadingDialog"),
    "confirmation-dialog": () => import("@/components/ui/ConfirmationDialog"),
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
    confirmation: {
      icon: "mdi-content-save",
      action: "Guardar",
      message: "Seguro que quieres guardar?",
    },
  }),
  methods: {
    saveExample() {
      this.$refs.load[0].startLoad();
      promiseExample
        .then((mensaje) => {
          console.log(mensaje);
          this.$refs.load[0].finishSuccess();
        })
        .catch((error) => {
          console.log(error);
          this.$refs.load[0].finishError();
        });
    },
  },
  computed: {
    getComponent() {
      var componentName = this.tabs[this.tab].value;
      return () => import("@/components/activities/" + componentName);
    },
  },
};

var promiseExample = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Error");
  }, 5000);
});
</script>