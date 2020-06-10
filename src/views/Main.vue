<template>
  <div style="margin: 2em">
    <v-card style="padding: 2em">
      <h1>Первый Шаг</h1>
      <v-file-input accept=".xls, .xlsx" label="Добавить значения из Excel файла"></v-file-input>

      <v-text-field
        ref="btn"
        v-model="number"
        label="Введите число"
        type="number"
        v-on:keyup.enter="addColumn()"
      ></v-text-field>
      <v-text-field v-model="def" label="Введите ε"></v-text-field>

      <div style="display: flex; justify-content: space-around">
        <div style="text-align: center">
          <v-btn style="width: 250px" class="info ma-2" @click="addColumn()">Добавить элемент</v-btn>
          <v-btn style="width: 250px" class="info ma-2" @click="removeColumn()">Удалить элемент</v-btn>
          <v-btn
            style="width: 518px"
            class="info ma-2"
            @click="fillRandomData()"
          >Заполнить случайными числам</v-btn>
        </div>
        <div style="text-align: center;">
          <v-btn
            style="width: 400px"
            class="info ma-2"
            @click="saveInLS()"
          >Сохранить в локальное хранилище</v-btn>
          <v-btn
            style="width: 400px"
            class="info ma-2"
            @click="loadFromLS()"
          >Загрузить из локального хранилища</v-btn>
        </div>
      </div>
    </v-card>
    <v-card class="mt-4 mb-5" style="padding: 2em">
      <v-switch v-model="switch1" :label="`Высчитать: low, mid и high автоматичеки `"></v-switch>
      <v-layout>
        <v-flex xs10>
          <v-layout v-if="switch1 == false">
            <v-container style="margin-left: 20px">
              <h3>
                Введите наибольшее меньшее число(low) и нибольшеее среднее число
                (mid)
              </h3>
              <v-text-field v-model="low" label="Н"></v-text-field>
              <v-text-field v-model="mid" label="С"></v-text-field>
            </v-container>
          </v-layout>
        </v-flex>
      </v-layout>
      <v-btn class="info ma-2" @click="lmh()">Инициировать верификацию</v-btn>
      <d-Preset></d-Preset>
      <!-- <v-btn class="info ma-2" @click="loadFromLS()">Пресеты</v-btn> -->
    </v-card>
    <v-card style="text-align: center; " class="ma-3 pa-6">
      <d-Charts type="simple" :data="chartData"></d-Charts>
    </v-card>

    <!-- <d-Snackbar :snackbar="snackbarState" ></d-Snackbar> -->
    <v-snackbar v-model="snackbarState" :timeout="3000" top right>
      Поле не может быть пустым
      <v-btn class="primary" text @click="snackbarState = false">Закрыть</v-btn>
    </v-snackbar>
  </div>
</template>

<script>
// import BarChart from "@/components/BarExample.js";

export default {
  // components: {
  // BarChart
  // },
  data() {
    return {
      //состояния
      low: null,
      mid: null,
      // high: null,
      chartData: [],
      switch1: true,
      datacollection: [],
      number: "",
      def: '',
      options: {
        width: "600px",
        responsive: true, // my new default options
        maintainAspectRatio: false, // my new default options
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: true // my new default options
              }
            }
          ],
          xAxes: [
            {
              gridLines: {
                display: false
              }
            }
          ]
        }
      },
      dtst: [],
      datasets: [],

      arrayOfNumber: [],
      counter: 0,
      finalArray: [],
      snackbarState: false
    };
  },
  mounted() {
    this.fillData();
  },
  
  methods: {

    saveInLS() {
      let dataSet = this.datasets;
      if (dataSet.length > 0) {
        localStorage.setItem("datasets", dataSet);
      }
    },
    loadFromLS() {
      let item = localStorage.getItem("datasets");
      this.datasets = JSON.parse(item);
      this.fillData();
    },
    fillData() {
      this.datacollection = {
        labels: ["Временной ряд"],
        datasets: this.datasets
      };
    },
    fillRandomData() {
      let datasetS = [
        {
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
          data: [44]
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
          data: [90]
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
        },
        {
          label: "f",
          backgroundColor: this.randomColor,
          data: [44]
        },
        {
          label: "f",
          backgroundColor: this.randomColor,
          data: [35]
        },
        {
          label: "f",
          backgroundColor: this.randomColor,
          data: [115]
        },
        {
          label: "f",
          backgroundColor: this.randomColor,
          data: [61]
        },
        {
          label: "f",
          backgroundColor: this.randomColor,
          data: [34]
        },
        {
          label: "f",
          backgroundColor: this.randomColor,
          data: [63]
        },
        {
          label: "f",
          backgroundColor: this.randomColor,
          data: [44]
        },
        {
          label: "f",
          backgroundColor: this.randomColor,
          data: [17]
        },
        {
          label: "f",
          backgroundColor: this.randomColor,
          data: [29]
        },
        {
          label: "f",
          backgroundColor: this.randomColor,
          data: [51]
        },
        {
          label: "f",
          backgroundColor: this.randomColor,
          data: [31]
        },
        {
          label: "f",
          backgroundColor: this.randomColor,
          data: [90]
        },
        {
          label: "f",
          backgroundColor: this.randomColor,
          data: [72]
        },
        {
          label: "f",
          backgroundColor: this.randomColor,
          data: [52]
        },
        {
          label: "f",
          backgroundColor: this.randomColor,
          data: [56]
        },
        {
          label: "f",
          backgroundColor: this.randomColor,
          data: [77]
        },
        {
          label: "f",
          backgroundColor: this.randomColor,
          data: [17]
        },
        {
          label: "f",
          backgroundColor: this.randomColor,
          data: [6]
        },
        {
          label: "f",
          backgroundColor: this.randomColor,
          data: [21]
        },
        {
          label: "f",
          backgroundColor: this.randomColor,
          data: [65]
        },
        {
          label: "f",
          backgroundColor: this.randomColor,
          data: [89]
        },
        {
          label: "f",
          backgroundColor: this.randomColor,
          data: [35]
        },
        {
          label: "f",
          backgroundColor: this.randomColor,
          data: [40]
        },
        {
          label: "f",
          backgroundColor: this.randomColor,
          data: [27]
        },
        {
          label: "f",
          backgroundColor: this.randomColor,
          data: [43]
        },
        {
          label: "f",
          backgroundColor: this.randomColor,
          data: [17]
        },
        {
          label: "f",
          backgroundColor: this.randomColor,
          data: [140]
        },
        {
          label: "f",
          backgroundColor: this.randomColor,
          data: [138]
        },
        {
          label: "f",
          backgroundColor: this.randomColor,
          data: [47]
        },
        {
          label: "f",
          backgroundColor: this.randomColor,
          data: [82]
        },
        {
          label: "f",
          backgroundColor: this.randomColor,
          data: [96]
        },
        {
          label: "f",
          backgroundColor: this.randomColor,
          data: [101]
        },
        {
          label: "f",
          backgroundColor: this.randomColor,
          data: [100]
        },
        {
          label: "f",
          backgroundColor: this.randomColor,
          data: [55]
        },
        {
          label: "f",
          backgroundColor: this.randomColor,
          data: [32]
        },
        {
          label: "f",
          backgroundColor: this.randomColor,
          data: [45]
        },
        {
          label: "f",
          backgroundColor: this.randomColor,
          data: [100]
        },
        {
          label: "f",
          backgroundColor: this.randomColor,
          data: [45]
        },
        {
          label: "f",
          backgroundColor: this.randomColor,
          data: [78]
        },
        {
          label: "f",
          backgroundColor: this.randomColor,
          data: [56]
        },
        {
          label: "f",
          backgroundColor: this.randomColor,
          data: [42]
        },
        {
          label: "f",
          backgroundColor: this.randomColor,
          data: [27]
        },
        {
          label: "f",
          backgroundColor: this.randomColor,
          data: [57]
        },
        {
          label: "f",
          backgroundColor: this.randomColor,
          data: [20]
        },
        {
          label: "f",
          backgroundColor: this.randomColor,
          data: [37]
        },
        {
          label: "f",
          backgroundColor: this.randomColor,
          data: [53]
        },
        {
          label: "f",
          backgroundColor: this.randomColor,
          data: [40]
        }
      ];
      this.datasets = datasetS;
      this.fillChart(datasetS);
      // this.dtst = JSON.stringify(datasetS);
      this.fillData();
    },
    fillChart(data) {
      this.chartData = data.map(item => item.data[0]);
    },
    randomColor() {
      let x = Math.floor(Math.random() * 256);
      let y = Math.floor(Math.random() * 256);
      let z = Math.floor(Math.random() * 256);
      return "rgb(" + x + "," + y + "," + z + ")";
    },
    lmh() {
      this.$store.state.def = this.def;
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
      this.$router.push("/verification");
    },
    getRandomInt() {
      return Math.floor(12 + Math.random() * (30 + 1 - 12));
    },
    removeColumn() {
      this.counter++;
      this.datasets.pop();
      this.chartData.pop();
      this.number = "";
      this.fillData();
      this.$refs.btn.focus();
    },
    addColumn() {
      if (this.number !== "") {
        this.counter++;
        this.datasets.push({
          label: `Число № ${this.counter}`,
          backgroundColor: this.randomColor(),
          data: [parseInt(this.number)]
        });
        this.chartData.push(parseInt(this.number));
        this.number = "";
        this.fillData();
        this.$refs.btn.focus();
      } else {
        this.snackbarState = true;
      }
    }
  }
};
</script>

<style>
.theme--dark.v-picker__body {
  background: #1e1e1e;
}
</style>
