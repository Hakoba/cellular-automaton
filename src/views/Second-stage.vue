<template>
  <div>
    <h1>Второй шаг</h1>
    <v-card class="small">
      <router-link to="/">
        <v-btn class="info">Назад</v-btn>
      </router-link>
      <!-- <validation :datasets='datasets'></validation> -->

      <!-- <v-text-field
            ref='btn'
            v-model="number"
            label="Введите число"
      ></v-text-field>-->
      <!-- <pre>{{$store.state.mainArr}}</pre> -->
    </v-card>
    <!-- <v-btn class="info" @click="addColumn()">Add column</v-btn> -->
    <!-- <v-btn class="info" @click="fillData()">Randomize</v-btn> -->
    <bar-chart :chart-data="datacollection" class="small" :options="options"></bar-chart>
    <validation :data="datasets"/>
    <v-card>
      <!-- <v-btn class="info" @click="lmh()">Найти</v-btn> -->
    </v-card>
  </div>
</template>
<script>
import Validation from "@/components/Validation.vue";
import BarChart from "@/components/BarExample.js";

export default {
  components: {
    BarChart,
    Validation
  },
  data() {
    return {
      datacollection: null,
      datasets: [],
      options: {
        width: '600px',
        responsive: true, // my new default options
        maintainAspectRatio: false, // my new default options
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            },
            gridLines: {
              display: true // my new default options
            }
          }],
          xAxes: [{
            gridLines: {
              display: false
            }
          }]
        },
      }
    }
  },
  methods: {},
  beforeMount() {
    this.datasets = this.$store.state.mainArr.map(elem => {
      return (elem = {
        label: `Число №${elem.serialNumber}`,
        backgroundColor:
          elem.type == "h"
            ? "rgb(10, 200, 11)"
            : elem.type == "m"
            ? "rgb(200, 200, 11)"
            : "rgb(200, 10, 11)",
        data: [elem.item]
      });
    });
  },
  mounted() {
    this.datacollection = {
      labels: ["Временной ряд"],
      datasets: this.datasets
    };
  }
};
</script>