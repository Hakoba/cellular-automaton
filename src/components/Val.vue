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
    <v-card class="mb-4" >
        <table>
          <tr>
            <th>№</th>
            <th>Low</th>
            <th>Middle</th>
            <th>High</th>
          </tr>
          <tr v-for="(item,index) in validArray" :key='index'>
              <td>{{index+1}}</td>
              <td v-for="(elem,index) in item" :key='index'>{{elem}}</td>
          </tr>
        </table>

    </v-card>
     <v-card>
         <!-- <pre> {{verArray[verArray.length-1]}}</pre> -->
         <ul>
           <li v-for="(item,index) of verArray" :key="index">
                  {{item}}
           </li>
         </ul>
         
        </v-card>
        <v-card>
           <ul>
           <li v-for="(item,index) of mainArray" :key="index">
                  {{item}}
           </li>
         </ul>
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
        validArray: []
    }
  },
   methods: {
        findBlah(){
               let mainObj = this.mainArray;
              
               let verArray  = this.verArray;
              //  verArray = verArray.reverse();
               let deep = this.deep;
               let str = mainObj[length-1]
               let mainArray= new Array()
               for (let i = 0; i < mainObj.length; i++) {
                 mainArray.push(mainObj[i].type)
               }
               let MALength = mainArray.length;
               console.log(`MALength ${MALength}, deep ${deep}`)
               let counter = 0
              //  for (let index = 0; index < 7; index++) {
             
               for (let index = 0; index < MALength; index++) {
                  let lastTypes = []
                     counter++
                  lastTypes = mainArray.slice(-deep)
                  mainArray.pop( );
                   let toLow = [],toMiddle =[],toHigh=[],l =null,m = null,h =null;
                    for (let i = 1; i <= lastTypes.length; i++) {
                    //выводим последние элементs
                    let types = lastTypes.slice(-i).join('');
                    let map = verArray[verArray.length - i];
                    console.log(map, types)
                    if (map.has(types)){
                    let cases = map.get(types) // это крч, l m h со значениеями от даннго types
                    // console.log('kek')
                    let sum = cases.l + cases.m + cases.h;
                    
                    toLow.push(cases.l/sum);
                    toMiddle.push(cases.m/sum);
                    toHigh.push(cases.h/sum);
                    // console.log('cases: ', cases )
                    }
                    else{
                      console.error('error, dats table isn\'t exist, it\'s normal -- calm down!')
                      //  return null
                    }
                  }
                  // console.log(toLow,toMiddle,toHigh)
                  console.log('counter: ', counter)
                  let forecast = this.makeForecast(toLow,toMiddle,toHigh)
                  console.log('arrays: ', forecast)
                  this.validArray.push(forecast)
                  //  
                 
               }
                  return this.validArray
              //  console.log( 'mainArray = ', mainArray) //, verArray[length-1]
              //  return str;
        },
        makeForecast(l,m,h){
                 let low = 0,
                  middle = 0,
                  high = 0;
                console.log(this.deep)
                for (let index = 0; index < l.length; index++) {
                    
                      let sum = l[index] + m[index] + h[index];
                      low = low + l[index]
                      middle+= m[index]
                      high+= h[index]
                      // console.log(`low: ${low}, middle:${middle}, high: ${high} --  l = ${l[index]}, m = ${m[index]} h = ${h[index]}-- sum = ${sum}`)
                }
                let summ = low + middle + high;
                return  {
                  l : low/summ,
                  m : middle/summ,
                  h : high/summ,
                }
        }
    },
    mounted(){
      this.findBlah()
    }
}
</script>

<style lang='scss'>
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
