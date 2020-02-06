<template>
  <div class="content-container center-contents">
    <div class="light-background" id="content">
      <div class="light-background" id="name">
        <arrow-left-icon class="arrow-icon" :size="39" @click="prevCard()" />
        {{ currentCard.name }}
        <arrow-right-icon class="arrow-icon" :size="39" @click="nextCard()" />
      </div>
      
      <div id="countdown">
        <div class="countdown-container">
          <Countdown v-on:completed="nextCard()" :countdown="countdown" />
        </div>
      </div>
      <div class="center-contents" id="description-container">
        <div id="description">{{ currentCard.description }}</div>
      </div>
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
.content-container {
  background-image: url("../assets/bg_1_low.jpg");
  background-position: center;
  background-size: 100%;
  height: 70vh;
  width: 70%;
  align-self: center;
  margin-top: 6vh;
}

#content {
  display: flex;
  flex-direction: column;
  opacity: 0.95;
  color: white;
  height: 75%;
  width: 80%;
  border: 1px solid white;
  border-radius: 20px;
}

#name {
  height: 10%;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  padding: 20px;
  font-size: 2em;
  text-transform: uppercase;
  border-radius: 20px 20px 0px 0px;
  border-right: 1px solid white;
  border-left: 1px solid white;
  letter-spacing: 0.05em;
}

#countdown {
  padding: 20px;
  font-size: 1.5em;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  border-top: 2px solid white;
  border-bottom: 2px solid white;
  background-color: #f44336;
  display: flex;
  align-items: center;
  justify-content: center;
}

#description-container {
  font-size: 1.5em;
  margin-top: 2.5%;
}

#description {
  width: 90%;
}

.arrow-icon {
  cursor: pointer;
}

@media (max-width: 850px) and (max-height: 650px) {
  #content {
    overflow: scroll;
    overflow-x: hidden;
    border-radius: 20px 0px 0px 20px;
  }
}

@media (max-width: 850px) {
  .content-container {
    width: 90%;
    height: 70%;
  }

  #name {
    font-size: 1.5em;
    border-right: 0px;
    border-left: 0px;
  }

  #countdown {
    font-size: 1em;
  }

  #description-container {
    font-size: 1.2em;
  }

  .countdown-container {
    font-size: 1.5em;
  }
}
</style>
