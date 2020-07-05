<template lang="pug">
div 
    highcharts( :id="propId" style="display: inline-block; width: 900px" ref="highcharts"  :options="columnChart")
    v-dialog(v-model='isDialogOpen', width='350')
      v-card
        v-card-title(style='background: #333', primary-title='') Меню редактирования
        v-card-text
          p Положение
          v-btn-toggle(v-model='term', shaped='', mandatory='')
            v-btn(style="background: #f5a016") Низкое
              
            v-btn(style="background: #41B883") Среднее
              v-icon mdi-format-align-right
            v-btn(style="background: #e32d00") Высокое
              v-icon mdi-format-align-justify
          v-text-field(label='Значение' v-model="pointValue")

        v-divider
        v-card-actions
          v-spacer
          v-btn(color='primary', text='', @click='dialog = false') Отмена
          v-btn(color='primary', text='', @click='dialog = false') Изменить

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
    },
    isCustom: {
      type: Boolean
    },
    propId: {
      type: String,
      default: "noId"
    }
  },

  data() {
    return {
      testTable: [],
      term: "",
      chart: {},
      columnChart: {},
      isDialogOpen: false,
      pointValue: ""
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
    editValue(point) {
      console.log(point);
      this.isDialogOpen = true;
    },
    setChart() {
      this.columnChart = {
        title: {
          text: this.isCustom ? "Процент ошибок" : "Показатели за весь период"
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
      let _that = this;
      for (const index in this.data) {
        this.columnChart.series.push({
          type: "column",
          borderRadius: 2,
          name: `Элемент ВР № ${parseInt(index) + 1}`,
          events: {
            click(e) {
              _that.editValue(e.point);
            }
          },
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
            name: this.isCustom ? "Не угадно" : "Мал.",
            y: propsCounter.l,
            color: "#e32d00"
          },
          {
            name: this.isCustom ? "Не учитываются" : "Ср.",
            y: propsCounter.m,
            color: "#f5a016"
          },
          {
            name: this.isCustom ? "Угадано" : "Бол.",
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
