<template>
  <v-card elevation="0" max-height="500">
    <span class="line"></span>
    <v-card-title>
      <div>
        <h3 class="headline">Actividad</h3>
      </div>
    </v-card-title>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="6">
            <h3>Draggable 1</h3>
            <draggable :list="list1" group="people" @change="log">
              <v-sheet
                class="ma-3"
                elevation="2"
                v-for="(element, index) in list1"
                :key="element.name"
              >
                {{ element.name }} {{ index }}
              </v-sheet>
            </draggable>
            <v-btn @click="pushAll">Pasar todos</v-btn>
          </v-col>
          <v-col cols="6">
            <h3>Draggable 2</h3>
            <draggable
              class="list-group"
              :list="list2"
              group="people"
              @change="log"
            >
              <v-sheet
                class="ma-3"
                elevation="2"
                v-for="(element, index) in list2"
                :key="element.name"
              >
                {{ element.name }} {{ index }}
              </v-sheet>
            </draggable>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
import draggable from "vuedraggable";
export default {
  components: {
    draggable,
  },
  data: () => ({
    list1: [
      { name: "John", id: 1 },
      { name: "Joao", id: 2 },
      { name: "Jean", id: 3 },
      { name: "Gerard", id: 4 },
    ],
    list2: [
      { name: "Juan", id: 5 },
      { name: "Edgard", id: 6 },
      { name: "Johnson", id: 7 },
    ],
  }),
  methods: {
    log: function (evt) {
      window.console.log(evt);
      console.log("Tamaño lista1: " + this.list1.length);
    },
    pushAll() {
      console.log(this.list2.length);
      this.list1.forEach((item) => {
        this.list2.push(item);
      });
      console.log(this.list2.length);
      this.list1 = [];
    },
  },
};
</script>

<style>
</style>