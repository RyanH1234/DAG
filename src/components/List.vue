<template>
  <div id="list-container">
    <draggable>
      <transition-group>
        <div v-for="card in cards" :key="card.id">
          <ListItem :card="card" />
        </div>
      </transition-group>
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
    };
  },
  name: "list",
  components: {
    ListItem,
    draggable
  },
  mounted() {
    this.cards = this.$store.getters.getCards;
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
