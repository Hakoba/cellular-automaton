import Vue from 'vue'
import Vuex from 'vuex'
import { stat } from 'fs';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mainArr: [],
  },
  mutations: {
      setMainArr (state,payload) {
          state.mainArr = payload
          console.log(state.mainArr)
      }
  },
  actions: {

  }
})
