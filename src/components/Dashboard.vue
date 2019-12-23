<template>
  <div id="dash">
    <Header />

    <Tabs @tabClicked="onTabClicked" />

    <CurrentCard v-if="currentTabID === 0" :currentCard="currentCard" />
    <List v-else :cards="cards"/>
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
      currentCard: {},
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
    this.$store.commit('shuffleCards');
    this.cards = this.$store.getters.getCards;
    this.currentCard = this.$store.getters.getCurrentCard;
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
