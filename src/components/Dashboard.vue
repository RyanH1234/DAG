<template>
  <div id="dash">
    <Header :timeToMidnight="timeToMidnight"/>

    <Tabs @tabClicked="onTabClicked" />

    <CurrentCard v-if="currentTabID === 0" />
    <List v-else />
  </div>
</template>

<script>
import Header from "./Header.vue";
import Tabs from "./Tabs.vue";
import List from "./List.vue";
import CurrentCard from "./CurrentCard.vue";

import { getTimeToMidnight } from "../helper/time.js";

export default {
  name: "dashboard",
  data: () => {
    return {
      currentTabID: 0,
      cards: [],
      timeToMidnight: "",
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
    }
  },
  mounted() {
    window.setInterval(() => {
      const midnight = this.$store.getters.getMidnight;
      let now = new Date();
      now = now.getTime();
      this.timeToMidnight = getTimeToMidnight(now, midnight);
    }, 100);
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
