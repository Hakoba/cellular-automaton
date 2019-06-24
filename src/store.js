import Vue from 'vue'
import Vuex from 'vuex'
import { stat } from 'fs';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
   
    players: null,
  },
  mutations: {
      setPlayers (state,payload) {
          state.players = payload
          // console.log(state.mainArr)
      },
      setVerificArray(state,payload) {
        state.verArray = payload;
      },
      setDeep(state,payload) {
        console.log('DDDDDDDDDDDEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEPPPPPP')
        state.deep = payload;
      }
  },
  actions: {

  }
})