<template>
  <div :class="{ red: last30secs }">-{{ countdown }}</div>
</template>

<script>
import { checkIfLast30secs } from "../../helper/time.js";

export default {
  data: () => {
    return {
      last30secs: false
    };
  },
  props: ["countdown"],
  watch: {
    countdown(timer) {
      this.last30secs = checkIfLast30secs(timer);
      this.checkIfEndtime(timer);
    }
  },
  methods: {
    checkIfEndtime(timer) {
      if (timer === "00:00:00") {
        clearInterval(this.interval);
        this.$emit("completed");
      }
    }
  },
  mounted() {
    const countdown = this.countdown;
    this.last30secs = checkIfLast30secs(countdown);
  }
};
</script>

<style scoped>
.red {
  color: red;
}
</style>
