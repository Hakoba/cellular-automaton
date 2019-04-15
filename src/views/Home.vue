<template>
  <div class="small">
    <h1>Первый Шаг</h1>
    <v-card>
       <v-text-field
            ref='btn'
            v-model="number"
            label="Введите число"
            v-on:keyup.enter='addColumn()'
          ></v-text-field>
    </v-card>
     <v-btn class="info" @click="addColumn()">Add column</v-btn>
     <v-btn class="info" @click="lmh()">Найти</v-btn>
     
     <router-link to="/validation">
        <v-btn class="info">Валидация</v-btn>
     </router-link>
     <!-- <v-btn class="info" @click="fillData()">Randomize</v-btn> -->
    <bar-chart :chart-data="datacollection" :options="options"></bar-chart>
    <v-card>

      <pre>{{arrayOfNumber}}</pre>
         <pre>{{finalArray}}</pre>
    </v-card>
  </div>
</template>

<script>
  import BarChart from '@/components/BarExample.js'

  export default {
    
    components: {
      BarChart
    },
    data () {
      return {
        datacollection: null,
        number: '',
        options: {  scales: {
          yAxes: [{
            ticks: {
               min: 0,           
              max: 30,
              // callback: (value, index, values) => {
              //   return `£ ${value} ${this.currency}`;
              // },
            },
          }],
        }},
         datasets: [
            {
              label: 'f',
              backgroundColor: '#1a12fa',
              data: [this.getRandomInt()]
            }, {
              label: 'f',
              backgroundColor: '#1a12fa',
              data: [this.getRandomInt()]
            },
              {
              label: 'f',
              backgroundColor: '#1a12fa',
              data: [this.getRandomInt()]
            }, {
              label: 'f',
              backgroundColor: '#1a12fa',
              data: [this.getRandomInt()]
            },
              {
              label: 'f',
              backgroundColor: '#1a12fa',
              data: [this.getRandomInt()]
            }, {
              label: 'f',
              backgroundColor: '#1a12fa',
              data: [this.getRandomInt()]
            },
              {
              label: 'f',
              backgroundColor: '#1a12fa',
              data: [this.getRandomInt()]
            }, {
              label: 'f',
              backgroundColor: '#1a12fa',
              data: [this.getRandomInt()]
            },
              {
              label: 'f',
              backgroundColor: '#1a12fa',
              data: [this.getRandomInt()]
            }, {
              label: 'f',
              backgroundColor: '#1a12fa',
              data: [this.getRandomInt()]
            },
              {
              label: 'f',
              backgroundColor: '#1a12fa',
              data: [this.getRandomInt()]
            }, {
              label: 'f',
              backgroundColor: '#1a12fa',
              data: [this.getRandomInt()]
            },
              {
              label: 'f',
              backgroundColor: '#1a12fa',
              data: [this.getRandomInt()]
            }, {
              label: 'f',
              backgroundColor: '#1a12fa',
              data: [this.getRandomInt()]
            },
              {
              label: 'f',
              backgroundColor: '#1a12fa',
              data: [this.getRandomInt()]
            }, {
              label: 'f',
              backgroundColor: '#1a12fa',
              data: [this.getRandomInt()]
            },
              {
              label: 'f',
              backgroundColor: '#1a12fa',
              data: [this.getRandomInt()]
            }, {
              label: 'f',
              backgroundColor: '#1a12fa',
              data: [this.getRandomInt()]
            },
              {
              label: 'f',
              backgroundColor: '#1a12fa',
              data: [this.getRandomInt()]
            }, {
              label: 'f',
              backgroundColor: '#1a12fa',
              data: [this.getRandomInt()]
            },
              {
              label: 'f',
              backgroundColor: '#1a12fa',
              data: [this.getRandomInt()]
            }, {
              label: 'f',
              backgroundColor: '#1a12fa',
              data: [this.getRandomInt()]
            },
              {
              label: 'f',
              backgroundColor: '#1a12fa',
              data: [this.getRandomInt()]
            }, {
              label: 'f',
              backgroundColor: '#1a12fa',
              data: [this.getRandomInt()]
            },
              {
              label: 'f',
              backgroundColor: '#1a12fa',
              data: [this.getRandomInt()]
            }, {
              label: 'f',
              backgroundColor: '#1a12fa',
              data: [this.getRandomInt()]
            },
             {
              label: 'f',
              backgroundColor: '#1a12fa',
              data: [this.getRandomInt()]
            }, {
              label: 'f',
              backgroundColor: '#1a12fa',
              data: [this.getRandomInt()]
            },
              {
              label: 'f',
              backgroundColor: '#1a12fa',
              data: [this.getRandomInt()]
            }, {
              label: 'f',
              backgroundColor: '#1a12fa',
              data: [this.getRandomInt()]
            },
              {
              label: 'f',
              backgroundColor: '#1a12fa',
              data: [this.getRandomInt()]
            }, {
              label: 'f',
              backgroundColor: '#1a12fa',
              data: [this.getRandomInt()]
            },
              {
              label: 'f',
              backgroundColor: '#1a12fa',
              data: [this.getRandomInt()]
            }, {
              label: 'f',
              backgroundColor: '#1a12fa',
              data: [this.getRandomInt()]
            },
              {
              label: 'f',
              backgroundColor: '#1a12fa',
              data: [this.getRandomInt()]
            }, {
              label: 'f',
              backgroundColor: '#1a12fa',
              data: [this.getRandomInt()]
            },
              {
              label: 'f',
              backgroundColor: '#1a12fa',
              data: [this.getRandomInt()]
            }, {
              label: 'f',
              backgroundColor: '#1a12fa',
              data: [this.getRandomInt()]
            },
              {
              label: 'f',
              backgroundColor: '#1a12fa',
              data: [this.getRandomInt()]
            }, {
              label: 'f',
              backgroundColor: '#1a12fa',
              data: [this.getRandomInt()]
            },
              {
              label: 'f',
              backgroundColor: '#1a12fa',
              data: [this.getRandomInt()]
            }, {
              label: 'f',
              backgroundColor: '#1a12fa',
              data: [this.getRandomInt()]
            },
              {
              label: 'f',
              backgroundColor: '#1a12fa',
              data: [this.getRandomInt()]
            }, {
              label: 'f',
              backgroundColor: '#1a12fa',
              data: [this.getRandomInt()]
            },
              {
              label: 'f',
              backgroundColor: '#1a12fa',
              data: [this.getRandomInt()]
            }, {
              label: 'f',
              backgroundColor: '#1a12fa',
              data: [this.getRandomInt()]
            },
             {
              label: 'f',
              backgroundColor: '#1a12fa',
              data: [this.getRandomInt()]
            }, {
              label: 'f',
              backgroundColor: '#1a12fa',
              data: [this.getRandomInt()]
            },
              {
              label: 'f',
              backgroundColor: '#1a12fa',
              data: [this.getRandomInt()]
            }, {
              label: 'f',
              backgroundColor: '#1a12fa',
              data: [this.getRandomInt()]
            },
              {
              label: 'f',
              backgroundColor: '#1a12fa',
              data: [this.getRandomInt()]
            }, {
              label: 'f',
              backgroundColor: '#1a12fa',
              data: [this.getRandomInt()]
            },
              {
              label: 'f',
              backgroundColor: '#1a12fa',
              data: [this.getRandomInt()]
            }, {
              label: 'f',
              backgroundColor: '#1a12fa',
              data: [this.getRandomInt()]
            },
              {
              label: 'f',
              backgroundColor: '#1a12fa',
              data: [this.getRandomInt()]
            }, {
              label: 'f',
              backgroundColor: '#1a12fa',
              data: [this.getRandomInt()]
            },
              {
              label: 'f',
              backgroundColor: '#1a12fa',
              data: [this.getRandomInt()]
            }, {
              label: 'f',
              backgroundColor: '#1a12fa',
              data: [this.getRandomInt()]
            },
              {
              label: 'f',
              backgroundColor: '#1a12fa',
              data: [this.getRandomInt()]
            }, {
              label: 'f',
              backgroundColor: '#1a12fa',
              data: [this.getRandomInt()]
            },
              {
              label: 'f',
              backgroundColor: '#1a12fa',
              data: [this.getRandomInt()]
            }, {
              label: 'f',
              backgroundColor: '#1a12fa',
              data: [this.getRandomInt()]
            },
              {
              label: 'f',
              backgroundColor: '#1a12fa',
              data: [this.getRandomInt()]
            }, {
              label: 'f',
              backgroundColor: '#1a12fa',
              data: [this.getRandomInt()]
            },
              {
              label: 'f',
              backgroundColor: '#1a12fa',
              data: [this.getRandomInt()]
            }, {
              label: 'f',
              backgroundColor: '#1a12fa',
              data: [this.getRandomInt()]
            },
             {
              label: 'f',
              backgroundColor: '#1a12fa',
              data: [this.getRandomInt()]
            }, {
              label: 'f',
              backgroundColor: '#1a12fa',
              data: [this.getRandomInt()]
            },
              {
              label: 'f',
              backgroundColor: '#1a12fa',
              data: [this.getRandomInt()]
            }, {
              label: 'f',
              backgroundColor: '#1a12fa',
              data: [this.getRandomInt()]
            },
              {
              label: 'f',
              backgroundColor: '#1a12fa',
              data: [this.getRandomInt()]
            }, {
              label: 'f',
              backgroundColor: '#1a12fa',
              data: [this.getRandomInt()]
            },
              {
              label: 'f',
              backgroundColor: '#1a12fa',
              data: [this.getRandomInt()]
            },
          ],
        arrayOfNumber: [],
        counter: 0,
        finalArray:[]
      }
    },
    mounted () {
      this.fillData()
    },
    methods: {
    fillData () {
        this.datacollection = {
          labels: ['Временной ряд'],
          datasets: this.datasets,
          
        }
      },
    randomColor() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    return "rgb(" + x + "," + y + "," + z + ")";
    },
    lmh (){
      this.datasets.map(item => this.arrayOfNumber.push(item.data[0]))
     let min = Math.min.apply(null,this.arrayOfNumber);
     let max = Math.max.apply(null,this.arrayOfNumber);
     let average = (max-min)/3;
     console.log(average,min,max);
     let cntr = 0
     for (const item of this.arrayOfNumber) {
     
       if(item <= max-average && item >= +min+average ){

         this.finalArray.push({item,type:'middle',serialNumber: cntr})

       }
       else if (item <= +min+average ){
         this.finalArray.push({item, type:'low',serialNumber: cntr})
       }
       else{
         this.finalArray.push({item,type:'high',serialNumber: cntr})
       }
         cntr++;
     }
      this.$store.commit('setMainArr', this.finalArray)
        this.$router.push('/second');
      
    },
      getRandomInt () {
        return  Math.floor(12 + Math.random() * (30 + 1 - 12))
  
      },
      addColumn () {
        this.counter++;
        this.datasets.push({
          label: `Число № ${this.counter}`,
          backgroundColor: this.randomColor(),
          data: [parseInt(this.number)]
        })
        this.number = '';
        this.fillData();
        this.$refs.btn.focus();
      }
    }
  }
</script>

<style>
  .small {
    max-width: 600px;
    margin:  30px auto;
    /* color: rgb(17, 14, 2); */
  }
</style>