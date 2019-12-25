<template>
  <div id="dash">
    <Header />

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

export default {
  name: "dashboard",
  data: () => {
    return {
      currentTabID: 0,
      cards: [],
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
};
</script>

<style scoped>
#dash {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
