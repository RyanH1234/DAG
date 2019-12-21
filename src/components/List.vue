<template>
  <div id="list-container">
    <draggable>
      <transition-group>
        <div v-for="n in 3" :key="n">
          <ListItem :id="n" />
        </div>
      </transition-group>
    </draggable>
  </div>
</template>

<script>
import ListItem from "./ListItem.vue";
import draggable from "vuedraggable";

export default {
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
