<template>
  <div id="header">
    <div class="center" id="title">Drinking & Gaming</div>
    <div class="center" id="countdown">
      <Countdown :endTime="midnight" />
    </div>
  </div>
</template>

<script>
import Countdown from "./Countdown.vue";

import { getMidnight } from "../helper/time.js";

export default {
  data: () => {
    return {
      midnight: null
    };
  },
  components: {
    Countdown
  },
  mounted() {
    let now = new Date();
    now = now.getTime();

    const midnight = getMidnight(now);

    this.$store.commit("setMidnight", midnight);

    this.midnight = this.$store.getters.getMidnight;
  }
};
</script>

<style scoped>
#header {
  background-color: white;
  font-size: 2em;
  width: 100%;
  height: 12vh;
  display: flex;
  /* opacity: 0.9; */
}

#title {
  margin-left: 25px;
  display: flex;
}

#countdown {
  display: flex;
  margin-left: auto;
  margin-right: 25px;
}

.center {
  justify-content: center;
  align-items: center;
}
</style>
