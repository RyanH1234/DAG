<template>
  <div class="container">
    <div class="menu">
      <div id="text">Start Countdown!</div>
      <Button @click="goToDash"> Start! </Button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goToDash() {
      this.$router.push("Dash")
    },
  }
};
</script>

<style scoped>
.container {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.menu {
  height: 50%;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 2em;
}

.menu #text {
  padding: 20px;
}

.menu button {
  width: 100px;
  height: 25px;
}
</style>
