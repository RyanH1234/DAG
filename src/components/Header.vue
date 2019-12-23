<template>
  <div id="header">
    <div class="center" id="title">Drinking & Gaming</div>
    <div class="center" id="countdown">{{ timeToMidnight }}</div>
  </div>
</template>

<script>
export default {
  props: ["timeToMidnight"]
};
</script>

<style scoped>
#header {
  font-size: 2em;
  width: 100%;
  height: 15vh;
  display: flex;
  box-shadow: 2px 20px 24px -9px rgba(189, 189, 189, 1);
}

#title {
  margin-left: 25px;
  display: flex;
}

#countdown {
  display: flex;
  margin-left: auto;
  margin-right: 25px;
}

.center {
  justify-content: center;
  align-items: center;
}
</style>
