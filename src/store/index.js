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
    name: "Jordanna's Card",
    genre: "Personal",
    description:
      "Get pumped for FTL mofos! For each person, randomly play a song from the playlist 'FTL20 JP'. Going around in a circle each person must identify the artist of their song. If you cannot tell the artist, you must drink and for every person after who continues to guess the right artist - you must drink."
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
      "Connor must automatically drink. Connor will present five photos, cropped so we his head fills the screen. Everyone must vote on which photo is him shitting. Those who get the wrong answer must drink."
  },
  {
    id: 6,
    name: "Renata's Card",
    genre: "Personal",
    description:
      "Renta must automatically drink. Renata has the chance to hum three songs of her choosing. Each song can be hummed for a maximum of 30 seconds. Everyone must guess the song she's humming. If you guess wrongly, drink. If you don't guess, drink. If, at the end of the 30 seconds no one can guess the song - Renata must drink."
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
    name: "Ben's Card",
    genre: "Personal",
    description:
      "Ben must automatically drink. Everyone just take a moment to admire that wholesome smile that Ben seems to always have. Drink if you cry."
  },
  {
    id: 9,
    name: "Mikhaela's Card",
    genre: "Personal",
    description:
      "Mikhaela must automatically drink and cannot participate in this challenge. Each person must spell Mikahela's name on their phones. If you spell it wrong - you drink."
  },
  {
    id: 10,
    name: "The Sloth",
    genre: "Generic",
    description:
      "The person who has consumed the least amount of alcohol (judged by volume or number of cans) must drink."
  },
  {
    id: 11,
    name: "The Anti-Social",
    genre: "Generic",
    description:
      "Anyone who has been on their phones since the previous round must drink. A shot must be taken if a person is caught with their phone in their hand at this exact moment."
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
    name: "The Stank",
    genre: "Generic",
    description:
      "For the next ten minutes the person who can do the nastiest fart wins. Bonus points for a shart. Everyone most vote on their favourite fart which was not produced by themselves. If you are unable to fart, you must drink."
  },
  {
    id: 15,
    name: "The Wholesome",
    genre: "Generic",
    description:
      "Each person must say something nice about the person opposite them. Everyone gets a compliment. If you are snide, scarcastic or rude - you must drown your whole drink. Love you all x"
  },
  {
    id: 16,
    name: "Spin The Wheel",
    genre: "Generic",
    description:
      "Spin the drinking wheel. If you're an idiot and forgot to bring said drinking wheel AND you were too lazy to code a drinking wheel in the game - drink. You stupid mofo."
  },
  {
    id: 17,
    name: "Bird Box",
    genre: "Generic",
    description: 
      "Split into pairs. Each pair will be presented with a cup of alcohol. The goal is to guess what kind of alcohol is in the cup. However, each pair will be blindfolded and will be requried to peg their nose. If you guess the contents of the cup incorrectly, both of you must drink."
  },
  {
    id: 18,
    name: "Cowboy Bebop",
    genre: "Generic",
    description: 
      "Each pair must re-enact a good old fashioned shoot-off. Each person will whip out a number with their fingers on one hand (e.g. a number from 1 to 5). If both people either get the same number or a pair of numbers which add to 5 - drink!"
  },
  {
    id: 19,
    name: "Ben 10",
    genre: "Generic",
    description: 
      "One person must think of a number between 1 and 10. Everyone else must try and guess this number. The amount of drinks is the difference between the actual number and the guessed number."
  },
  {
    id: 20,
    name: "The Sinner",
    genre: "Generic",
    description:
      "Everyone must sit in a circle, hold hands and repent. Three hail marys and then a shot of alcohol to clense your sins. God bless."
  },
  {
    id: 21,
    name: "Would I Lie To You",
    genre: "Generic", 
    description:
      "One person must either tell the group a truth or lie. Preferablly this will be a newcomer to the group. Each person will get to ask one question deciding if this statement is true. The group must make a decision as a collective whether or not the person is telling the truth or lie. If the group is wrong, everyone must drink."
  },
  {
    id: 22,
    name: "Cheeky",
    genre: "Generic",
    description:
      "Apart from one person, each member must take a picture of their ass on a shared phone. The order of the butts must be kept secret from the person who did not take a picture. This person will need to guess whose butt is whose. If your butt if guessed correctly, you must drink. Else, for every butt guessed incorrectly, the identifier must drink."
  },
  {
    id: 23, 
    name: "Question Masters",
    genre: "Generic",
    description:
      "Split into pairs. For each pair, and for the entirety of this round - one person can only ask questions, while the other can only say statements. You must drink if these roles are reversed at any point."
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
