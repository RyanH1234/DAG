<template>
  <div class="list-item">
    <div id="side" />
    <div id="name">
      {{ card.name }}
    </div>
    <div id="padding" />
    <div id ="drag">
      <arrow-up :size="48" />
      <arrow-down :size="48" />
    </div>
  </div>
</template>

<script>
import ArrowUp from "vue-material-design-icons/ArrowUp.vue";
import ArrowDown from "vue-material-design-icons/ArrowDown.vue";

export default {
  props: ["card"],
  components: {
    ArrowUp,
    ArrowDown
  }
};
</script>

<style scoped>
.list-item {
  margin-top: 2vh;
  margin-bottom: 2vh;
  border: 1px solid black;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  cursor: pointer;
  align-items: center;
  background-color: white;
  opacity: 0.95;
  height: 5vh;
}

#side {
  height: 100%;
  width: 10px;
  background-color: red;
  border-radius: 10px 0px 0px 10px;
  margin-right: 10px;
}

#name {
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: left;
  align-items: center;
  font-size: 1.5em;
}

#padding {
  width: 20%;
  height: 100%;
}

#drag {
  width: 10%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
