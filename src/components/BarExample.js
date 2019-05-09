import { Bar, mixins, Line } from 'vue-chartjs'
const { reactiveProp } = mixins
export default {
  
  extends: Bar,
  responsive: false,
  // maintainAspectRatio: false,
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
    Chart.defaults.global.legend.display = false;
    // Chart.canvas.parentNode.style.height = '600px';
    // Chart.canvas.parentNode.style.width = '300px'; 
     
    console.log('chart',Chart.canvas)
    this.renderChart(this.chartData, this.opt)
    
}
}
