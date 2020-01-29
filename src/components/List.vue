<template>
  <div id="list-container">
    <draggable :list="cards" @change="change">
      <ListItem v-for="card in cards" :key="card.id" :card="card" />
    </draggable>
  </div>
</template>

<script>
import ListItem from "./ListItem.vue";
import draggable from "vuedraggable";

export default {
  data: () => {
    return {
      cards: []
    }
  },
  name: "list",
  components: {
    ListItem,
    draggable
  },
  methods: {
    change: function() {
      const reOrderedCards = this.cards;
      this.$store.commit('reorderCards', reOrderedCards);
    },
  },
  mounted() {
    this.cards = this.$store.getters.getCards;
  }
};
</script>

<style scoped>
#list-container {
  height: 80vh;
  width: 70%;
  margin-top: 30px;
  align-self: center;
  overflow: scroll;
  overflow-x: hidden;
}
</style>
