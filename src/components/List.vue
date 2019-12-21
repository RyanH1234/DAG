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
      cards: [
        {
          id: 1,
          name: "Ryan's Card",
          conditions: "",
          description:
            "Ryan must automically drink and has the option of participating. Stand as far away as possible and attempt to read the text. The person who can read the furthest wins. Everyone else must drink."
        },
        {
          id: 2,
          name: "Fraser's Card",
          conditions: "",
          description: "Everyone must be silent as possible for 5 minutes"
        }
      ]
    };
  },
  name: "list",
  components: {
    ListItem,
    draggable
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
