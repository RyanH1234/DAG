<template>
  <div :class="{red: lessThan30s}">
    -{{ countdown }}
  </div>
</template>

<script>
import { getCountdown } from "../helper/time.js";

export default {
  data: () => {
    return {
      countdown: "",
      interval: null,
      lessThan30s: false,
    };
  },
  props: ["endTime"],
  watch: {
    countdown(timer) {
      const [hh, mm, ss] = timer.split(":");

      if(hh === "00" && mm === "00" && ss <= "30") {
        this.lessThan30s = true;
      }
      
      if (timer === "00:00:00") {
        clearInterval(this.interval);
        this.$emit("completed");
      }
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
