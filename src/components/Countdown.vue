<template>
  <div :class="{ red: last30secs }">-{{ countdown }}</div>
</template>

<script>
import { getCountdown } from "../helper/time.js";

export default {
  data: () => {
    return {
      countdown: "",
      interval: null,
      last30secs: false
    };
  },
  props: ["endTime"],
  watch: {
    countdown(timer) {
      this.last30secs = this.checkIfLast30secs(timer);
      this.checkIfEndtime(timer);
    }
  },
  methods: {
    startCountdown() {
      this.interval = setInterval(() => {
        let startTime = new Date();
        startTime = startTime.getTime();

        const endTime = this.endTime;

        this.countdown = getCountdown(startTime, endTime);
      }, 100);
    },
    checkIfLast30secs(timer) {
      const [hh, mm, ss] = timer.split(":");

      if (hh === "00" && mm === "00" && ss <= "30") {
        return true;
      }

      return false;
    },
    checkIfEndtime(timer) {
      if (timer === "00:00:00") {
        clearInterval(this.interval);
        this.$emit("completed");
      }
    }
  },
  mounted() {
    this.startCountdown();
  }
};
</script>

<style scoped>
.red {
  color: red;
}
</style>
