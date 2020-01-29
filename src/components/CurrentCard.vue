<template>
  <div class="box-shadow primary-background" id="content">
    <div class="light-background" id="name">{{ currentCard.name }}</div>
    <div id="genre">{{ currentCard.genre }}</div>
    <div class="center-contents" id="description-container">
      <div id="description">{{ currentCard.description }}</div>
    </div>
    <div class="countdown-container">
      <arrow-left-icon class="arrow-icon" :size="48" @click="prevCard()" />
      <Countdown v-on:completed="nextCard()" :countdown="countdown" />
      <arrow-right-icon class="arrow-icon" :size="48" @click="nextCard()" />
    </div>
  </div>
</template>

<script>
import ArrowRightIcon from "vue-material-design-icons/ArrowRight.vue";
import ArrowLeftIcon from "vue-material-design-icons/ArrowLeft.vue";

import Countdown from "./Countdown.vue";

export default {
  components: {
    Countdown,
    ArrowRightIcon,
    ArrowLeftIcon
  },
  props: {
    countdown: {
      default: null
    }
  },
  data: () => {
    return {
      currentCard: {},
      endTime: ""
    };
  },
  mounted() {
    this.currentCard = this.$store.getters.getCurrentCard;
  },
  methods: {
    nextCard() {
      this.$emit("nextCard");
      this.currentCard = this.$store.getters.getCurrentCard;
    },
    prevCard() {
      this.$emit("prevCard");
      this.currentCard = this.$store.getters.getCurrentCard;
    }
  }
};
</script>

<style scoped>
#content {
  height: 70vh;
  width: 70%;
  margin-top: 6vh;
  align-self: center;
  display: flex;
  flex-direction: column;
  opacity: 0.95;
  color: white;
}

#name {
  padding: 20px;
  font-size: 4em;
  height: 20%;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  }

#genre {
  font-size: 25px;
  padding: 20px;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  border-top: 2px solid white;
  border-bottom: 2px solid white;
}

#description-container {
  font-size: 1.5em;
  margin-top: 2.5%;
}

#description {
  width: 80%;
}

.countdown-container {
  display: flex;
  font-size: 2em;
  justify-content: center;
  align-items: center;
  height: 30%;
}

.countdown-container button {
  width: 200px;
  height: 50px;
  border: 1px solid rgb(158, 177, 176);
  border-radius: 10px;
  background-color: white;
}

.countdown-container button:hover {
  cursor: pointer;
  background-color: rgb(208, 236, 217);
}

.arrow-icon {
  cursor: pointer;
}

@media (max-width: 768px) { 
  #content {
    width: 90%;
    height: 77%;
  }

  #name {
    font-size: 2em;
  }

  #genre {
    font-size: 1em;
  }

  #description-container {
    font-size: 1.2em;
  }
}
</style>
