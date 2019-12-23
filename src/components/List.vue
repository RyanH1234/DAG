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
  props: ["cards"],
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
  }
};
</script>

<style scoped>
#list-container {
  height: 60vh;
  width: 80%;
  margin-top: 30px;
  align-self: center;
}
</style>
