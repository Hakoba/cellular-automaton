<template>
  <div class="small">
      <h1>Второй шаг</h1>
    <v-card>
     <v-btn class="info"><router-link to="/">Назад</router-link></v-btn>

    
       <!-- <v-text-field
            ref='btn'
            v-model="number"
            label="Введите число"
          ></v-text-field> -->
          <!-- <pre>{{$store.state.mainArr}}</pre> -->
    </v-card>
     <!-- <v-btn class="info" @click="addColumn()">Add column</v-btn> -->
     <!-- <v-btn class="info" @click="fillData()">Randomize</v-btn> -->
    <bar-chart :chart-data="datacollection"></bar-chart>
    <v-card>
     <!-- <v-btn class="info" @click="lmh()">Найти</v-btn> -->

     
    </v-card>
  </div>
</template>
<script>
  import BarChart from '@/components/BarExample.js'

  export default {
     components: {
      BarChart
    },
    data(){
      return{
         datacollection: null,
        datasets: []
      }
    }
    ,
     methods: {
    fillData () {
       
      },
  },
  beforeMount() {
     this.datasets = this.$store.state.mainArr.map( elem => {
     return elem = {
        label: `Число №${elem.serialNumber}`,
        backgroundColor: (elem.type=='high')?'#ff0000': (elem.type=='middle')? '#00ff00':'#0000ff',
        data: [elem.item]
      }
    })
    },
    mounted(){
 this.datacollection = {
          labels: ['Временной ряд'],
          datasets: this.datasets
        }
    }
  }
</script>