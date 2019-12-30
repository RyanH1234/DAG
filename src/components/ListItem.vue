<template>
  <div class="list-item">
    <div id="drag">
      <menu-icon :size="48" />
    </div>
    <div id="content">
      {{ card.name }}
    </div>
    <div id="description">
      {{ card.description }}
    </div>
  </div>
</template>

<script>
import MenuIcon from "vue-material-design-icons/Menu.vue";

export default {
  props: ["card"],
  components: {
    MenuIcon
  }
};
</script>

<style scoped>
.list-item {
  margin-top: 2vh;
  margin-bottom: 2vh;
  padding: 20px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  width: 100%;
  display: flex;
  flex-direction: row;
  cursor: pointer;
  align-items: center;
  background-color: white;
  opacity: 0.95;
}

#drag {
  width: 10%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

#content {
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: left;
  align-items: center;
  font-size: 1.5em;
}

#description {
  width: 60%;
  height: 100%;
  font-size: 1.25em;
  display: flex;
  justify-content: left;
  align-items: center;
}
</style>
