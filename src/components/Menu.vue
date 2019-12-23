<template>
  <div class="container">
    <div class="menu">
      <div id="text">Start Countdown!</div>
      <Button @click="initCountdown"> Start! </Button>
    </div>
  </div>
</template>

<script>
import { getTimeToMidnight, getMidnight } from "../helper/time.js";

export default {
  methods: {
    initCountdown() {
      let now = new Date();
      now = now.getTime();

      const midnight = getMidnight(now);

      this.$store.commit("setMidnight", midnight);
      this.startCountdown(midnight);
    },
    startCountdown(midnight) {
      window.setInterval(() => {
        let now = new Date();
        now = now.getTime();
        getTimeToMidnight(now, midnight);
      }, 100);
    }
  }
};
</script>

<style scoped>
.container {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.menu {
  height: 50%;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 2em;
}

.menu #text {
  padding: 20px;
}

.menu button {
  width: 100px;
  height: 25px;
}
</style>
