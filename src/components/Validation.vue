<template>
  <v-card>
      <!-- <pre>{{mainArr}}</pre> -->
    <pre>{{newArr}}</pre>
    <table>
        
    </table>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      mainArr: [
        {
          item: 11,
          type: "low",
          serialNumber: 0
        },
        {
          item: 14,
          type: "low",
          serialNumber: 1
        },
        {
          item: 22,
          type: "middle",
          serialNumber: 2
        },
        {
          item: 26,
          type: "high",
          serialNumber: 3
        },
        {
          item: 28,
          type: "high",
          serialNumber: 4
        },
        {
          item: 18,
          type: "middle",
          serialNumber: 5
        }
      ],
     
    };
  },
  computed: {
      newArr(){
          return  this.mainArr.map(elem => elem = elem.type)
      }
  },
  mounted(){
      
  }
};
</script>

<style lang="scss">
</style>

