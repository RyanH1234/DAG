import Vue from "vue";
import Vuex from "vuex";

import { shuffle } from "../helper/shuffle.js";

import cards from "../../data.json";
const shuffledCards = shuffle(cards);

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    midnight: null,
    cards: shuffledCards
  },
  getters: {
    getCards(state) {
      const cards = state.cards;
      return cards;
    },
    getCurrentCard(state) {
      const cards = state.cards;
      const currentCard = cards[0];
      return currentCard;
    },
    getMidnight(state) {
      const midnight = state.midnight;
      return midnight;
    }
  },
  mutations: {
    reorderCards(state, reOrderedCards) {
      state.cards = reOrderedCards;
    },
    nextCard(state) {
      let cards = state.cards;
      const [head, ...tail] = cards;
      cards = tail.concat(head);
      state.cards = cards;
    },
    setMidnight(state, midnight) {
      state.midnight = midnight;
    }
  }
});

export default store;
