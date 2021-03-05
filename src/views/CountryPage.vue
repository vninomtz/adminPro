<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12" class="white" v-if="!isMobile">
        <v-row align="center" justify="space-around">
          <v-col cols="12" lg="4">
            <v-card elevation="0" dark color="primary" class="rounded-pill">
              <v-card-text class="text-center">
                <div class="subtitle-1">
                  <span class="white--text"
                    >Semana de venta actual <strong>202109</strong></span
                  >
                </div>
                <div class="subtitle-1">
                  <span class="white--text">
                    Del <strong>26/02/2021 21:02:48</strong> Al
                    <strong>05/03/2021 23:05:00</strong></span
                  >
                </div>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" lg="4">
            <v-card elevation="0" dark color="green" class="rounded-pill">
              <v-card-text class="text-center">
                <div class="subtitle-1">
                  <span class="white--text"
                    >Semana de venta actual <strong>202109</strong></span
                  >
                </div>
                <div class="subtitle-1">
                  <span class="white--text">
                    Del <strong>26/02/2021 21:02:48</strong> Al
                    <strong>05/03/2021 23:05:00</strong></span
                  >
                </div>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" lg="4">
            <v-card elevation="0" dark color="red" class="rounded-pill">
              <v-card-text class="text-center">
                <div class="subtitle-1">
                  <span class="white--text"
                    >Semana de venta actual <strong>202109</strong></span
                  >
                </div>
                <div class="subtitle-1">
                  <span class="white--text">
                    Del <strong>26/02/2021 21:02:48</strong> Al
                    <strong>05/03/2021 23:05:00</strong></span
                  >
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="11">
        <div class="d-flex align-center">
          <v-btn icon @click="favorito = !favorito">
            <v-icon v-if="!favorito">mdi-star-outline</v-icon>
            <v-icon v-if="favorito">mdi-star</v-icon>
          </v-btn>
          <span>Paises</span>
        </div>
      </v-col>
      <v-col cols="11">
        <v-card elevation="0">
          <v-expansion-panels flat>
            <v-expansion-panel>
              <v-expansion-panel-header>
                <v-card-title>
                  <span>Busqueda</span>
                </v-card-title>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-card-text>
                  <v-row align="center" justify="start">
                    <v-col
                      cols="12"
                      md="3"
                      v-for="(field, index) in listFields"
                      :key="index"
                    >
                      <keep-alive>
                        <component :is="field.name" />
                      </keep-alive>
                    </v-col>
                  </v-row>
                </v-card-text>
                <v-card-actions>
                  <v-row align="center" justify="end">
                    <v-col cols="auto">
                      <v-btn
                        elevation="0"
                        rounded
                        small
                        width="150"
                        class="primary"
                        >Buscar</v-btn
                      >
                    </v-col>
                    <v-col cols="auto">
                      <v-btn text>Reestablecer</v-btn>
                    </v-col>
                  </v-row>
                </v-card-actions>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-card>
      </v-col>
      <v-col cols="11">
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
                    <v-list-item-title>Exportar a CSV</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="11">
        <v-data-table
          height="400"
          :headers="headers"
          :items="productos"
          hide-default-footer
          class="customTable"
          :fixed-header="!isMobile"
        >
          <template v-slot:[`body.append`] v-if="!isMobile">
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
          <template v-slot:footer>
            <v-card
              elevation="0"
              v-if="isMobile"
              style="border-top: thin solid rgb(245, 242, 242)"
            >
              <v-card-title>Totales</v-card-title>
              <v-card-text>
                <div class="d-flex">
                  <span><strong>Tipo</strong></span>
                  <v-spacer></v-spacer>
                  <span>65295</span>
                </div>
                <div class="d-flex">
                  <span><strong>Costo</strong></span>
                  <v-spacer></v-spacer>
                  <span>65295</span>
                </div>
                <div class="d-flex">
                  <span><strong>Costo</strong></span>
                  <v-spacer></v-spacer>
                  <span>65295</span>
                </div>
              </v-card-text>
            </v-card>
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
    "radio-custom": () => import("@/components/ui/search/RadioButton"),
    "date-custom": () => import("@/components/ui/search/DateField"),
  },
  data: () => ({
    favorito: false,
    headers: [
      {
        text: "Acciones",
        value: "acciones",
        align: "center",
        sortable: false,
      },
      {
        text: "Tipo de producto",
        value: "tipo",
        align: "center",
        sortable: false,
        divider: false,
      },
      {
        text: "Fecha de vigencia",
        value: "fecha",
        align: "center",
        sortable: false,
      },
      {
        text: "Folio de nuevo crédito",
        value: "folio",
        align: "center",
        sortable: false,
      },
      {
        text: "Clave refinanciamiento",
        value: "clave",
        align: "center",
        sortable: false,
      },
      {
        text: "Monto a depositar",
        value: "monto",
        align: "center",
        sortable: false,
      },
      {
        text: "Plazo",
        value: "plazo",
        align: "center",
        sortable: false,
      },
      {
        text: "Descuento periodo",
        value: "descuento",
        align: "center",
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
        name: "radio-custom",
      },
      {
        name: "date-custom",
      },
    ],
  }),
  computed: {
    getComponent(item) {
      console.log(item);
      console.log("Entro");
      return () => import("@/components/ui/search/" + "TextField");
    },
    isMobile() {
      if (this.$vuetify.breakpoint.name === "xs") {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>
<style scoped>
.customTable /deep/ table td {
  border-bottom: thin solid rgb(255, 249, 249) !important;
}
.customTable /deep/ table th {
  background-color: #eae9f1 !important;
  color: rgb(41, 41, 41) !important;
}
.sticky /deep/ td {
  position: sticky;
  background-color: white;
  bottom: 0;
  border-top: thin solid rgb(245, 242, 242);
}
</style>