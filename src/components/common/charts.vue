<template lang="pug">
div 
    highcharts( style="display: inline-block; width: 900px" ref="highcharts"  :options="columnChart")
</template>

<script>
export default {
  props: {
    data: {
      type: Array
    },
    type: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      testTable: [],
      chart: {},
      columnChart: {}
    };
  },
  watch: {
    data() {
      this.setChart();
    }
  },
  mounted() {
    this.setChart();
  },
  methods: {
    setChart() {
      this.columnChart = {
        title: {
          text: "Показатели за весь период"
        },
        legend: {
          enabled: this.type === "simple" ? true : false
        },
        xAxis: {
          title: {
            text: "Значения"
          }
        },
        yAxis: {
          min: 0,
          title: {
            text: "Данные"
          }
        },
        labels: {
          //   items: [
          //     {
          //       html: "Total fruit consumption",
          //       style: {
          //         left: "50px",
          //         top: "18px",
          //         color: "black"
          //       }
          //     }
          //   ]
        },
        series: []
      };
      if (this.type === "simple") {
        this.buildSimpleColumnChart();
      }
      if (this.type === "colored") {
        this.buildColoredChart();
      }
    },
    buildSimpleColumnChart() {
      this.columnChart.series[0] = {
        type: "column",
        name: "Данные",
        data: [...this.data]
      };
      // console.log(this.data);
    },
    buildColoredChart() {
      this.columnChart.labels = {
        items: [
          {
            html: "Общее колличество показателей",
            style: {
              left: "10px",
              top: "18px",
              color: "black"
            }
          }
        ]
      };
      let propsCounter = {
        l: 0,
        m: 0,
        h: 0
      };
      for (const index in this.data) {
        this.columnChart.series.push({
          type: "column",
          borderRadius: 2,
          name: `Элемент ВР № ${parseInt(index) + 1}`,
          color:
            this.data[index].type == "m"
              ? "#f5a016"
              : this.data[index].type == "h"
              ? "#41B883"
              : "#e32d00",
          data: [this.data[index].item]
        });
        propsCounter[this.data[index].type]++;
      }

      this.columnChart.series.push({
        type: "pie",
        name: "Общее колличество",
        data: [
          {
            name: "Мал.",
            y: propsCounter.l,
            color: "#e32d00"
          },
          {
            name: "Ср.",
            y: propsCounter.m,
            color: "#f5a016"
          },
          {
            name: "Больш.",
            y: propsCounter.h,
            color: "#41B883"
          }
        ],
        center: [100, 80],
        size: 100,
        showInLegend: false,
        dataLabels: {
          enabled: false
        }
      });
    }
  }
};
</script>
