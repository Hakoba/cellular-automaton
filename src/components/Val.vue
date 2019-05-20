<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <h1>третий шаг: валидация</h1>
      <v-card class="small">
        <router-link to="/">
          <v-btn class="info">в начало</v-btn>
        </router-link>
        <router-link to="/second">
          <v-btn class="info">Назад</v-btn>
        </router-link>
      </v-card>
    </v-layout>
    <v-card class="mb-4">
       <h3>{{getPercent}}</h3>
      <table>
        <tr>
         
          <th>Low</th>
          <th>Middle</th>
          <th>High</th>
           <th>Type</th>
        </tr>
        <tr v-for="(item,index) in validArray" class="access" :class="{wrong: !item.bool}" :key="index">
          <td v-for="(elem,index) in item" :key="index">{{elem}}</td>
        </tr>
      </table>
     
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      verArray: this.$store.state.verArray,
      mainArray: this.$store.state.mainArr,
      deep: this.$store.state.deep,
      validArray: [],
      counter: 0,
      boolArray: []
    };
  },
  computed: {
    getPercent() {
     let correctnessArray = this.boolArray.reduce(function(acc, el) {
        acc[el] = (acc[el] || 0) + 1;
        return acc;
      }, {});
        correctnessArray = {
          percent: correctnessArray.true*100/(correctnessArray.true+correctnessArray.false)
          ,
          ...correctnessArray
        }
      return correctnessArray
    }
  },
  methods: {
    findBlah() {
      let mainObj = this.mainArray;
      let verArray = this.verArray;
      //  verArray = verArray.reverse();
      let deep = this.deep;
      let str = mainObj[length - 1];
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
      let counter = 0;
      //  for (let index = 0; index < 7; index++) {

      for (let index = 0; index < MALength; index++) {
        let lastTypes = [];
        counter++;
        lastTypes = mainArray.slice(-deep);
        mainArray.pop();
        let toLow = [],
          toMiddle = [],
          toHigh = [],
          l = null,
          m = null,
          h = null;
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
            console.error(
              "error, dats table isn't exist, it's normal -- calm down!"
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
        // this.mainArray.pop()

        //
      }
      return this.validArray;
    },
    makeForecast(l, m, h) {
      let low = 0,
        middle = 0,
        high = 0;
      // console.log(this.deep)
      for (let index = 0; index < l.length; index++) {
        let sum = l[index] + m[index] + h[index];
        low = low + l[index];
        middle += m[index];
        high += h[index];
        // console.log(`low: ${low}, middle:${middle}, high: ${high} --  l = ${l[index]}, m = ${m[index]} h = ${h[index]}-- sum = ${sum}`)
      }
      let summ = low + middle + high;
      // if (this.counter != ) {

      // }
      // console.log(this.mainArray.length+1, this.counter)

      if (this.counter == this.mainArray.length || this.counter <= this.deep) {
        // this.mainArray.pop()
        return {
          // counter: this.counter,
          l: (low / summ).toFixed(3),
          m: (middle / summ).toFixed(3),
          h: (high / summ).toFixed(3),
          bool: "kek"
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
          l: low / summ,
          m: middle / summ,
          h: high / summ,
          bool: bool
        };
      }
    }
  },
  mounted() {
    this.findBlah();
  }
};
</script>

<style scoped lang='scss'>
table {
  font-family: "Lucida Sans Unicode", "Lucida Grande", Sans-Serif;
  font-size: 14px;
  background: white;
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
  color: #039;
  border-bottom: 2px solid #6678b1;
  padding: 10px 8px;
}
td {
  color: rgb(58, 58, 104);
  padding: 9px 8px;
  transition: 0.3s linear;
  padding: 4px 50px;
  font-size: 1.2em;
}
tr:hover td {
  color: #ffffff;
  cursor: pointer;
   background-color: #d9ff0093;
}
.access {
  background-color: #3fe4a593;
}
.wrong {
  background-color: #ff393993;
}
</style>
