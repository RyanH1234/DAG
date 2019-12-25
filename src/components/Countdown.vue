<template>
  <div>{{ countdown }}</div>
</template>

<script>
import { getCountdown } from "../helper/time.js";

export default {
  data: () => {
    return {
      countdown: "",
      interval: null
    };
  },
  props: ["endTime"],
  watch: {
    countdown(timer) {      
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
