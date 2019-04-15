import { Bar, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins
export default {
  extends: Bar,
  scales: {
    xAxes: [{
      gridLines: {
        display: true
      }
    }],
    yAxes: [{
      gridLines: {
        display: true
      },
      ticks: {
      min: 0,           
      max: 100,
      }
    }]
  },
  mixins: [reactiveProp],
  props: ['options'],
  data() {
    return {
      opt: {
    ...this.options,
    scales: {
      yAxes: [{
        barPercentage: 0.5
      }]
    }
      }
    }
  },
  mounted () {
    this.renderChart(this.chartData, this.opt)
    
}
}
