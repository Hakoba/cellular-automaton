<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-card style="width: 100%" class="small pa-4 ma-2">
        <h1>Третий шаг: валидация и дефазификация</h1>
        <!-- <router-link to="/">
          <v-btn class="info">в начало</v-btn>
        </router-link>
        <router-link to="/second">
          <v-btn class="info">Назад</v-btn>
        </router-link>-->
      </v-card>
    </v-layout>
    <!-- <v-card>

    </v-card>-->
    <v-card class="mb-4;" style="text-align: center">
      <!-- <h3>{{getPercent}}</h3> -->
      <v-card-title>
        Удачно: {{ correctness.true }} ед; Ошибочно: {{ correctness.false }}ед.
        <v-spacer />
        Процент ошибки:{{ correctness.error }}
        <v-spacer />
        Процент угаданных частей:{{ correctness.percent }}
      </v-card-title>
      <v-data-table
        :itemsPerPage="15"
        class="elevation-1"
        style="width:100%"
        :headers="headers"
        :items="validArray"
      >
        <template v-slot:item.bool="{ item }">
          <v-icon
            :color="item.bool === true ? 'primary': item.bool === false ? 'warning':
            'info'"
            dark
          >
            {{ item.bool === true ? 'check_circle': item.bool === false ? 'block':
            'change_history' }}
          </v-icon>
        </template>
        <template v-slot:item.option="{ item }">
          <setting-popover :user="item" @userUpdated="getUsers"></setting-popover>
        </template>
      </v-data-table>
      <!-- <table>
        <tr>
          <th v-for="header in headers" :key="header">{{ header }}</th>
        </tr>
        <tr
          v-for="(item, index) in validArray"
          class="access"
          :class="{ wrong: !item.bool }"
          :key="index"
          width="20%"
        >
          <td v-for="(elem, index) in item" :key="index" >
            {{
            elem === true
            ? "Угадано"
            : elem === false
            ? "Ошибка"
            : elem === "kek"
            ? "Не обрабатывается"
            : elem
            }}
          </td>
        </tr>
      </table>-->
    </v-card>
    <v-card>
      <div>
        <d-Charts
          propId="forecast"
          style="text-align: center"
          :isCustom="true"
          :data="verChartData"
          type="colored"
        ></d-Charts>
        <d-Charts propId="real" style="text-align: center" :data="chartData" type="colored"></d-Charts>
      </div>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      // headers: [
      //   "Номер",
      //   "Низкие",
      //   "Средние",
      //   "Выские",
      //   "Значение",
      //   "Прогнозное значение",
      //   "Тип"
      // ],
      headers: [
        // { text: "ID пользователя", value: "id" },
        { text: "Номер", value: "place" },
        { text: "Низкие", value: "l" },
        { text: "Средние", value: "m", align: "center" },
        { text: "Высокие", value: "h" },
        { text: "Значение", value: "real" },
        { text: "Прогнозное значение", value: "forec" },
        { text: "Тип", value: "bool" }
      ],
      verArray: this.$store.state.verArray,
      mainArray: this.$store.state.mainArr,
      deep: this.$store.state.deep,
      validArray: [],
      counter: 0,
      commonCount: 1,
      boolArray: [],
      correctness: {},
      chartData: [],
      verChartData: []
    };
  },
  computed: {},
  methods: {
    getPercent() {
      let correctnessArray = this.boolArray.reduce(function(acc, el) {
        acc[el] = (acc[el] || 0) + 1;
        return acc;
      }, {});
      correctnessArray = {
        percent: (
          (correctnessArray.true * 100) /
          (correctnessArray.true + correctnessArray.false)
        ).toFixed(3),
        error: (
          100 -
          (correctnessArray.true * 100) /
            (correctnessArray.true + correctnessArray.false)
        ).toFixed(3),
        ...correctnessArray
      };
      this.correctness = correctnessArray;
    },
    findBlah() {
      let mainObj = this.mainArray;
      let verArray = this.verArray;
      //  verArray = verArray.reverse();
      let deep = this.deep;
      //   let str = mainObj[length - 1];
      let mainArray = new Array();
      let mainArraySec = new Array();
      for (let i = 0; i < mainObj.length; i++) {
        mainArray.push(mainObj[i].type);
        mainArraySec.push(mainObj[i].type);
      }
      this.counter = mainArray.length;
      this.mainArray = mainArraySec;
      console.log(
        this.mainArray,
        "Marr --------------------",
        this.counter,
        this.mainArray.length
      );
      let MALength = mainArray.length;
      //  console.log(`MALength ${MALength}, deep ${deep}`)
      //   let counter = 0;
      //  for (let index = 0; index < 7; index++) {

      for (let index = 0; index < MALength; index++) {
        let lastTypes = [];
        // counter++;
        lastTypes = mainArray.slice(-deep);
        mainArray.pop();
        let toLow = [],
          toMiddle = [],
          toHigh = [];
        for (let i = 1; i <= lastTypes.length; i++) {
          //выводим последние элементs
          let types = lastTypes.slice(-i).join("");
          let map = verArray[verArray.length - i];
          // console.log(map, types)
          if (map.has(types)) {
            let cases = map.get(types); // это крч, l m h со значениеями от даннго types
            // console.log('kek')
            let sum = cases.l + cases.m + cases.h;

            toLow.push(cases.l / sum);
            toMiddle.push(cases.m / sum);
            toHigh.push(cases.h / sum);
            // console.log('cases: ', cases )
          } else {
            console.log(
              "%c error, dats table isn't exist, it's normal -- calm down!",
              "color: #44f"
            );
            //  return null
          }
        }
        // console.log(toLow,toMiddle,toHigh)
        // console.log('counter: ', counter)

        let forecast = this.makeForecast(toLow, toMiddle, toHigh);
        // console.log('arrays: ', forecast)
        this.counter--;
        this.validArray.push(forecast);
        this.commonCount++;
        // this.mainArray.pop()

        //
      }
      let max =
        Math.max.apply(
          null,
          this.validArray
            .map(item => (typeof item.real === "number" ? item.real : void 0))
            .filter(item => typeof item === "number")
        ) / 2;
      console.log(
        "max",
        max,
        this.validArray
          .map(item => (typeof item.real === "number" ? item.real : void 0))
          .filter(item => typeof item === "number")
      );
      this.verChartData = JSON.parse(JSON.stringify(this.validArray))
        .reverse()
        .map(item => {
          return {
            item: typeof item.real === "string" ? max : item.real,
            serialNumber: item.place,
            type: item.bool === true ? "h" : item.bool === false ? "l" : "m"
          };
        });
      this.$store.commit("setValidArray", this.validArray);
      return this.validArray;
    },
    setChartData() {
      this.chartData = this.$store.state.mainArr;
      console.log("this.chartData", this.chartData);
    },
    makeForecast(l, m, h) {
      let low = 0,
        middle = 0,
        high = 0;
      for (let index = 0; index < l.length; index++) {
        low = low + l[index];
        middle += m[index];
        high += h[index];
      }
      let summ = low + middle + high;
      if (this.counter == this.mainArray.length || this.counter <= this.deep) {
        this.getPercent();
        return {
          place: this.commonCount,
          l: (low / summ).toFixed(3),
          m: (middle / summ).toFixed(3),
          h: (high / summ).toFixed(3),
          real: this.mainArray[this.commonCount - 1],
          forec: this.mainArray[this.commonCount - 1],
          bool: "НЕ ОБРАБАТЫВАЕТСЯ"
        };
      } else {
        let l = low / summ,
          m = middle / summ,
          h = high / summ;
        let bool = new Boolean();

        let maximum = Math.max(l, m, h);

        switch (maximum) {
          case l:
            maximum = "l";
            break;
          case m:
            maximum = "m";
            break;
          case h:
            maximum = "h";
            break;
        }
        console.log(
          "maximum: ",
          maximum,
          ",  mainArray{index}: ",
          this.mainArray[this.counter],
          this.counter
        );
        maximum == this.mainArray[this.counter]
          ? (bool = true)
          : (bool = false);
        if (bool == true) {
          this.boolArray.push(true);
        } else {
          this.boolArray.push(false);
        }

        return {
          place: this.commonCount,
          l: (low / summ).toFixed(3),
          m: (middle / summ).toFixed(3),
          h: (high / summ).toFixed(3),
          real: this.$store.state.mainArr[this.commonCount - 1].item,
          forec: this.getPseudoRandomNumber(
            bool,
            this.$store.state.mainArr,
            maximum,
            this.commonCount,
            this.$store.state.mainArr[this.commonCount - 1].item
          ),
          bool
        };
      }
    },

    getPseudoRandomNumber(bool, mainArr, lingvisticMax, commonCount, realVal) {
      console.log(bool, mainArr, lingvisticMax, commonCount);
      if (bool) {
        return realVal + (-2 - 0.5 + Math.random() * (2 + -2 + 1)).toFixed(2);
      } else {
        mainArr = JSON.parse(JSON.stringify(mainArr));
        let spliced = mainArr.splice(commonCount - this.deep, commonCount);
        let arr = spliced.filter(item => item.type === lingvisticMax);
        const reducer = (accumulator, currentValue) =>
          accumulator.item + currentValue.item;
        let returnedValue = arr.reduce(reducer) / arr.length;
        if (
          returnedValue === Infinity ||
          returnedValue === 0 ||
          isNaN(returnedValue)
        ) {
          returnedValue =
            (realVal + (-2 - 0.5 + Math.random() * (2 + -2 + 1))).toFixed(4) +
            parseFloat(this.$store.state.def);
        }
        return returnedValue;
      }
    }
  },
  mounted() {
    this.findBlah();

    this.setChartData();
  }
};
</script>
<style scoped lang="scss">
table {
  font-family: "Lucida Sans Unicode", "Lucida Grande", Sans-Serif;
  font-size: 14px;
  // max-width: 200px;
  display: inline;
  border-collapse: collapse;
  text-align: center;
  margin-bottom: 2em;
}
tr {
  border-bottom: 2px solid rgb(0, 121, 151);
  font-weight: normal;
}
th {
  font-weight: normal;
  border-bottom: 2px solid #6678b1;
  padding: 10px 8px;
}
td {
  padding: 9px 8px;
  transition: 0.3s linear;
  padding: 4px 50px;
  font-size: 1.2em;
  color: white;
}
tr:hover td {
  color: #ffffff;
  cursor: pointer;
  background-color: #1696f5;
}
.access {
  background-color: #41b883;
  color: white;
}
.wrong {
  background-color: rgb(245, 160, 22);
  color: white;
}
</style>
