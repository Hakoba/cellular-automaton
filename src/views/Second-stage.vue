<template>
  <div class="small">
      <h1>Второй шаг</h1>
    <v-card>
     <v-btn class="info"><router-link to="/">Назад</router-link></v-btn>
    <!-- <validation :datasets='datasets'></validation> -->
      
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
    <validation :data='datasets'/>
    <v-card>
     <!-- <v-btn class="info" @click="lmh()">Найти</v-btn> -->
    </v-card>
  </div>
</template>
<script>
  import Validation from '@/components/Validation.vue'
  import BarChart from '@/components/BarExample.js'
  
  export default {
     components: {
      BarChart,
      Validation
    },
    data(){
      return{
         datacollection: null,
        datasets: []
      }
    }
    ,
     methods: {
  },
  beforeMount() {
     this.datasets = this.$store.state.mainArr.map( elem => {
     return elem = {
        label: `Число №${elem.serialNumber}`,
        backgroundColor: (elem.type=='high')?'rgb(241, 38, 214)': (elem.type=='middle')? 'rgb(228, 186, 0)':'rgb(17, 14, 2)',
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