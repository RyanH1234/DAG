<template>
  <div id="list-container">
    <div v-for="n in 3" :key="n">
      <ListItem />
    </div>
  </div>
</template>

<script>
import ListItem from "./ListItem.vue";

export default {
  name: "list",
  components: {
    ListItem
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
