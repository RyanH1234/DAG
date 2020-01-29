import Vue from "vue";
import Vuex from "vuex";

import { shuffle } from "../helper/shuffle.js";

const cards = [
  {
    id: 1,
    name: "Ryan's Card",
    genre: "Personal",
    description:
      "Ryan must automatically drink and has the option of participating. Stand as far away as possible from the computer and attempt to read some text on the screen. The person who can read said text from the furthest distance, wins. Everyone else must drink."
  },
  {
    id: 2,
    name: "Grace's Card",
    genre: "Personal",
    description:
      "Grace must automatically drink and cannot participate in this challenge. At some point in the next ten minutes Grace will yell 'Go'. Upon hearing this everyone must run to the nearest bedroom. The first person to make it to the bedroom wins. Everyone else must drink. Any tipping of drinks or breaking of property results in an automatic shot of alcohol."
  },
  {
    id: 3,
    name: "Fraser's Card",
    genre: "Personal",
    description:
      "Fraser must automatically drink and must participate in this challenge. For ten minutes everyone must be silent. No noise whatsoever. Any noise made results in an immediate drink."
  },
  {
    id: 4,
    name: "Mitchell's Card",
    genre: "Personal",
    description:
      "Mitchell must automatically drink and has the option of participating in this challenge. Everyone will be given the chance to test their flexability by sitting down with their legs out straight and attempt to touch their toes. The most flexible person wins. Everyone else must drink."
  },
  {
    id: 5,
    name: "Connor's Card",
    genre: "Personal",
    description:
      "Connor must automatically drink. Everyone must estimate the amount of burritos Connor has consumed in the past year alone. The person who guesses the closest to Connor's estimate wins. Everyone else must drink."
  },
  {
    id: 6,
    name: "Ashleigh's Card",
    genre: "Personal",
    description:
      "Ashleigh must automatically drink and has the option of participating in this challenge. The challenge is for each person, one after the other, to name/mimic a vine. If you fail to name a vine you are disqualified. For every person that continues to name new vines, you must drink."
  },
  {
    id: 7,
    name: "Macca's Card",
    genre: "Personal",
    description:
      "Macca must automatically drink and cannot participate in this challenge. Everyone must present their bare feet to Mackenzie. The person who Macca deems has the worst feet wins. Everyone else must drink."
  },
  {
    id: 8,
    name: "The Sloth",
    genre: "Generic",
    description:
      "The person who has consumed the least amount of alcohol (judged by volume or number of cans) must drink."
  },
  {
    id: 9,
    name: "The Anti-Social",
    genre: "Generic",
    description:
      "Anyone who has been on their phones since the previous round must drink. A shot must be taken if a person is caught with their phone in their hand at this exact moment."
  },
  {
    id: 10,
    name: "The Alcoholic",
    genre: "Generic",
    description:
      "The person who has consumed the most amount of alcohol (judged by volume or number of cans) must drink."
  },
  {
    id: 11,
    name: "The Disgustang",
    genre: "Generic",
    description:
      "The person who can write down the 'Disgustang' video word for word wins. Everyone else must drink."
  },
  {
    id: 12,
    name: "The 'Yeahhh Boi'",
    genre: "Generic",
    description:
      "The person who can do the longest 'yeahhh boi' wins. Everyone else must drink."
  },
  {
    id: 13,
    name: "The Influencer",
    genre: "Generic",
    description:
      "Each person must post a photo on instagram. The person who gets the most likes in 10 minutes wins. If this is your first Instagram post take a shot. If you refuse to partake in this challenge, take a shot."
  },
  {
    id: 14,
    name: "Stay Hydrated",
    genre: "Generic",
    description:
      "The person who has drunk the most amount of water wins. If no one can tell who has drunk the most amount of water - chances are you're all dehydrated. Take a shot of water and a shot of your drink."
  },
  {
    id: 15,
    name: "Two Shots Of Vodka",
    genre: "Generic",
    description:
      "Everyone must fill their drinks to the brim with some form of alcohol. No mixers allowed. Everyone must then participate in Waterfall."
  },
  {
    id: 16,
    name: "The Stank",
    genre: "Generic",
    description:
      "For the next ten minutes the person who can do the nastiest fart wins. Bonus points for a shart. Everyone most vote on their favourite fart which was not produced by themselves. If you are unable to fart, you must drink."
  },
  {
    id: 17,
    name: "Bali Belly",
    genre: "Generic",
    description:
      "Each person must share their most horrific shitting stories. Everyone must vote on a story other than the one they recounted. The person with the most votes wins. Everyone else must drink. Drink again if you don't share/don't have a story."
  },
  {
    id: 18,
    name: "It's A Boy!",
    genre: "Generic",
    description:
      "Within the next ten minutes each person must share a photo where they look the most pregnant. Everyone must vote on a photo that was taken by someone other than themselves. The photo with the most votes wins. Everyone else must drink. Anyone who decides not to participate must drink."
  },
  {
    id: 19,
    name: "What Appears To Be The Officer, Problem?",
    genre: "Generic",
    description:
      "Each person must attempt to walk in a straight line - forwards and backwards. The person who can walk the straightest wins. Everyone else must drink."
  },
  {
    id: 20,
    name: "The Wholesome",
    genre: "Generic",
    description:
      "Each person must say something nice about the person opposite them. Everyone gets a compliment. If you are snide, scarcastic or rude - you must drown your whole drink. Love you all x"
  },
  {
    id: 21,
    name: "Gossip Goat",
    genre: "Generic",
    description:
      "Whoever has the juiceiest gossip to spill, wins. Spill the tea bitches."
  }
];

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
    previousCard(state) {
      let cards = state.cards;
      const tailCard = cards.slice(-1);
      cards = cards.slice(0, cards.length - 1);
      cards = [...tailCard, ...cards];
      state.cards = cards;
    },
    setMidnight(state, midnight) {
      state.midnight = midnight;
    }
  }
});

export default store;
