<template>
  <v-card elevation="0">
    <span class="line"></span>
    <v-card-title>
      <div>
        <h3 class="headline">Reporte de ganancias</h3>
        <h6 class="subtitle-1">Reporte de ganancias por empleado</h6>
      </div>
    </v-card-title>
    <v-card-text>
      <div class="ma-2">
        <v-btn text class="mr-4 primary" @click="showSelected"
          >Descargar en csv</v-btn
        >
        <v-btn text class="primary" @click="download"
          >Descargar en excel
        </v-btn>
      </div>
      <v-data-table
        :headers="headers"
        :items="items"
        v-model="selected"
        show-select
        @click:row="updateSecondTable"
      >
        <template v-slot:[`item.actions`]="{}">
          <v-menu bottom left>
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon v-bind="attrs" v-on="on">
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item link v-for="(item, index) in options" :key="index">
                <v-list-item-title>{{ item }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </template>

        <template v-slot:[`item.priority`]="{ item }">
          <v-combobox
            class="comboBox"
            flat
            dense
            solo
            hide-selected
            :items="comboItems"
            :value="item.priority"
          >
          </v-combobox>
        </template>
      </v-data-table>
    </v-card-text>
    <v-card-text>
      <custom-table
        :user="getUser"
        :headers="headers2"
        :items="getItems"
      ></custom-table>
    </v-card-text>
  </v-card>
</template>

<script>
import CustomTable from "@/components/ui/CustomTable";
import XLSX from "xlsx";

const downloadCsv = (data) => {
  var hiddenElement = document.createElement("a");
  hiddenElement.href = "data:text/csv;charset=utf-8," + encodeURI(data);
  hiddenElement.target = "_blank";
  hiddenElement.download = "Empleados.csv";
  hiddenElement.click();
};
const downloadExcel = (data, title) => {
  var worksheet = XLSX.utils.json_to_sheet(data);
  var new_workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(new_workbook, worksheet, "Hoja 1");
  var name = `${title}.xlsb`;
  XLSX.writeFile(new_workbook, name);
};

export default {
  name: "MasterTable",
  components: {
    "custom-table": CustomTable,
  },
  data: () => ({
    comboItems: ["High", "Medium", "Low"],
    options: ["Editar", "Eliminar", "Ver detalle"],
    selected: [],
    headers: [
      {
        text: "Nombre",
        value: "user.name",
      },
      {
        text: "Prioridad",
        value: "priority",
      },
      {
        text: "Ganancias",
        value: "earnings",
      },
      {
        text: "Más opciones",
        value: "actions",
      },
    ],
    items: [
      {
        id: "1",
        user: {
          name: "Carlos Hernández",
          avatar: "https://randomuser.me/api/portraits/men/86.jpg",
          position: "Ingeniero de Software",
          languages: [
            {
              name: "Javascript",
              level: "Senior",
              experience: "5 años",
              salary: "30000.848",
            },
            {
              name: "Python",
              level: "Senior",
              experience: "4 años",
              salary: "35000.524",
            },
            {
              name: "Go",
              level: "Junior",
              experience: "1 años",
              salary: "23000.4558",
            },
          ],
        },
        priority: "High",
        earnings: "200k",
        color: "red",
      },
      {
        id: "2",
        user: {
          name: "Kevin Misael",
          avatar: "https://randomuser.me/api/portraits/men/87.jpg",
          position: "Ingeniero de Software",
          languages: [
            {
              name: "Javascript",
              level: "Senior",
              experience: "4 años",
              salary: "30k",
            },
            {
              name: "Kotlin",
              level: "Senior",
              experience: "4 años",
              salary: "35k",
            },
            {
              name: "Php",
              level: "Junior",
              experience: "1 años",
              salary: "25k",
            },
          ],
        },
        priority: "High",
        earnings: "200k",
        color: "red",
      },
      {
        id: "3",
        user: {
          name: "Carla Hernández",
          avatar: "https://randomuser.me/api/portraits/women/86.jpg",
          position: "Ingeniero de Software",
          languages: [
            {
              name: "Ruby",
              level: "Senior",
              experience: "5 años",
              salary: "30k",
            },
            {
              name: "Java",
              level: "Senior",
              experience: "4 años",
              salary: "35k",
            },
            {
              name: "Python",
              level: "Junior",
              experience: "1 año",
              salary: "25k",
            },
          ],
        },
        priority: "High",
        earnings: "200k",
        color: "red",
      },
    ],
    headers2: [
      {
        text: "Lenguaje",
        value: "name",
      },
      {
        text: "Nivel",
        value: "level",
      },
      {
        text: "Experiencia",
        value: "experience",
      },
      {
        text: "Salario",
        value: "salary",
      },
    ],
    items2: [],
    userItem: null,
  }),
  methods: {
    updateSecondTable(item) {
      this.items2 = item.user.languages;
      this.userItem = item.user;
    },
    showSelected() {
      if (this.selected.length === 0) {
        alert("No se han seleccionado datos");
        return;
      }
      const array = [Object.keys(this.selected[0])].concat(this.selected);
      const csv = array
        .map((it) => {
          var data = Object.values(it)
            .map((value) => {
              return value;
            })
            .toString();
          return data;
        })
        .join("\n");
      downloadCsv(csv);
    },
    download() {
      if (this.selected.length === 0) {
        alert("No se han seleccionado datos");
        return;
      }
      downloadExcel(this.selected, "DatosEnExcel");
    },
  },
  computed: {
    getItems() {
      return this.items2;
    },
    getUser() {
      return this.userItem;
    },
  },
};
</script>

<style>
.comboBox {
  width: 120px;
  height: 50px;
}
</style>