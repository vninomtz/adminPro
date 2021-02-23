<template>
  <v-card elevation="0" height="600" max-height="600">
    <span class="line"></span>
    <v-card-title>
      <div>
        <h3 class="headline">Reporte de ganancias</h3>
        <h6 class="subtitle-1">Reporte de ganancias por empleado</h6>
      </div>
    </v-card-title>
    <v-container>
      <v-row align="center" justify="center" class="blue-grey lighten-4">
        <v-col cols="9">
          <div class="d-flex flex-column">
            <span class="title">Julio 20202</span>
            <span class="subtitle-1">Ganancias totales</span>
          </div>
          <v-spacer></v-spacer>
        </v-col>
        <v-col cols="3">
          <div>
            <span class="text-sm-h6 text-md-h6 text-lg-h4 green--text"
              >$3000</span
            >
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-card-text>
      <v-data-table
        height="400"
        :headers="headers"
        :items="items"
        disable-filtering
        disable-pagination
        disable-sort
        hide-default-footer
      >
        <template v-slot:[`item.user`]="{ item }">
          <v-list-item>
            <v-list-item-avatar>
              <v-img :src="item.user.avatar"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title v-text="item.user.name"></v-list-item-title>
              <v-list-item-subtitle
                v-text="item.user.position"
              ></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </template>
        <template v-slot:[`item.priority`]="{ item }">
          <v-chip :color="item.color" dark>
            {{ item.priority }}
          </v-chip>
        </template>
      </v-data-table>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    headers: [
      {
        text: "Nombre",
        value: "user",
      },
      {
        text: "Prioridad",
        value: "priority",
      },
      {
        text: "Ganancias",
        value: "earnings",
      },
    ],
    items: [
      {
        user: {
          name: "Carla Hernández",
          avatar: "https://randomuser.me/api/portraits/women/85.jpg",
          position: "Ingeniero de Software",
        },
        priority: "High",
        earnings: "200k",
        color: "red",
      },
      {
        user: {
          name: "Carla Hernández",
          avatar: "https://randomuser.me/api/portraits/women/85.jpg",
          position: "Ingeniero de Software",
        },
        priority: "Medium",
        earnings: "200k",
        color: "blue",
      },
      {
        user: {
          name: "Carla Hernández",
          avatar: "https://randomuser.me/api/portraits/women/85.jpg",
          position: "Ingeniero de Software",
        },
        priority: "Low",
        earnings: "200k",
        color: "pink",
      },
      {
        user: {
          name: "Carla Hernández",
          avatar: "https://randomuser.me/api/portraits/women/85.jpg",
          position: "Ingeniero de Software",
        },
        priority: "Low",
        earnings: "200k",
        color: "pink",
      },
      {
        user: {
          name: "Carla Hernández",
          avatar: "https://randomuser.me/api/portraits/women/85.jpg",
          position: "Ingeniero de Software",
        },
        priority: "Low",
        earnings: "200k",
        color: "pink",
      },
      {
        user: {
          name: "Carla Hernández",
          avatar: "https://randomuser.me/api/portraits/women/85.jpg",
          position: "Ingeniero de Software",
        },
        priority: "Low",
        earnings: "200k",
        color: "pink",
      },
    ],
  }),
};
</script>

<style>
</style>