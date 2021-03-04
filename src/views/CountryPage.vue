<template>
  <v-container fluid class="px-8">
    <v-row>
      <v-col cols="12">
        <div class="d-flex align-center">
          <v-icon>mdi-star-outline</v-icon>
          <span>Paises</span>
        </div>
      </v-col>
      <v-col cols="12">
        <v-card>
          <v-card-title>
            <span>Busqueda</span>
            <v-spacer></v-spacer>
            <v-icon>mdi-chevron-down</v-icon>
          </v-card-title>
          <v-card-text style="min-height: 60px">
            <v-row>
              <v-col cols="2" v-for="(field, index) in listFields" :key="index">
                <keep-alive>
                  <component :is="field.name" />
                </keep-alive>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-row align="center" justify="end">
              <v-col cols="auto">
                <v-btn elevation="0" rounded small width="150" class="primary"
                  >Buscar</v-btn
                >
              </v-col>
              <v-col cols="auto">
                <v-btn text>Reestablecer</v-btn>
              </v-col>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="7">
        <v-row align="end" justify="start">
          <v-col cols="auto" md="auto">
            <span class="text--secondary"
              ><strong>No. de registros: 4</strong></span
            >
          </v-col>
          <v-col cols="auto" md="auto">
            <v-btn elevation="0" rounded small width="150" class="primary"
              >Nuevo país</v-btn
            >
          </v-col>
          <v-col cols="auto" md="auto">
            <div class="d-flex">
              <v-btn text>
                <v-icon left>mdi-microsoft-excel</v-icon>
                Exportar a excel
              </v-btn>
              <v-menu bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn icon v-bind="attrs" v-on="on">
                    <v-icon>mdi-chevron-down</v-icon>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item link>
                    <v-list-item-title>Descargar en CSV</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12">
        <v-data-table
          height="400"
          :headers="headers"
          :items="productos"
          hide-default-footer
          class="customTable"
          fixed-header
        >
          <template v-slot:[`body.append`]>
            <tr class="sticky text-center">
              <td><strong>Totales</strong></td>
              <td><strong>188848</strong></td>
              <td><strong>188848</strong></td>
              <td><strong>188848</strong></td>
              <td><strong>188848</strong></td>
              <td><strong>188848</strong></td>
              <td><strong>188848</strong></td>
              <td><strong>188848</strong></td>
            </tr>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  components: {
    "combo-custom": () => import("@/components/ui/search/ComboBox"),
    "text-custom": () => import("@/components/ui/search/TextField"),
  },
  data: () => ({
    headers: [
      {
        text: "Acciones",
        value: "acciones",
        align: "center",
        class: "blue-grey lighten-4 text-center",
        sortable: false,
      },
      {
        text: "Tipo de producto",
        value: "tipo",
        align: "center",
        class: "blue-grey lighten-4 text-center",
        sortable: false,
        divider: false,
      },
      {
        text: "Fecha de vigencia",
        value: "fecha",
        align: "center",
        class: "blue-grey lighten-4 text-center",
        sortable: false,
      },
      {
        text: "Folio de nuevo crédito",
        value: "folio",
        align: "center",
        class: "blue-grey lighten-4 text-center",
        sortable: false,
      },
      {
        text: "Clave refinanciamiento",
        value: "clave",
        align: "center",
        class: "blue-grey lighten-4 text-center",
        sortable: false,
      },
      {
        text: "Monto a depositar",
        value: "monto",
        align: "center",
        class: "blue-grey lighten-4 text-center",
        sortable: false,
      },
      {
        text: "Plazo",
        value: "plazo",
        align: "center",
        class: "blue-grey lighten-4 text-center",
        sortable: false,
      },
      {
        text: "Descuento periodo",
        value: "descuento",
        align: "center",
        class: "blue-grey lighten-4 text-center",
        sortable: false,
      },
    ],
    productos: [
      {
        tipo: "Segundo crédito",
        fecha: "18/12/2020",
        folio: "45646546",
        clave: "000321123",
        monto: "9928.00",
        plazo: "45",
        descuento: "550.00",
      },
      {
        tipo: "Segundo crédito",
        fecha: "18/12/2020",
        folio: "45646546",
        clave: "000321123",
        monto: "9928.00",
        plazo: "45",
        descuento: "550.00",
      },
      {
        tipo: "Segundo crédito",
        fecha: "18/12/2020",
        folio: "45646546",
        clave: "000321123",
        monto: "9928.00",
        plazo: "45",
        descuento: "550.00",
      },
      {
        tipo: "Segundo crédito",
        fecha: "18/12/2020",
        folio: "45646546",
        clave: "000321123",
        monto: "9928.00",
        plazo: "45",
        descuento: "550.00",
      },
      {
        tipo: "Segundo crédito",
        fecha: "18/12/2020",
        folio: "45646546",
        clave: "000321123",
        monto: "9928.00",
        plazo: "45",
        descuento: "550.00",
      },
      {
        tipo: "Segundo crédito",
        fecha: "18/12/2020",
        folio: "45646546",
        clave: "000321123",
        monto: "9928.00",
        plazo: "45",
        descuento: "550.00",
      },
      {
        tipo: "Segundo crédito",
        fecha: "18/12/2020",
        folio: "45646546",
        clave: "000321123",
        monto: "9928.00",
        plazo: "45",
        descuento: "550.00",
      },
      {
        tipo: "Segundo crédito",
        fecha: "18/12/2020",
        folio: "45646546",
        clave: "000321123",
        monto: "9928.00",
        plazo: "45",
        descuento: "550.00",
      },
      {
        tipo: "Segundo crédito",
        fecha: "18/12/2020",
        folio: "45646546",
        clave: "000321123",
        monto: "9928.00",
        plazo: "45",
        descuento: "550.00",
      },
    ],
    listFields: [
      {
        name: "combo-custom",
      },
      {
        name: "text-custom",
      },
      {
        name: "combo-custom",
      },
      {
        name: "text-custom",
      },
      {
        name: "combo-custom",
      },
      {
        name: "text-custom",
      },
    ],
  }),
  computed: {
    getComponent(item) {
      console.log(item);
      console.log("Entro");
      return () => import("@/components/ui/search/" + "TextField");
    },
  },
};
</script>
<style>
.customTable table td {
  border-bottom: none !important;
}
.sticky td {
  position: sticky;
  background-color: white;
  bottom: 0;
}
</style>