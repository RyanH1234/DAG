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

<style>
#list-container {
  height: 80vh;
  width: 70%;
  align-self: center;
  margin-top: 30px;
  overflow: scroll;
  overflow-x: hidden;
}

@media (max-width: 768px) {  
  #list-container {
    width: 90%;
  }
}

</style>
