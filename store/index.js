import Vue from "vue";
import Vuex from "vuex";

import cards from "../data.json";
const shuffledCards = shuffle(cards);

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    cards: shuffledCards,
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
    }
  },
  mutations: {
    reorderCards(state, reOrderedCards) {
      state.cards = reOrderedCards;
    },
    nextCard(state) {
      let cards = state.cards;
      const [head, ...tail] = cards;
      cards = tail.concat(head)
      state.cards = cards;
    }
  },
});

function shuffle(array) {
  const array_cpy = [...array];
  const array_length = array.length - 1;

  for(let i = array_length; i > 0; i--){
    const j = Math.floor(Math.random() * i)
    const temp = array_cpy[i]
    array_cpy[i] = array_cpy[j]
    array_cpy[j] = temp
  }

  return array_cpy;
}

export default store;
