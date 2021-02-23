<template>
  <v-card elevation="0" height="600" max-height="600">
    <span class="line"></span>
    <v-card-title>
      <div>
        <h3 class="headline">Comentarios recientes</h3>
      </div>
    </v-card-title>
    <v-card-text>
      <v-virtual-scroll :items="comments" height="500" :item-height="100">
        <template v-slot:default="{ item }">
          <v-hover v-slot="{ hover }">
            <v-list-item link>
              <v-list-item-avatar width="60" height="60" class="mb-10">
                <v-img :src="item.avatar"></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>{{ item.name }}</v-list-item-title>
                <v-list-item-subtitle>{{ item.message }}</v-list-item-subtitle>
                <v-list-item-subtitle class="mt-4">
                  <div class="d-flex align-center">
                    <v-chip
                      label
                      small
                      color="green accent-1 success--text text--darken-1"
                      >{{ item.status }}</v-chip
                    >

                    <div v-if="hover" class="transition-fast-in-fast-out">
                      <v-icon size="20" class="mx-2" @click="() => {}"
                        >mdi-square-edit-outline</v-icon
                      >
                      <v-icon size="20" class="" @click="() => {}"
                        >mdi-check</v-icon
                      >
                      <v-icon size="20" class="mx-2" @click="() => {}"
                        >mdi-heart-outline</v-icon
                      >
                    </div>
                    <v-spacer></v-spacer>
                    <span class="text--secondary">{{ item.date }}</span>
                  </div>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-hover>
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