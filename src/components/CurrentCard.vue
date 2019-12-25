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
      const endTime = addMinutesToDate(now, 0.1);
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
  box-shadow: 0px 4px 5px 4px rgba(189, 189, 189, 1);
  display: flex;
  flex-direction: column;
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
}

.center {
  justify-content: center;
  align-items: center;
}

.countdown {
  font-size: 2em;
}
</style>
