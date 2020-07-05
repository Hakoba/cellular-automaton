import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    mainArr: [],
    verArray: [], //массив полченный после верификации
    deep: null,
    buildInited: false,
    validArray: [],
    def: 0,
  },
  mutations: {
    setMainArr(state, payload) {
      state.buildInited = true;
      state.mainArr = payload;
      // console.log(state.mainArr)
    },
    setVerificArray(state, payload) {
      state.verArray = payload;
    },
    setValidArray(state,payload){
      state.validArray = payload;
    },
    setDeep(state, payload) {
      // console.log('DDDDDDDDDDDEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEPPPPPP')
      state.deep = payload;
    },
  },
  actions: {},
});
