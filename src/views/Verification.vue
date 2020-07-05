<template lang="pug">

 v-card.pa-7.ma-6
  h1 2 шаг: Верификация
  d-Charts(style="text-align: center" :data='chartData' type='colored')
  //- v-tooltip.small(bottom='')
  //-   template.ml-5(v-slot:activator='{ on }')
  //-     v-btn(v-on='on', @click='fart()') &Tcy;&Ycy;&kcy;
  //-   span &IEcy;&scy;&lcy;&icy; &vcy;&dcy;&rcy;&gcy; &ncy;&iecy; &zcy;&acy;&rcy;&acy;&bcy;&ocy;&tcy;&acy;&lcy;&ocy;, &dcy;&ocy;&lcy;&zhcy;&ncy;&ocy; &pcy;&ocy;&chcy;&icy;&ncy;&icy;&tcy;&softcy;&scy;&yacy;
  v-tooltip.small(bottom='')
    template.ml-5(v-slot:activator='{ on }')
      //- v-btn(v-on='on', @click='$router.push({name:"third"})') &vcy;&acy;&lcy;&icy;&dcy;&acy;&tscy;&icy;&yacy;
    span &Pcy;&iecy;&rcy;&iecy;&khcy;&ocy;&dcy; &ncy;&acy; &vcy;&acy;&lcy;&icy;&dcy;&acy;&tscy;&icy;&yucy;
  v-container(grid-list-md='', text-xs-center='', v-for='(items,index) in validArray', :key='index')
    h2 Конфигурация &numero; {{validArray.length - index}}
    v-layout(row='', wrap='')
      v-flex.mb-3(xs12='', sm6='', md4='', lg3='', xlg2='', v-for='(item, key) of items', :key='key')
        v-card(elevation='12' color="#333")
          table
            tr
              th &Pcy;&iecy;&rcy;&iecy;&khcy;&ocy;&dcy; &icy;&zcy;
              th &Pcy;&iecy;&rcy;&iecy;&khcy;&ocy;&dcy; &vcy;
              th &kcy;&ocy;&lcy;&lcy;-&vcy;&ocy; &pcy;&iecy;&rcy;&iecy;&khcy;&ocy;&dcy;&ocy;&vcy;
            tr
              td(rowspan='4') {{item[0]}}
              //-  {{item[0] == 'l'? 'Н': item[0] == 'm'? 'С':'В' }}
            tr(v-for='(elem,i) in item[1]', :key='i') 
              td.glow {{i == 'l'? 'Н': i == 'm'? 'С':'В' }} 
              td.glow {{elem}}
            tr(style='border-top: 2px solid #6678b1 ')
              td(style='color: #ccc;') &vcy;&scy;&iecy;&gcy;&ocy; &pcy;&iecy;&rcy;&iecy;&khcy;&ocy;&dcy;&ocy;&vcy;
              td(colspan='2') {{allMoves(item[1])}}
  v-snackbar(v-model='snackbar', :timeout='timeout', :bottom="y === 'bottom'", :vertical="mode === 'vertical'")
    | &IEcy;&scy;&lcy;&icy; &vcy;&scy;&iecy; &iecy;&shchcy;&iecy; &ncy;&iecy; &zcy;&acy;&rcy;&acy;&bcy;&ocy;&tcy;&acy;&lcy;&ocy;, &tcy;&ocy; &khcy;&zcy;.
    v-btn(color='pink', flat='', @click='snackbar = false')
      | &Zcy;&acy;&kcy;&rcy;&ycy;&tcy;&softcy;

</template>
<script>
export default {
  data() {
    return {
      chartData: [],
      some: this.$store.state.mainArr.map(elem => (elem = elem.type)),
      validArray: [],
      verArray: null,
      snackbar: false,
      y: "bottom",
      x: null,
      mode: "",
      timeout: 6000
    };
  },
  props: ["data"],
  methods: {
    setChartData() {
      this.chartData = this.$store.state.mainArr;
      console.log("this.chartData", this.chartData);
    },

    async newArr() {
      let some = this.some;
      // console.log("some", some);
      let adaptiveArray = ["l", "m", "h"]; // массив с параметрами
      let catchMap = new Map();
      for (const item in adaptiveArray) {
        let returnedObj;
        let l = 0;
        let m = 0;
        let h = 0;
        for (let i = 0; i <= some.length; i++) {
          if (some[i] == adaptiveArray[item]) {
            switch (some[i + 1]) {
              case "l":
                l++;
                break;
              case "m":
                m++;
                break;
              case "h":
                h++;
                break;
            }
          }
        }
        returnedObj = {
          l: l,
          m: m,
          h: h
        };
        catchMap.set(adaptiveArray[item], returnedObj);
      }
      this.validArray = await [catchMap];
      this.MoveToNewConfiguration();
    },
    // fart() {
    //   this.MoveToNewConfiguration();
    //   this.snackbar = true;
    // },
    saveChanges() {
      this.$store.commit("setVerificArray", this.verArray);
      this.$store.commit("setDeep", this.validArray.length);
      // this.$router.push({name: 'third'});
    },
    MoveToNewConfiguration() {
      const lastMap = this.validArray[0].entries();
      if (this.validArray[0].size != 0) {
        let catchMap = new Map();
        let rate = ["l", "m", "h"];
        for (const arr of lastMap) {
          //проверка на то продолжать ли увеличивать конфигурацию с этой моделью
          let itertator = 0;
          let overlook = [];
          arr[1].l != 0 ? itertator++ : overlook.push("l");
          arr[1].m != 0 ? itertator++ : overlook.push("m");
          arr[1].h != 0 ? itertator++ : overlook.push("h");
          // console.log('Arr[1] and overlock:  ',arr[1], '  ', overlook);
          if (itertator != 1 && itertator != 0) {
            for (let i = 0; i < rate.length; i++) {
              let element = rate[i];
              if (overlook.indexOf(element) == -1) {
                let newCH = `${arr[0]}${element}`;
                //  console.log('newch:   ',newCH)

                let returnedObj;
                let l = 0;
                let m = 0;
                let h = 0;
                //пиздец хуйню пишу
                let some = this.some.join("");
                let lengthOfNewCH = newCH.length;
                let regexp = new RegExp(newCH, "g");
                // let errorCheck = false;
                let lengthOfDeep = some.match(regexp);
                if (lengthOfDeep != null) {
                  lengthOfDeep = lengthOfDeep.length;
                  for (let i = 0; i < lengthOfDeep; i++) {
                    // ll => llm,lll,llh
                    let index = some.search(regexp);
                    some = some.split("");
                    some.splice(index, lengthOfNewCH);
                    some = some.join(""); // если все в одну строку через точку писать, то все ловмается, хотя все рвно говнокод, убейте меня
                    switch (some[index]) {
                      case "l":
                        l++;
                        break;
                      case "m":
                        m++;
                        break;
                      case "h":
                        h++;
                        break;
                    }
                  }
                  // console.log(`CH = ${newCH} => l: ${l}, m: ${m} h ${h} `);
                  returnedObj = {
                    l: l,
                    m: m,
                    h: h
                  };

                  if (returnedObj.l + returnedObj.m + returnedObj.h != 0) {
                    catchMap.set(newCH, returnedObj);
                  }
                }
              }
            }
          }
        }
        this.validArray = [catchMap, ...this.validArray];
        this.MoveToNewConfiguration();
      } else {
        this.validArray.shift();

        let finalArray = new Array();
        this.verArray = this.validArray;
        for (let i = 0; i < this.validArray.length; i++) {
          finalArray.push(Array.from(this.validArray[i]));
        }
        this.validArray = finalArray;
      }
    },
    allMoves(o) {
      this.saveChanges();
      return Object.keys(o).reduce(function(previous, key) {
        return previous + o[key];
      }, 0);
    }
  },
  mounted() {
    this.newArr();
    this.setChartData();
  }
};
</script>

<style lang="scss">
table {
  font-family: "Lucida Sans Unicode", "Lucida Grande", Sans-Serif;
  font-size: 14px;
  // background: white;
  // max-width: 200px;
  display: inline;
  border-collapse: collapse;
  text-align: center;
  margin-bottom: 2em;
}
th {
  font-weight: normal;
  color: #bbb;
  border-bottom: 2px solid #6678b1;
  padding: 10px 8px;
}
td {
  // color: #669;
  padding: 9px 8px;
  transition: 0.3s linear;
}
tr:hover td {
  color: #fff;
  cursor: pointer;
}
.glow {
  color: #eee;
  text-shadow: 0 0 7px #41b883;
}
</style>
