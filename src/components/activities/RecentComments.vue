<template>
  <v-card elevation="0" class="mx-auto">
    <span class="line"></span>
    <v-card-title>
      <div>
        <h3 class="headline">Comentarios recientes</h3>
      </div>
    </v-card-title>
    <v-card-text>
      <v-virtual-scroll :items="comments" height="400" :item-height="100">
        <template v-slot:default="{ item }">
          <v-list-item link>
            <v-list-item-avatar width="60" height="60" class="mb-10">
              <v-img :src="item.avatar"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>{{ item.name }}</v-list-item-title>
              <v-list-item-subtitle>{{ item.message }}</v-list-item-subtitle>
              <v-list-item-subtitle class="mt-4">
                <div class="d-flex align-center">
                  <v-chip label small color="success">{{ item.status }}</v-chip>
                  <v-spacer></v-spacer>
                  <span class="text--secondary">{{ item.date }}</span>
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
    comments: [
      {
        avatar:
          "https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg",
        name: "James Anderson",
        message:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quod autem ex dolorem ",
        status: "Aprovado",
        date: "April 14, 2020",
      },
      {
        avatar:
          "https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg",
        name: "James Anderson",
        message:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quod autem ex dolorem ",
        status: "Aprovado",
        date: "April 14, 2020",
      },
      {
        avatar:
          "https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg",
        name: "James Anderson",
        message:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quod autem ex dolorem ",
        status: "Aprovado",
        date: "April 14, 2020",
      },
      {
        avatar:
          "https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg",
        name: "James Anderson",
        message:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quod autem ex dolorem ",
        status: "Aprovado",
        date: "April 14, 2020",
      },
      {
        avatar:
          "https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg",
        name: "James Anderson",
        message:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quod autem ex dolorem ",
        status: "Aprovado",
        date: "April 14, 2020",
      },
      {
        avatar:
          "https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg",
        name: "James Anderson",
        message:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quod autem ex dolorem ",
        status: "Aprovado",
        date: "April 14, 2020",
      },
      {
        avatar:
          "https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg",
        name: "James Anderson",
        message:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quod autem ex dolorem ",
        status: "Aprovado",
        date: "April 14, 2020",
      },
      {
        avatar:
          "https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg",
        name: "James Anderson",
        message:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quod autem ex dolorem ",
        status: "Aprovado",
        date: "April 14, 2020",
      },
      {
        avatar:
          "https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg",
        name: "James Anderson",
        message:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quod autem ex dolorem ",
        status: "Aprovado",
        date: "April 14, 2020",
      },
    ],
  }),
};
</script>

<style>
</style>