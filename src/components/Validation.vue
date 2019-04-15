<template>
<!-- Верефикация а не  валидация жиесть -->
  <v-card>
    <!-- <pre>{{mainArr}}</pre> -->
    <!-- <pre>{{validArray}}</pre> -->
  
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
      // console.log('some',some)
      let adaptiveArray = ["low", "middle", "high"]; // массив с параметрами, будет дополнятся
      let catchMap = new Map();
      //let levelArray = new Array; // объект в который будут собираться все параметры данной хуйни 
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
          toHigh: high
        };
        catchMap.set(
          adaptiveArray[item], returnedObj
        )
        // console.log(`dats arr - ${returnedObj}`);
          // levelArray = [
          //     ...levelArray,
          //     returnedObj,
          // ]
      }
      // console.log(catchMap,catchMap.get('low'),catchMap.keys()[0],catchMap.values())
        this.validArray = [
          // first: levelArray
          catchMap
        ]
        this.MoveToNewConfiguration()
      
    },
    MoveToNewConfiguration(){
        // console.log(this.validArray[length-1].entries())
        //  for(let i = 0; i <= this.validArray[length-1]; i++){
        //  }
        const lastMap = this.validArray[length-1].entries()

        for (const arr of lastMap) {
          //проверка на то продолжать ли увеличивать конфигурацию с этой моделью 
       let itertator = 0;
       arr[1].toLow != 0 ? itertator++ : false;
       arr[1].toMiddle != 0 ? itertator++ : false;
       arr[1].toHigh != 0 ? itertator++ : false;  
        // console.log(itertator)
          if(itertator != 1){
            let newCh = `${arr[0]}|${d}`
          }
        }
        
    }
  },
  mounted() {
    this.newArr()
    
  }
};

</script>

<style lang="scss">
</style>

