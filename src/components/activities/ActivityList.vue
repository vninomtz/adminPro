<template>
  <v-card elevation="0" max-height="500">
    <span class="line"></span>
    <v-card-title>
      <div>
        <h3 class="headline">Actividad</h3>
      </div>
    </v-card-title>
    <v-card-text>
      <v-virtual-scroll :items="items" height="420" :item-height="120">
        <template v-slot:default="{ item }">
          <v-list-item link>
            <v-list-item-avatar width="60" height="60" class="mb-10">
              <v-img :src="item.avatar"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="title text-secundary"
                >{{ item.name }}
                <span class="subtitle-1 text--secondary"
                  >| {{ item.time }}</span
                ></v-list-item-title
              >
              <v-list-item-subtitle>{{ item.action }}</v-list-item-subtitle>
              <v-list-item-subtitle class="mt-4">
                <div class="d-flex align-center">
                  <v-chip label small color="success">Archivo cargado</v-chip>
                  <v-spacer></v-spacer>
                  <span class="text--secondary"></span>
                </div>
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-virtual-scroll>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        avatar:
          "https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg",
        name: "Mark Freeman",
        time: "6:30 PM",
        action: "uploaded this file",
      },
      {
        avatar:
          "https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg",
        name: "Mark Freeman",
        time: "6:30 PM",
        action: "uploaded this file",
      },
      {
        avatar:
          "https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg",
        name: "Mark Freeman",
        time: "6:30 PM",
        action: "uploaded this file",
      },
      {
        avatar:
          "https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg",
        name: "Mark Freeman",
        time: "6:30 PM",
        action: "uploaded this file",
      },
    ],
  }),
};
</script>

<style>
</style>