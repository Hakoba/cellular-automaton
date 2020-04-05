<template>
  <!-- Верефикация а не  валидация жиесть -->
  <div>
     <v-tooltip class="small" bottom>
        <template class=" ml-5" v-slot:activator="{ on }">
             <v-btn  v-on="on" @click="fart()">ТЫк</v-btn>
     </template>
    <span>Если вдрг не заработало, должно починиться</span>
    </v-tooltip>
     <v-tooltip class="small" bottom>
        <template class=" ml-5" v-slot:activator="{ on }">
             <v-btn  v-on="on" @click="saveChanges()">валидация</v-btn>
     </template>
    <span>Переход на валидацию</span>
    </v-tooltip>
    <v-container grid-list-md text-xs-center v-for="(items,index) in validArray" :key="index">
      <h2>Конфиурация № {{validArray.length - index}}</h2> 
      <v-layout row wrap >
        <!-- <v-flex xs3 > -->
           
          
          <v-flex xs12 sm6 md4 lg3 xlg2 class="mb-3"  v-for="(item, key) of items" :key="key">
            <v-card>
            <table>
              <tr>
                <th>Переход из</th>
                <th>Переход в</th>
                <th>колл-во переходов</th>
              </tr>
              <tr>
                <td rowspan="4">{{item[0]}}</td>
              </tr>
              <tr v-for="(elem,i) in item[1]" :key="i">
                <td>{{i}}</td>
                <td>{{elem}}</td>
              </tr>
              <tr style="border-top: 2px solid #6678b1 ">
                <td style="color: #039;">всего переходов</td>
                <td colspan="2">{{allMoves(item[1])}}</td>
              </tr>
            </table> 
            
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
       <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
      :bottom="y === 'bottom'"
      :vertical="mode === 'vertical'"
    >
        Если все еще не заработало, то хз.
      <v-btn
        color="pink"
        flat
        @click="snackbar = false"
      >
        Закрыть
      </v-btn>
    </v-snackbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      some: this.$store.state.mainArr.map(elem => (elem = elem.type)),
      validArray: [],
      verArray: null,
      snackbar: false,
        y: 'bottom',
        x: null,
        mode: '',
        timeout: 6000,
    };
  },
  props: ["data"],
  methods: {
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
        // console.log(`l: ${l}, m: ${m} h ${h} `);
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
    fart(){
      this.MoveToNewConfiguration(); 
      this.snackbar = true;
    },
    saveChanges(){
      this.$store.commit('setVerificArray', this.verArray)
      this.$store.commit('setDeep', this.validArray.length)
      this.$router.push('/third');
    },
    MoveToNewConfiguration() {
      console.log('call Func');
      const lastMap = this.validArray[0].entries();
      // console.log('Sizes  ',this.validArray[0].size )
      if (this.validArray[0].size != 0) {
        console.log(
          `Начало работы с конфигурацией № ${this.validArray.length + 1}`
        );
        let catchMap = new Map();
        let rate = ["l", "m", "h"];
        for (const arr of lastMap) {
          //проверка на то продолжать ли увеличивать конфигурацию с этой моделью
          let itertator = 0;
          let overlook = [];
          // console.log('arrIn lastMap:', arr);
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
                let errorCheck = false;
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

                  if(returnedObj.l + returnedObj.m + returnedObj.h != 0){
                  catchMap.set(newCH, returnedObj);
                  }
                  
                }
              }
            }
          }
        }
        console.log('catchMap',catchMap);
        this.validArray = [catchMap, ...this.validArray];
        this.MoveToNewConfiguration();
      } else {
        this.validArray.shift();
        // console.log(
        //   `Максимальный уовень конфигурации: ${this.validArray.length}`
        // );
        // console.log(Array.from(this.validArray[0]))
        let finalArray = new Array();
        this.verArray = this.validArray;
        for (let i = 0; i < this.validArray.length; i++) {
          finalArray.push(Array.from(this.validArray[i]));
        }
        this.validArray = finalArray;
      }
    },
    allMoves(o) {
      return Object.keys(o).reduce(function(previous, key) {
        return previous + o[key];
      }, 0);
    }
  },
  mounted() {
    this.newArr();
  }
};
</script>

<style lang="scss">
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
th {
  font-weight: normal;
  color: #039;
  border-bottom: 2px solid #6678b1;
  padding: 10px 8px;
}
td {
  color: #669;
  padding: 9px 8px;
  transition: 0.3s linear;
}
tr:hover td {
  color: #6699ff;
}
</style>