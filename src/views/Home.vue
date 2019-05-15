<template>
  <div class="small">
    <h1>Первый Шаг</h1>
    <v-card>
      <v-text-field ref="btn" v-model="number" label="Введите число" v-on:keyup.enter="addColumn()"></v-text-field>
       <v-btn class="info" @click="addColumn()">Add column</v-btn>
         <v-btn class="info" @click="fillRandomData()">Fill random</v-btn>
    </v-card>
    <v-card class="mb-5">
      
      <v-switch v-model="switch1" :label="`Высчитать: low, mid и high автоматичеки `"></v-switch>
      <v-layout>
        <v-flex xs10>
          <v-layout  v-if="switch1 == false">
            <v-container style='margin-left: 20px'>
            <h3>Введите наибольшее меньшее число(low) и нибольшеее среднее число (mid)</h3>
            <v-text-field v-model="low" label="Н"></v-text-field>
            <v-text-field v-model="mid" label="С"></v-text-field>
            <!-- <v-text-field v-model="high" label="В"></v-text-field> -->
            </v-container>
          </v-layout>
        </v-flex>
      </v-layout>
       <!-- <router-link to="/validation">
      <v-btn class="info">Валидация</v-btn>
    </router-link> -->
     <v-btn class="info" @click="lmh()">Верефикация</v-btn>
    </v-card>
    <!-- <v-btn class="info" @click="fillData()">Randomize</v-btn> -->
  
    <bar-chart class="small" :chart-data="datacollection" :options="options"></bar-chart>
    <!-- <bar-chart :chart-data="datacollection"></bar-chart> -->
  </div>
</template>

<script>
import BarChart from "@/components/BarExample.js";

export default {
  components: {
    BarChart
  },
  data() {
    return {
      //состояния
      low: null,
      mid: null,
      // high: null,
      switch1: true,
      datacollection: null,
      number: "",
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
      },
      datasets: [],
      datasetsEx: [
        {
          label: "f",
          backgroundColor: "#1a12fa",
          data: [this.getRandomInt()]
        },
        {
          label: "f",
          backgroundColor: "#1a12fa",
          data: [this.getRandomInt()]
        },
        {
          label: "f",
          backgroundColor: "#1a12fa",
          data: [this.getRandomInt()]
        },
        {
          label: "f",
          backgroundColor: "#1a12fa",
          data: [this.getRandomInt()]
        },
        {
          label: "f",
          backgroundColor: "#1a12fa",
          data: [this.getRandomInt()]
        },
        {
          label: "f",
          backgroundColor: "#1a12fa",
          data: [this.getRandomInt()]
        },
        {
          label: "f",
          backgroundColor: "#1a12fa",
          data: [this.getRandomInt()]
        },
        {
          label: "f",
          backgroundColor: "#1a12fa",
          data: [this.getRandomInt()]
        },
        {
          label: "f",
          backgroundColor: "#1a12fa",
          data: [this.getRandomInt()]
        },
        {
          label: "f",
          backgroundColor: "#1a12fa",
          data: [this.getRandomInt()]
        },
        {
          label: "f",
          backgroundColor: "#1a12fa",
          data: [this.getRandomInt()]
        },
        {
          label: "f",
          backgroundColor: "#1a12fa",
          data: [this.getRandomInt()]
        },
        {
          label: "f",
          backgroundColor: "#1a12fa",
          data: [this.getRandomInt()]
        },
        {
          label: "f",
          backgroundColor: "#1a12fa",
          data: [this.getRandomInt()]
        },
        {
          label: "f",
          backgroundColor: "#1a12fa",
          data: [this.getRandomInt()]
        },
        {
          label: "f",
          backgroundColor: "#1a12fa",
          data: [this.getRandomInt()]
        },
        {
          label: "f",
          backgroundColor: "#1a12fa",
          data: [this.getRandomInt()]
        },
        {
          label: "f",
          backgroundColor: "#1a12fa",
          data: [this.getRandomInt()]
        },
        {
          label: "f",
          backgroundColor: "#1a12fa",
          data: [this.getRandomInt()]
        },
        {
          label: "f",
          backgroundColor: "#1a12fa",
          data: [this.getRandomInt()]
        },
        {
          label: "f",
          backgroundColor: "#1a12fa",
          data: [this.getRandomInt()]
        },
        {
          label: "f",
          backgroundColor: "#1a12fa",
          data: [this.getRandomInt()]
        },
        {
          label: "f",
          backgroundColor: "#1a12fa",
          data: [this.getRandomInt()]
        },
        {
          label: "f",
          backgroundColor: "#1a12fa",
          data: [this.getRandomInt()]
        },
        {
          label: "f",
          backgroundColor: "#1a12fa",
          data: [this.getRandomInt()]
        },
        {
          label: "f",
          backgroundColor: "#1a12fa",
          data: [this.getRandomInt()]
        },
        {
          label: "f",
          backgroundColor: "#1a12fa",
          data: [this.getRandomInt()]
        },
        {
          label: "f",
          backgroundColor: "#1a12fa",
          data: [this.getRandomInt()]
        },
        {
          label: "f",
          backgroundColor: "#1a12fa",
          data: [this.getRandomInt()]
        },
        {
          label: "f",
          backgroundColor: "#1a12fa",
          data: [this.getRandomInt()]
        },
        {
          label: "f",
          backgroundColor: "#1a12fa",
          data: [this.getRandomInt()]
        },
        {
          label: "f",
          backgroundColor: "#1a12fa",
          data: [this.getRandomInt()]
        },
        {
          label: "f",
          backgroundColor: "#1a12fa",
          data: [this.getRandomInt()]
        },
        {
          label: "f",
          backgroundColor: "#1a12fa",
          data: [this.getRandomInt()]
        },
        {
          label: "f",
          backgroundColor: "#1a12fa",
          data: [this.getRandomInt()]
        },
        {
          label: "f",
          backgroundColor: "#1a12fa",
          data: [this.getRandomInt()]
        },
        {
          label: "f",
          backgroundColor: "#1a12fa",
          data: [this.getRandomInt()]
        },
        {
          label: "f",
          backgroundColor: "#1a12fa",
          data: [this.getRandomInt()]
        },
        {
          label: "f",
          backgroundColor: "#1a12fa",
          data: [this.getRandomInt()]
        },
        {
          label: "f",
          backgroundColor: "#1a12fa",
          data: [this.getRandomInt()]
        },
        {
          label: "f",
          backgroundColor: "#1a12fa",
          data: [this.getRandomInt()]
        },
        {
          label: "f",
          backgroundColor: "#1a12fa",
          data: [this.getRandomInt()]
        },
        {
          label: "f",
          backgroundColor: "#1a12fa",
          data: [this.getRandomInt()]
        },
        {
          label: "f",
          backgroundColor: "#1a12fa",
          data: [this.getRandomInt()]
        },
        {
          label: "f",
          backgroundColor: "#1a12fa",
          data: [this.getRandomInt()]
        },
        {
          label: "f",
          backgroundColor: "#1a12fa",
          data: [this.getRandomInt()]
        },
        {
          label: "f",
          backgroundColor: "#1a12fa",
          data: [this.getRandomInt()]
        },
        {
          label: "f",
          backgroundColor: "#1a12fa",
          data: [this.getRandomInt()]
        },
        {
          label: "f",
          backgroundColor: "#1a12fa",
          data: [this.getRandomInt()]
        },
        {
          label: "f",
          backgroundColor: "#1a12fa",
          data: [this.getRandomInt()]
        },
        {
          label: "f",
          backgroundColor: "#1a12fa",
          data: [this.getRandomInt()]
        },
        {
          label: "f",
          backgroundColor: "#1a12fa",
          data: [this.getRandomInt()]
        },
        {
          label: "f",
          backgroundColor: "#1a12fa",
          data: [this.getRandomInt()]
        },
        {
          label: "f",
          backgroundColor: "#1a12fa",
          data: [this.getRandomInt()]
        },
        {
          label: "f",
          backgroundColor: "#1a12fa",
          data: [this.getRandomInt()]
        },
        {
          label: "f",
          backgroundColor: "#1a12fa",
          data: [this.getRandomInt()]
        },
        {
          label: "f",
          backgroundColor: "#1a12fa",
          data: [this.getRandomInt()]
        },
        {
          label: "f",
          backgroundColor: "#1a12fa",
          data: [this.getRandomInt()]
        },
        {
          label: "f",
          backgroundColor: "#1a12fa",
          data: [this.getRandomInt()]
        },
        {
          label: "f",
          backgroundColor: "#1a12fa",
          data: [this.getRandomInt()]
        },
        {
          label: "f",
          backgroundColor: "#1a12fa",
          data: [this.getRandomInt()]
        },
        {
          label: "f",
          backgroundColor: "#1a12fa",
          data: [this.getRandomInt()]
        },
        {
          label: "f",
          backgroundColor: "#1a12fa",
          data: [this.getRandomInt()]
        },
        {
          label: "f",
          backgroundColor: "#1a12fa",
          data: [this.getRandomInt()]
        },
        {
          label: "f",
          backgroundColor: "#1a12fa",
          data: [this.getRandomInt()]
        },
        {
          label: "f",
          backgroundColor: "#1a12fa",
          data: [this.getRandomInt()]
        },
        {
          label: "f",
          backgroundColor: "#1a12fa",
          data: [this.getRandomInt()]
        },
        {
          label: "f",
          backgroundColor: "#1a12fa",
          data: [this.getRandomInt()]
        },
        {
          label: "f",
          backgroundColor: "#1a12fa",
          data: [this.getRandomInt()]
        },
        {
          label: "f",
          backgroundColor: "#1a12fa",
          data: [this.getRandomInt()]
        },
        {
          label: "f",
          backgroundColor: "#1a12fa",
          data: [this.getRandomInt()]
        },
        {
          label: "f",
          backgroundColor: "#1a12fa",
          data: [this.getRandomInt()]
        },
        {
          label: "f",
          backgroundColor: "#1a12fa",
          data: [this.getRandomInt()]
        }
      ],
      arrayOfNumber: [],
      counter: 0,
      finalArray: []
    };
  },
  mounted() {
    this.fillData();
  },
  methods: {
    fillData() {
      this.datacollection = {
        labels: ["Временной ряд"],
        datasets: this.datasets
      };
    },
    fillRandomData(){
      this.datasets = this.datasetsEx;
      this.fillData();
    },
    randomColor() {
      let x = Math.floor(Math.random() * 256);
      let y = Math.floor(Math.random() * 256);
      let z = Math.floor(Math.random() * 256);
      return "rgb(" + x + "," + y + "," + z + ")";
    },
    lmh() {
      this.datasets.map(item => this.arrayOfNumber.push(item.data[0]));
      let min, max, average;
       let cntr = 0;
      if (this.switch1 === true) {
        min = Math.min.apply(null, this.arrayOfNumber);
        max = Math.max.apply(null, this.arrayOfNumber);
        average = (max - min) / 3;
        
      for (const item of this.arrayOfNumber) {
        if (item <= max - average && item >= +min + average) {
          this.finalArray.push({ item, type: "m", serialNumber: cntr });
        } else if (item <= +min + average) {
          this.finalArray.push({ item, type: "l", serialNumber: cntr });
        } else {
          this.finalArray.push({ item, type: "h", serialNumber: cntr });
        }
        cntr++;
      }
      } else {
        min = this.low;
        average = this.mid;
        // max = this.high;
        
      for (const item of this.arrayOfNumber) {
        if (item <= +min) {
          this.finalArray.push({ item, type: "l", serialNumber: cntr });
        } else if (item > +min && item <= +average) {
          this.finalArray.push({ item, type: "m", serialNumber: cntr });
        } else {
          this.finalArray.push({ item, type: "h", serialNumber: cntr });
        }
        cntr++;
      }
      }
 
      this.$store.commit("setMainArr", this.finalArray);
      this.$router.push("/second");
    },
    getRandomInt() {
      return Math.floor(12 + Math.random() * (30 + 1 - 12));
    },
    addColumn() {
      this.counter++;
      this.datasets.push({
        label: `Число № ${this.counter}`,
        backgroundColor: this.randomColor(),
        data: [parseInt(this.number)]
      });
      this.number = "";
      this.fillData();
      this.$refs.btn.focus();
    }
  }
};
</script>

<style>
.small {
  max-width: 600px;
  margin: 30px auto;
  /* color: rgb(17, 14, 2); */
}
</style>