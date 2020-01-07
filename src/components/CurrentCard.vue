<template>
  <div id="content">
    <div id="name">{{ currentCard.name }}</div>
    <div id="genre">{{ currentCard.genre }}</div>
    <div id="description">{{ currentCard.description }}</div>
    <div class="countdown-container" v-if="showCard">
      <Button @click="startCountdown()"> Completed </Button>
    </div>
    <div class="countdown-container"  v-else>
      <Countdown :endTime="endTime" v-on:completed="nextCard()" />
    </div>
  </div>
</template>

<script>
import Countdown from "./Countdown.vue";
import { addMinutesToDate } from "../helper/time.js";

export default {
  components: {
    Countdown
  },
  data: () => {
    return {
      currentCard: {},
      showCard: true,
      endTime: ""
    };
  },
  mounted() {
    this.currentCard = this.$store.getters.getCurrentCard;
  },
  methods: {
    startCountdown() {
      this.showCard = false;

      const now = new Date();
      const endTime = addMinutesToDate(now, 12.5);
      this.endTime = endTime.getTime();
    },
    nextCard() {
      this.$store.commit("nextCard");
      this.currentCard = this.$store.getters.getCurrentCard;
      this.showCard = true;
    }
  }
};
</script>

<style scoped>

#content {
  height: 60vh;
  width: 70%;
  margin-top: 30px;
  align-self: center;
  display: flex;
  flex-direction: column;
  background-color: white;
  opacity: 0.95;
}

#name {
  padding: 20px;
  font-size: 50px;
}

#genre {
  font-size: 25px;
  margin-left: 20px;
}

#description {
  font-size: 20px;
  padding: 20px;
  font-style: italic;
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
</style>
