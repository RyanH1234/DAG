<template>
  <div class="list">
    <div id="drag">{{ id }}</div>
  </div>
</template>

<script>
export default {
  props: ["id"]
};
</script>

<style scoped>
.list {
  margin-top: 2vh;
  height: 10vh;
  border: 1px solid black;
  width: 100%;
}

#drag {
  width: 10%;
  height: 100%;
  border-right: 1px solid black;
}
</style>
