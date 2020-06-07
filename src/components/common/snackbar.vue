<template>
  <v-snackbar v-model="snackbar" :timeout="timeout" bottom vertical>
    {{ text }}
    <v-btn color="red" text @click="snackbar = false">Close</v-btn>
  </v-snackbar>
</template>

<script>
// import { mapState } from "vuex";
export default {
  props: {
    text: {
      type: String,
      required: false,
      default: "Ошибка"
    },
    timeout: {
      type: Number,
      required: false,
      default: 3e3
    },
    snackbar: {
      type: Boolean,
      required: true
    }
  }
  //   computed: mapState({
  //     // стрелочные функции могут сделать код очень кратким
  //     count: state => state.count,

  //     // передача строки 'count' аналогична записи `state => state.count`
  //     countAlias: 'count',

  //     // для доступа к локальному состоянию через `this`,
  //     // необходимо использовать обычную функцию
  //     countPlusLocalState(state) {
  //       return state.count + this.localCount;
  //     }
  //   })
};
</script>
