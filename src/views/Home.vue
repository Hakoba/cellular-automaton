<template>
  <div class="small">
    <h1>Первый Шаг</h1>
    <v-card>
      <v-text-field ref="btn" v-model="number" label="Введите число" v-on:keyup.enter="addColumn()"></v-text-field>
       <v-btn class="info" @click="addColumn()">Add column</v-btn>
         <v-btn class="info" @click="fillRandomData()">Fill random</v-btn>
          <v-btn class="info" @click="saveInLS()">Save in local storage</v-btn>
           <v-btn class="info" @click="loadFromLS()">Load from local storage</v-btn>
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
    dtst: [],
    datasets: [],
     // datasetsEx: [
      //   {
      //     label: "f",
      //     backgroundColor: "#1a12fa",
      //     data: [this.getRandomInt()]
      //   },
      //   {
      //     label: "f",
      //     backgroundColor: "#1a12fa",
      //     data: [this.getRandomInt()]
      //   },
      //   {
      //     label: "f",
      //     backgroundColor: "#1a12fa",
      //     data: [this.getRandomInt()]
      //   },
      //   {
      //     label: "f",
      //     backgroundColor: "#1a12fa",
      //     data: [this.getRandomInt()]
      //   },
      //   {
      //     label: "f",
      //     backgroundColor: "#1a12fa",
      //     data: [this.getRandomInt()]
      //   },
      //   {
      //     label: "f",
      //     backgroundColor: "#1a12fa",
      //     data: [this.getRandomInt()]
      //   },
      //   {
      //     label: "f",
      //     backgroundColor: "#1a12fa",
      //     data: [this.getRandomInt()]
      //   },
      //   {
      //     label: "f",
      //     backgroundColor: "#1a12fa",
      //     data: [this.getRandomInt()]
      //   },
      //   {
      //     label: "f",
      //     backgroundColor: "#1a12fa",
      //     data: [this.getRandomInt()]
      //   },
      //   {
      //     label: "f",
      //     backgroundColor: "#1a12fa",
      //     data: [this.getRandomInt()]
      //   },
      //   {
      //     label: "f",
      //     backgroundColor: "#1a12fa",
      //     data: [this.getRandomInt()]
      //   },
      //   {
      //     label: "f",
      //     backgroundColor: "#1a12fa",
      //     data: [this.getRandomInt()]
      //   },
      //   {
      //     label: "f",
      //     backgroundColor: "#1a12fa",
      //     data: [this.getRandomInt()]
      //   },
      //   {
      //     label: "f",
      //     backgroundColor: "#1a12fa",
      //     data: [this.getRandomInt()]
      //   },
      //   {
      //     label: "f",
      //     backgroundColor: "#1a12fa",
      //     data: [this.getRandomInt()]
      //   },
      //   {
      //     label: "f",
      //     backgroundColor: "#1a12fa",
      //     data: [this.getRandomInt()]
      //   },
      //   {
      //     label: "f",
      //     backgroundColor: "#1a12fa",
      //     data: [this.getRandomInt()]
      //   },
      //   {
      //     label: "f",
      //     backgroundColor: "#1a12fa",
      //     data: [this.getRandomInt()]
      //   },
      //   {
      //     label: "f",
      //     backgroundColor: "#1a12fa",
      //     data: [this.getRandomInt()]
      //   },
      //   {
      //     label: "f",
      //     backgroundColor: "#1a12fa",
      //     data: [this.getRandomInt()]
      //   },
      //   {
      //     label: "f",
      //     backgroundColor: "#1a12fa",
      //     data: [this.getRandomInt()]
      //   },
      //   {
      //     label: "f",
      //     backgroundColor: "#1a12fa",
      //     data: [this.getRandomInt()]
      //   },
      //   {
      //     label: "f",
      //     backgroundColor: "#1a12fa",
      //     data: [this.getRandomInt()]
      //   },
      //   {
      //     label: "f",
      //     backgroundColor: "#1a12fa",
      //     data: [this.getRandomInt()]
      //   },
      //   {
      //     label: "f",
      //     backgroundColor: "#1a12fa",
      //     data: [this.getRandomInt()]
      //   },
      //   {
      //     label: "f",
      //     backgroundColor: "#1a12fa",
      //     data: [this.getRandomInt()]
      //   },
      //   {
      //     label: "f",
      //     backgroundColor: "#1a12fa",
      //     data: [this.getRandomInt()]
      //   },
      //   {
      //     label: "f",
      //     backgroundColor: "#1a12fa",
      //     data: [this.getRandomInt()]
      //   },
      //   {
      //     label: "f",
      //     backgroundColor: "#1a12fa",
      //     data: [this.getRandomInt()]
      //   },
      //   {
      //     label: "f",
      //     backgroundColor: "#1a12fa",
      //     data: [this.getRandomInt()]
      //   },
      //   {
      //     label: "f",
      //     backgroundColor: "#1a12fa",
      //     data: [this.getRandomInt()]
      //   },
      //   {
      //     label: "f",
      //     backgroundColor: "#1a12fa",
      //     data: [this.getRandomInt()]
      //   },
      //   {
      //     label: "f",
      //     backgroundColor: "#1a12fa",
      //     data: [this.getRandomInt()]
      //   },
      //   {
      //     label: "f",
      //     backgroundColor: "#1a12fa",
      //     data: [this.getRandomInt()]
      //   },
      //   {
      //     label: "f",
      //     backgroundColor: "#1a12fa",
      //     data: [this.getRandomInt()]
      //   },
      //   {
      //     label: "f",
      //     backgroundColor: "#1a12fa",
      //     data: [this.getRandomInt()]
      //   },
      //   {
      //     label: "f",
      //     backgroundColor: "#1a12fa",
      //     data: [this.getRandomInt()]
      //   },
      //   {
      //     label: "f",
      //     backgroundColor: "#1a12fa",
      //     data: [this.getRandomInt()]
      //   },
      //   {
      //     label: "f",
      //     backgroundColor: "#1a12fa",
      //     data: [this.getRandomInt()]
      //   },
      //   {
      //     label: "f",
      //     backgroundColor: "#1a12fa",
      //     data: [this.getRandomInt()]
      //   },
      //   {
      //     label: "f",
      //     backgroundColor: "#1a12fa",
      //     data: [this.getRandomInt()]
      //   },
      //   {
      //     label: "f",
      //     backgroundColor: "#1a12fa",
      //     data: [this.getRandomInt()]
      //   },
      //   {
      //     label: "f",
      //     backgroundColor: "#1a12fa",
      //     data: [this.getRandomInt()]
      //   },
      //   {
      //     label: "f",
      //     backgroundColor: "#1a12fa",
      //     data: [this.getRandomInt()]
      //   },
      //   {
      //     label: "f",
      //     backgroundColor: "#1a12fa",
      //     data: [this.getRandomInt()]
      //   },
      //   {
      //     label: "f",
      //     backgroundColor: "#1a12fa",
      //     data: [this.getRandomInt()]
      //   },
      //   {
      //     label: "f",
      //     backgroundColor: "#1a12fa",
      //     data: [this.getRandomInt()]
      //   },
      //   {
      //     label: "f",
      //     backgroundColor: "#1a12fa",
      //     data: [this.getRandomInt()]
      //   },
      //   {
      //     label: "f",
      //     backgroundColor: "#1a12fa",
      //     data: [this.getRandomInt()]
      //   },
      //   {
      //     label: "f",
      //     backgroundColor: "#1a12fa",
      //     data: [this.getRandomInt()]
      //   },
      //   {
      //     label: "f",
      //     backgroundColor: "#1a12fa",
      //     data: [this.getRandomInt()]
      //   },
      //   {
      //     label: "f",
      //     backgroundColor: "#1a12fa",
      //     data: [this.getRandomInt()]
      //   },
      //   {
      //     label: "f",
      //     backgroundColor: "#1a12fa",
      //     data: [this.getRandomInt()]
      //   },
      //   {
      //     label: "f",
      //     backgroundColor: "#1a12fa",
      //     data: [this.getRandomInt()]
      //   },
      //   {
      //     label: "f",
      //     backgroundColor: "#1a12fa",
      //     data: [this.getRandomInt()]
      //   },
      //   {
      //     label: "f",
      //     backgroundColor: "#1a12fa",
      //     data: [this.getRandomInt()]
      //   },
      //   {
      //     label: "f",
      //     backgroundColor: "#1a12fa",
      //     data: [this.getRandomInt()]
      //   },
      //   {
      //     label: "f",
      //     backgroundColor: "#1a12fa",
      //     data: [this.getRandomInt()]
      //   },
      //   {
      //     label: "f",
      //     backgroundColor: "#1a12fa",
      //     data: [this.getRandomInt()]
      //   },
      //   {
      //     label: "f",
      //     backgroundColor: "#1a12fa",
      //     data: [this.getRandomInt()]
      //   },
      //   {
      //     label: "f",
      //     backgroundColor: "#1a12fa",
      //     data: [this.getRandomInt()]
      //   },
      //   {
      //     label: "f",
      //     backgroundColor: "#1a12fa",
      //     data: [this.getRandomInt()]
      //   },
      //   {
      //     label: "f",
      //     backgroundColor: "#1a12fa",
      //     data: [this.getRandomInt()]
      //   },
      //   {
      //     label: "f",
      //     backgroundColor: "#1a12fa",
      //     data: [this.getRandomInt()]
      //   },
      //   {
      //     label: "f",
      //     backgroundColor: "#1a12fa",
      //     data: [this.getRandomInt()]
      //   },
      //   {
      //     label: "f",
      //     backgroundColor: "#1a12fa",
      //     data: [this.getRandomInt()]
      //   },
      //   {
      //     label: "f",
      //     backgroundColor: "#1a12fa",
      //     data: [this.getRandomInt()]
      //   },
      //   {
      //     label: "f",
      //     backgroundColor: "#1a12fa",
      //     data: [this.getRandomInt()]
      //   },
      //   {
      //     label: "f",
      //     backgroundColor: "#1a12fa",
      //     data: [this.getRandomInt()]
      //   },
      //   {
      //     label: "f",
      //     backgroundColor: "#1a12fa",
      //     data: [this.getRandomInt()]
      //   },
      //   {
      //     label: "f",
      //     backgroundColor: "#1a12fa",
      //     data: [this.getRandomInt()]
      //   },
      //   {
      //     label: "f",
      //     backgroundColor: "#1a12fa",
      //     data: [this.getRandomInt()]
      //   },
      //   {
      //     label: "f",
      //     backgroundColor: "#1a12fa",
      //     data: [this.getRandomInt()]
      //   }
      // ],
      arrayOfNumber: [],
      counter: 0,
      finalArray: []
    };
  },
  mounted() {
    this.fillData();
  },
  methods: {
    saveInLS(){
        let kek = this.datasets;
        console.log(kek)
      // let kek = [
      //   {
      //     a: 'bb',
      //     bc: 3,
      //     kef: [66]
      //   },
      //   {
      //     a: 'bb',
      //     bc: 5,
      //      kef: [66]
      //   },
      //   {
      //     a: 'bb',
      //     bc: 7,
      //      kef: [66]
      //   },
      //    {
      //     a: 'bb',
      //     bc: 7,
      //      kef: [66]
      //   },
      // ]
        //  let str = JSON.stringify(kek);
       localStorage.setItem('datasets', kek)
    },
    loadFromLS(){
      // this.datasets = localStorage.getItem('array')
      // console.log(localStorage.getItem('datasets'));
      let item = localStorage.getItem('datasets')
      this.datasets = JSON.parse(item)
      this.fillData()
    },
    fillData() {
      this.datacollection = {
        labels: ["Временной ряд"],
        datasets: this.datasets
      };
    },
    fillRandomData(){
        // // for (let i = 0; i < 60; i++) {
          // //     this.datasets.push(
          // //   {
          // //     label: "f",
          // //     backgroundColor: this.randomColor,
          // //     data: [this.getRandomInt()]
          // //   },
          // // )
          // //   this.fillData();
          
          // // }
        // console.log('before -----')
  //  let datasetS =  [ {
    //       label: "f",
    //       backgroundColor: this.randomColor,
    //       data: [209]
    //     },
    //     {
    //       label: "f",
    //       backgroundColor: this.randomColor,
    //       data: [339]
    //     },
    //     {
    //       label: "f",
    //       backgroundColor: this.randomColor,
    //       data: [0]
    //     },
    //     {
    //       label: "f",
    //       backgroundColor: this.randomColor,
    //       data: [190]
    //     },
    //     {
    //       label: "f",
    //       backgroundColor: this.randomColor,
    //       data:[17]
    //     },
    //     {
    //       label: "f",
    //       backgroundColor: this.randomColor,
    //       data: [41]
    //     },
    //     {
    //       label: "f",
    //       backgroundColor: this.randomColor,
    //       data: [93]
    //     },
    //     {
    //       label: "f",
    //       backgroundColor: this.randomColor,
    //       data: [254]
    //     },
    //     {
    //       label: "f",
    //       backgroundColor: this.randomColor,
    //       data: [88]
    //     },
    //     {
    //       label: "f",
    //       backgroundColor: this.randomColor,
    //       data: [182]
    //     },
    //     {
    //       label: "f",
    //       backgroundColor: this.randomColor,
    //       data: [141]
    //     },
    //   {
    //       label: "f",
    //       backgroundColor: this.randomColor,
    //       data: [180]
    //     },
    //     {
    //       label: "f",
    //       backgroundColor: this.randomColor,
    //       data: [86]
    //     },{
    //       label: "f",
    //       backgroundColor: this.randomColor,
    //       data: [128]
    //     },{
    //       label: "f",
    //       backgroundColor: this.randomColor,
    //       data: [39]
    //     },{
    //       label: "f",
    //       backgroundColor: this.randomColor,
    //       data: [98]
    //     },{
    //       label: "f",
    //       backgroundColor: this.randomColor,
    //       data: [214]
    //     },{
    //       label: "f",
    //       backgroundColor: this.randomColor,
    //       data: [30]
    //     },{
    //       label: "f",
    //       backgroundColor: this.randomColor,
    //       data: [109]
    //     },{
    //       label: "f",
    //       backgroundColor: this.randomColor,
    //       data: [82]
    //     },{
    //       label: "f",
    //       backgroundColor: this.randomColor,
    //       data: [221]
    //     },{
    //       label: "f",
    //       backgroundColor: this.randomColor,
    //       data: [98]
    //     },{
    //       label: "f",
    //       backgroundColor: this.randomColor,
    //       data: [77]
    //     },{
    //       label: "f",
    //       backgroundColor: this.randomColor,
    //       data: [65]
    //     },{
    //       label: "f",
    //       backgroundColor: this.randomColor,
    //       data: [69]
    //     },{
    //       label: "f",
    //       backgroundColor: this.randomColor,
    //       data:[65]
    //     },{
    //       label: "f",
    //       backgroundColor: this.randomColor,
    //       data: [271]
    //     },{
    //       label: "f",
    //       backgroundColor: this.randomColor,
    //       data: [47]
    //     },{
    //       label: "f",
    //       backgroundColor: this.randomColor,
    //       data: [146]
    //     },{
    //       label: "f",
    //       backgroundColor: this.randomColor,
    //       data: [159]
    //     },{
    //       label: "f",
    //       backgroundColor: this.randomColor,
    //       data: [91]
    //     },
    //     {
    //       label: "f",
    //       backgroundColor: this.randomColor,
    //       data: [202]
    //     },{
    //       label: "f",
    //       backgroundColor: this.randomColor,
    //       data: [272]
    //     },{
    //       label: "f",
    //       backgroundColor: this.randomColor,
    //       data: [37]
    //     },{
    //       label: "f",
    //       backgroundColor: this.randomColor,
    //       data: [200]
    //     },{
    //       label: "f",
    //       backgroundColor: this.randomColor,
    //       data: [85]
    //     },{
    //       label: "f",
    //       backgroundColor: this.randomColor,
    //       data: [80]
    //     },{
    //       label: "f",
    //       backgroundColor: this.randomColor,
    //       data: [40]
    //     },{
    //       label: "f",
    //       backgroundColor: this.randomColor,
    //       data: [29]
    //     },{
    //       label: "f",
    //       backgroundColor: this.randomColor,
    //       data: [191]
    //     },{
    //       label: "f",
    //       backgroundColor: this.randomColor,
    //       data: [75]
    //     },{
    //       label: "f",
    //       backgroundColor: this.randomColor,
    //       data: [197]
    //     },{
    //       label: "f",
    //       backgroundColor: this.randomColor,
    //       data: [92]
    //     },{
    //       label: "f",
    //       backgroundColor: this.randomColor,
    //       data: [76]
    //     },{
    //       label: "f",
    //       backgroundColor: this.randomColor,
    //       data: [117]
    //     },{
    //       label: "f",
    //       backgroundColor: this.randomColor,
    //       data: [80]
    //     },{
    //       label: "f",
    //       backgroundColor: this.randomColor,
    //       data: [161]
    //     },{
    //       label: "f",
    //       backgroundColor: this.randomColor,
    //       data: [178]
    //     },{
    //       label: "f",
    //       backgroundColor: this.randomColor,
    //       data: [60]
    //     },{
    //       label: "f",
    //       backgroundColor: this.randomColor,
    //       data: [175]
    //     },{
    //       label: "f",
    //       backgroundColor: this.randomColor,
    //       data: [119]
    //     },{
    //       label: "f",
    //       backgroundColor: this.randomColor,
    //       data: [533]
    //     },{
    //       label: "f",
    //       backgroundColor: this.randomColor,
    //       data: [56]
    //     },{
    //       label: "f",
    //       backgroundColor: this.randomColor,
    //       data: [0]
    //     },{
    //       label: "f",
    //       backgroundColor: this.randomColor,
    //       data: [300]
    //     },{
    //       label: "f",
    //       backgroundColor: this.randomColor,
    //       data: [66]
    //     },{
    //       label: "f",
    //       backgroundColor: this.randomColor,
    //       data: [62]
    //     },{
    //       label: "f",
    //       backgroundColor: this.randomColor,
    //       data:[0]
    //     },{
    //       label: "f",
    //       backgroundColor: this.randomColor,
    //       data:[36]
    //     },{
    //       label: "f",
    //       backgroundColor: this.randomColor,
    //       data:[45]
    //     }
    // ]
 
 
 
 
 
 console.log('after -----')
   let datasetS =  [ {
          label: "f",
          backgroundColor: this.randomColor,
          data: [54]
        },
        {
          label: "f",
          backgroundColor: this.randomColor,
          data: [54]
        },
        {
          label: "f",
          backgroundColor: this.randomColor,
          data: [105]
        },
        {
          label: "f",
          backgroundColor: this.randomColor,
          data: [80]
        },
        {
          label: "f",
          backgroundColor: this.randomColor,
          data:[44]
        },
        {
          label: "f",
          backgroundColor: this.randomColor,
          data: [22]
        },
        {
          label: "f",
          backgroundColor: this.randomColor,
          data: [35]
        },
        {
          label: "f",
          backgroundColor: this.randomColor,
          data: [48]
        },
        {
          label: "f",
          backgroundColor: this.randomColor,
          data: [31]
        },
        {
          label: "f",
          backgroundColor: this.randomColor,
          data: [124]
        },
        {
          label: "f",
          backgroundColor: this.randomColor,
          data: [29]
        },
      {
          label: "f",
          backgroundColor: this.randomColor,
          data: [96]
        },
        {
          label: "f",
          backgroundColor: this.randomColor,
          data: [18]
        },{
          label: "f",
          backgroundColor: this.randomColor,
          data: [44]
        },{
          label: "f",
          backgroundColor: this.randomColor,
          data: [35]
        },{
          label: "f",
          backgroundColor: this.randomColor,
          data: [115]
        },{
          label: "f",
          backgroundColor: this.randomColor,
          data: [61]
        },{
          label: "f",
          backgroundColor: this.randomColor,
          data: [34]
        },{
          label: "f",
          backgroundColor: this.randomColor,
          data: [63]
        },{
          label: "f",
          backgroundColor: this.randomColor,
          data: [44]
        },{
          label: "f",
          backgroundColor: this.randomColor,
          data: [17]
        },{
          label: "f",
          backgroundColor: this.randomColor,
          data: [29]
        },{
          label: "f",
          backgroundColor: this.randomColor,
          data: [51]
        },{
          label: "f",
          backgroundColor: this.randomColor,
          data: [31]
        },{
          label: "f",
          backgroundColor: this.randomColor,
          data: [213]
        },{
          label: "f",
          backgroundColor: this.randomColor,
          data:[72]
        },{
          label: "f",
          backgroundColor: this.randomColor,
          data: [52]
        },{
          label: "f",
          backgroundColor: this.randomColor,
          data: [56]
        },{
          label: "f",
          backgroundColor: this.randomColor,
          data: [77]
        },{
          label: "f",
          backgroundColor: this.randomColor,
          data: [17]
        },{
          label: "f",
          backgroundColor: this.randomColor,
          data: [6]
        },
        {
          label: "f",
          backgroundColor: this.randomColor,
          data: [21]
        },{
          label: "f",
          backgroundColor: this.randomColor,
          data: [65]
        },{
          label: "f",
          backgroundColor: this.randomColor,
          data: [89]
        },{
          label: "f",
          backgroundColor: this.randomColor,
          data: [35]
        },{
          label: "f",
          backgroundColor: this.randomColor,
          data: [40]
        },{
          label: "f",
          backgroundColor: this.randomColor,
          data: [27]
        },{
          label: "f",
          backgroundColor: this.randomColor,
          data: [43]
        },{
          label: "f",
          backgroundColor: this.randomColor,
          data: [17]
        },{
          label: "f",
          backgroundColor: this.randomColor,
          data: [140]
        },{
          label: "f",
          backgroundColor: this.randomColor,
          data: [138]
        },{
          label: "f",
          backgroundColor: this.randomColor,
          data: [47]
        },{
          label: "f",
          backgroundColor: this.randomColor,
          data: [82]
        },{
          label: "f",
          backgroundColor: this.randomColor,
          data: [96]
        },{
          label: "f",
          backgroundColor: this.randomColor,
          data: [101]
        },{
          label: "f",
          backgroundColor: this.randomColor,
          data: [100]
        },{
          label: "f",
          backgroundColor: this.randomColor,
          data: [55]
        },{
          label: "f",
          backgroundColor: this.randomColor,
          data: [32]
        },{
          label: "f",
          backgroundColor: this.randomColor,
          data: [45]
        },{
          label: "f",
          backgroundColor: this.randomColor,
          data: [100]
        },{
          label: "f",
          backgroundColor: this.randomColor,
          data: [45]
        },{
          label: "f",
          backgroundColor: this.randomColor,
          data: [78]
        },{
          label: "f",
          backgroundColor: this.randomColor,
          data: [56]
        },{
          label: "f",
          backgroundColor: this.randomColor,
          data: [42]
        },{
          label: "f",
          backgroundColor: this.randomColor,
          data: [27]
        },{
          label: "f",
          backgroundColor: this.randomColor,
          data: [57]
        },{
          label: "f",
          backgroundColor: this.randomColor,
          data: [20]
        },{
          label: "f",
          backgroundColor: this.randomColor,
          data:[37]
        },{
          label: "f",
          backgroundColor: this.randomColor,
          data:[53]
        },{
          label: "f",
          backgroundColor: this.randomColor,
          data:[40]
        }
    ]
        this.datasets = datasetS;
        // this.dtst = JSON.stringify(datasetS);
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