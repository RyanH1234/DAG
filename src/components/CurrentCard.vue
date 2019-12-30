<template>
  <div id="content" v-if="showCard">
    <div id="name">{{ currentCard.name }}</div>
    <div id="genre">{{ currentCard.genre }}</div>
    <div id="description">{{ currentCard.description }}</div>
    <div id="button-container">
      <Button @click="startCountdown()"> Completed </Button>
    </div>
  </div>
  <div class="center countdown" id="content" v-else>
    <Countdown :endTime="endTime" v-on:completed="nextCard()" />
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

#button-container {
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
}

#button-container button {
  width: 200px;
  height: 50px;
  border: 1px solid rgb(158, 177, 176);
  border-radius: 10px;
  background-color: white;
}

#button-container button:hover {
  cursor: pointer;
  background-color: rgb(208, 236, 217);
}

.center {
  justify-content: center;
  align-items: center;
}

.countdown {
  font-size: 2em;
}
</style>
