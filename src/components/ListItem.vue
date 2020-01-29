<template>
  <div class="list-item primary-background">
    <div class="dark-background" id="side" />
    <div id="name">
      {{ card.name }}
    </div>
    <div id="padding" />
    <div id ="drag">
      <chevron-up />
      <chevron-down />
    </div>
  </div>
</template>

<script>
import ChevronUp from "vue-material-design-icons/ChevronUp.vue";
import ChevronDown from "vue-material-design-icons/ChevronDown.vue";

export default {
  props: ["card"],
  components: {
    ChevronUp,
    ChevronDown
  }
};
</script>

<style scoped>
.list-item {
  margin-top: 2vh;
  margin-bottom: 2vh;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  cursor: pointer;
  align-items: center;
  opacity: 0.95;
  height: 8vh;
  min-height: 60px;
  color: white;
  width: 99%;
}

#side {
  height: 100%;
  width: 10px;
  border-radius: 10px 0px 0px 10px;
  margin-right: 10px;
}

#name {
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: left;
  align-items: center;
  font-size: 1.3em;
  letter-spacing: 0.1em;
}

#padding {
  width: 25%;
  height: 100%;
}

#drag {
  width: 5%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
  border-radius: 0px 10px 10px 0px;
}
</style>
