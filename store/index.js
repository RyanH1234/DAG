import Vue from 'vue'
import Vuex from 'vuex'

import cards from "../data.json";

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    data: cards
  },
  getters: {
    getCards: state => {
      return state.data;
    }
  }
});

export default store;