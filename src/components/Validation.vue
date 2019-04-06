<template>
<!-- Верефикация а не  валидация жиесть -->
  <v-card>
    <!-- <pre>{{mainArr}}</pre> -->
    <pre>{{validArray}}</pre>
    <table></table>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      // mainArr: [
      //   {
      //     item: 2,
      //     type: "low",
      //     serialNumber: 0
      //   },
      //   {
      //     item: 9,
      //     type: "high",
      //     serialNumber: 1
      //   },
      //   {
      //     item: 5,
      //     type: "middle",
      //     serialNumber: 2
      //   },
      //   {
      //     item: 10,
      //     type: "high",
      //     serialNumber: 4
      //   },
      //   {
      //     item: 1,
      //     type: "low",
      //     serialNumber: 3
      //   },
      //   {
      //     item: 6,
      //     type: "middle",
      //     serialNumber: 5
      //   }
      // ],
      validArray: []
    };
  },
  props: [
    'data'
  ],
  methods: {
    newArr() {
      // console.log(this.mainArr.map(elem => elem = elem.type))
      // return this.mainArr.map(elem => elem = elem.type)
      // console.log('data',this.data)
      let some = this.$store.state.mainArr.map(elem => (elem = elem.type));
      console.log('some',some)
      let adaptiveArray = ["low", "middle", "high"]; // массив с параметрами, будет дополнятся
      let levelArray = []; // объект в который будут собираться все параметры данной хуйни 
      for (const item in adaptiveArray) {
        let returnedObj;
        let low = 0;
        let middle = 0;
        let high = 0;
        for (let i = 0; i <= some.length; i++) {
          // console.log(`that observe item - ${some[i]}, adaptiveArray item - ${adaptiveArray[item]}`)
          if (some[i] == adaptiveArray[item]) {
            switch (some[i+1]) {
              case "low":
                low++;
                break;
              case "middle":
                middle++;
                break;
              case "high":
                high++;
                break;
            }
          }
          // TODO: крч, ебануть правильную хуйню, когд делаешь норм массив DONE
        }
        console.log(`Low: ${low}, Middle: ${middle} High ${high} `);
        returnedObj = {
          toLow: low,
          toMiddle: middle,
          tiHigh: high
        };
        // console.log(`dats arr - ${returnedObj}`);
          levelArray = [
              ...levelArray,
              returnedObj,
          ]
      }
        this.validArray = {
          first: levelArray

        }
      
    },
    MoveToNewConfiguration(){
    let newConf = this.validArray[length-1].map(obj => {
        for (const elem of obj) {
           for (const type of elem) {
            //  if(type == )
           }
          //крч, конкатить к названи итема оъекта тайп обрабатываемой итерации, а дальше логика 93 строчки и  функции newArr(). вотъ
          //while obj type!=0 то хуячить. 
        }
      })
    }
  },
  mounted() {
    this.newArr()
  }
};
</script>

<style lang="scss">
</style>

