<template>
  <div id="dash">
    <Header />

    <Tabs @tabClicked="onTabClicked" />

    <CurrentCard
      v-if="currentTabID === 0"
      @startCountdown="startCountdown()"
      @nextCard="resetCountdown()"
      :countdown="countdown"
    />
    <List v-else />
  </div>
</template>

<script>
import Header from "./Header.vue";
import Tabs from "./Tabs.vue";
import List from "./List.vue";
import CurrentCard from "./CurrentCard.vue";

import { addMinutesToDate, getCountdown } from "../helper/time.js";

export default {
  name: "dashboard",
  data: () => {
    return {
      currentTabID: 0,
      cards: [],
      countdown: null,
      timer: null
    };
  },
  components: {
    Header,
    Tabs,
    List,
    CurrentCard
  },
  methods: {
    hasTabChanged(tabID) {
      return tabID !== this.currentTabID;
    },
    onTabClicked(tabID) {
      const hasTabChanged = this.hasTabChanged(tabID);

      if (hasTabChanged) {
        this.currentTabID = tabID;
      }
    },
    resetCountdown() {
      clearInterval(this.timer);
      this.countdown = null;
    },
    startCountdown() {
      let startTime = new Date();

      let endTime = addMinutesToDate(startTime, 12.5);
      endTime = endTime.getTime();

      this.timer = setInterval(() => {
        startTime = new Date();
        const countdown = getCountdown(startTime, endTime);
        this.countdown = countdown;
      });
    }
  }
};
</script>

<style scoped>
#dash {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
