<template>
  <v-dialog v-model="dialog" width="1000">
    <template v-slot:activator="{ on }">
      <v-btn color="primary" dark v-on="on">Пресеты</v-btn>
    </template>

    <v-card>
      <v-card-title style="background: #333" primary-title>Меню Пресетов</v-card-title>

      <v-card-text>
        <v-data-table :headers="headers" :items="presets" :items-per-page="5" class="elevation-1">
          <template v-slot:item.dateFrom="{ item }">
            <!-- <v-simple-checkbox v-model="item.glutenfree" disabled></v-simple-checkbox> -->
            <v-dialog
              ref="dialog"
              v-model="modal"
              :return-value.sync="item.dateFrom"
              persistent
              width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="item.dateFrom"
                  label="Дата"
                  prepend-icon="event"
                  readonly
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="item.dateTo" scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="modal = false">Отмена</v-btn>
                <v-btn text color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
              </v-date-picker>
            </v-dialog>
          </template>

          <template v-slot:item.dateTo="{ item }">
            <v-dialog
              ref="dialog"
              v-model="modal"
              :return-value.sync="item.dateTo"
              persistent
              width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="item.dateTo"
                  label="Дата"
                  prepend-icon="event"
                  readonly
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="item.dateTo" scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="modal = false">Отмена</v-btn>
                <v-btn text color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
              </v-date-picker>
            </v-dialog>
          </template>
          <template v-slot:item.status="{ item }">
            <span
              :style="{color: item.status == 'active' ? '#41B883': '#82B1FF' }"
            >{{item.status == 'active' ? 'Aктивна': 'Остановлена'}}</span>
          </template>
          <template v-slot:item.permission="{ item }">
            <v-btn class="mx-2" fab small color="accent">{{item.permission}}</v-btn>
          </template>
        </v-data-table>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="dialog = false">Отмена</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      modal: false,
      headers: [
        {
          text: "Название",
          value: "name"
        },
        { sortable: false, text: "Статус", value: "status" },
        { sortable: false, text: "Файл", value: "file" },
        { sortable: false, text: "Создатель", value: "userName" },
        { sortable: false, text: "Уровень доступа", value: "permission" },
        { sortable: false, text: "От", value: "dateFrom" },
        { sortable: false, text: "До", value: "dateTo" }
      ],
      presets: [
        {
          name: "google.com",
          status: "active",
          file: 9.0,
          permission: 1,
          userName: "demo",
          dateFrom: "2020-06-05",
          dateTo: "2020-06-16"
        },
        {
          name: "Ext // temp",
          status: "stopped",
          file: 16.0,
          userName: "demo",
          permission: 2,
          dateFrom: "2020-06-07",
          dateTo: "2020-06-10"
        },
        {
          name: "Deno // primary",
          status: "stopped",
          file: 3.7,
          userName: "demo",
          permission: 1,
          dateFrom: "2020-05-07",
          dateTo: "2020-05-09"
        },
        {
          name: "Deno // secondary",
          status: "active",
          file: 16.0,
          userName: "demo",
          permission: 1,
          dateFrom: "2020-05-26",
          dateTo: "2020-05-29"
        },
        {
          name: "Тестовая",
          status: "active",
          file: 0.0,
          userName: "demo",
          permission: 1,
          dateFrom: "2020-05-27",
          dateTo: "2020-06-02"
        },
        {
          name: "Lollipop",
          status: "active",
          file: 0.2,
          userName: "demo",
          permission: 1,
          dateFrom: "2020-05-27",
          dateTo: "2020-06-12"
        },
        {
          name: "Honeycomb",
          status: "active",
          file: 3.2,
          userName: "demo",
          permission: 2,
          dateFrom: "2020-06-07",
          dateTo: "2020-09-19"
        },
        {
          name: "Donut",
          status: "active",
          file: 25.0,
          userName: "demo",
          permission: 0,
          dateFrom: "2020-05-07",
          dateTo: "2020-06-04"
        },
        {
          name: "KitKat",
          status: "active",
          file: 26.0,
          userName: "demo",
          permission: 4,
          dateFrom: "2020-05-27",
          dateTo: "2020-08-19"
        }
      ]
    };
  }
};
</script>
