<template>
  <div class="small">
    <h1>Первый Шаг</h1>
    <v-card>
      <v-text-field ref="btn" v-model="number" label="Введите число" v-on:keyup.enter="addColumn()"></v-text-field>
       <v-btn class="info" @click="addColumn()">Добавить значение</v-btn>
       <v-btn class="info" @click="removeColumn()">Удалить значение</v-btn>
       <hr>
         <v-btn class="info" @click="fillRandomData()">Заполнить рандомными числами</v-btn>
           <v-btn class="info" @click="fillDemas()">Заполнить данными из примера</v-btn>
   <hr>
           <v-btn class="info" @click="saveInLS()">Сохранить в ls</v-btn>
           <v-btn class="info" @click="loadFromLS()">Загрузить из ls</v-btn>
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
    removeColumn(){
      this.datasets.pop();
      this.fillData();
    },
    saveInLS(){
        let kek = this.datasets;
        kek = kek.map((item)=> {
          console.log(item.backgroundColor)
          return {
          label: item.label,
          backgroundColor: item.backgroundColor,
          data: item.data
          }
        })
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
          let str = JSON.stringify(kek);
       localStorage.setItem('datasets', str)
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
    fillDemas() {
     this.datasets = [ {
          label: "f",
          backgroundColor: this.randomColor,
          data: [209]
        },
        {
          label: "f",
          backgroundColor: this.randomColor,
          data: [339]
        },
        {
          label: "f",
          backgroundColor: this.randomColor,
          data: [0]
        },
        {
          label: "f",
          backgroundColor: this.randomColor,
          data: [190]
        },
        {
          label: "f",
          backgroundColor: this.randomColor,
          data:[17]
        },
        {
          label: "f",
          backgroundColor: this.randomColor,
          data: [41]
        },
        {
          label: "f",
          backgroundColor: this.randomColor,
          data: [93]
        },
        {
          label: "f",
          backgroundColor: this.randomColor,
          data: [254]
        },
        {
          label: "f",
          backgroundColor: this.randomColor,
          data: [88]
        },
        {
          label: "f",
          backgroundColor: this.randomColor,
          data: [182]
        },
        {
          label: "f",
          backgroundColor: this.randomColor,
          data: [141]
        },
       {
          label: "f",
          backgroundColor: this.randomColor,
          data: [180]
        },
        {
          label: "f",
          backgroundColor: this.randomColor,
          data: [86]
        },{
          label: "f",
          backgroundColor: this.randomColor,
          data: [128]
        },{
          label: "f",
          backgroundColor: this.randomColor,
          data: [39]
        },{
          label: "f",
          backgroundColor: this.randomColor,
          data: [98]
        },{
          label: "f",
          backgroundColor: this.randomColor,
          data: [214]
        },{
          label: "f",
          backgroundColor: this.randomColor,
          data: [30]
        },{
          label: "f",
          backgroundColor: this.randomColor,
          data: [109]
        },{
          label: "f",
          backgroundColor: this.randomColor,
          data: [82]
        },{
          label: "f",
          backgroundColor: this.randomColor,
          data: [221]
        },{
          label: "f",
          backgroundColor: this.randomColor,
          data: [98]
        },{
          label: "f",
          backgroundColor: this.randomColor,
          data: [77]
        },{
          label: "f",
          backgroundColor: this.randomColor,
          data: [65]
        },{
          label: "f",
          backgroundColor: this.randomColor,
          data: [69]
        },{
          label: "f",
          backgroundColor: this.randomColor,
          data:[65]
        },{
          label: "f",
          backgroundColor: this.randomColor,
          data: [271]
        },{
          label: "f",
          backgroundColor: this.randomColor,
          data: [47]
        },{
          label: "f",
          backgroundColor: this.randomColor,
          data: [146]
        },{
          label: "f",
          backgroundColor: this.randomColor,
          data: [159]
        },{
          label: "f",
          backgroundColor: this.randomColor,
          data: [91]
        },
        {
          label: "f",
          backgroundColor: this.randomColor,
          data: [202]
        },{
          label: "f",
          backgroundColor: this.randomColor,
          data: [272]
        },{
          label: "f",
          backgroundColor: this.randomColor,
          data: [37]
        },{
          label: "f",
          backgroundColor: this.randomColor,
          data: [200]
        },{
          label: "f",
          backgroundColor: this.randomColor,
          data: [85]
        },{
          label: "f",
          backgroundColor: this.randomColor,
          data: [80]
        },{
          label: "f",
          backgroundColor: this.randomColor,
          data: [40]
        },{
          label: "f",
          backgroundColor: this.randomColor,
          data: [29]
        },{
          label: "f",
          backgroundColor: this.randomColor,
          data: [191]
        },{
          label: "f",
          backgroundColor: this.randomColor,
          data: [75]
        },{
          label: "f",
          backgroundColor: this.randomColor,
          data: [197]
        },{
          label: "f",
          backgroundColor: this.randomColor,
          data: [92]
        },{
          label: "f",
          backgroundColor: this.randomColor,
          data: [76]
        },{
          label: "f",
          backgroundColor: this.randomColor,
          data: [117]
        },{
          label: "f",
          backgroundColor: this.randomColor,
          data: [80]
        },{
          label: "f",
          backgroundColor: this.randomColor,
          data: [161]
        },{
          label: "f",
          backgroundColor: this.randomColor,
          data: [178]
        },{
          label: "f",
          backgroundColor: this.randomColor,
          data: [60]
        },{
          label: "f",
          backgroundColor: this.randomColor,
          data: [175]
        },{
          label: "f",
          backgroundColor: this.randomColor,
          data: [119]
        },{
          label: "f",
          backgroundColor: this.randomColor,
          data: [533]
        },{
          label: "f",
          backgroundColor: this.randomColor,
          data: [56]
        },{
          label: "f",
          backgroundColor: this.randomColor,
          data: [0]
        },{
          label: "f",
          backgroundColor: this.randomColor,
          data: [300]
        },{
          label: "f",
          backgroundColor: this.randomColor,
          data: [66]
        },{
          label: "f",
          backgroundColor: this.randomColor,
          data: [62]
        },{
          label: "f",
          backgroundColor: this.randomColor,
          data:[0]
        },{
          label: "f",
          backgroundColor: this.randomColor,
          data:[36]
        },{
          label: "f",
          backgroundColor: this.randomColor,
          data:[45]
        }
  ]
  this.fillData();
    },
    fillRandomData(){
      for (let i = 0; i < 60; i++) {
          this.datasets.push(
        {
          label: "f",
          backgroundColor: this.randomColor,
          data: [this.getRandomInt()]
        },
      )
        this.fillData();
       
      }
      
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