<template>
  <div class="container default-background center-contents">
    <div class="menu box-shadow white-background primary-background">
      <div class="light-background" id="header">
        <div id="text">Welcome!</div>
      </div>
      <div class="center-contents" id="button-container">
        <Button class="primary-background default-font" @click="goToDash">Start</Button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goToDash() {
      this.$router.push("Dash");
    }
  }
};
</script>

<style scoped>
.container {
  height: 100%;
  width: 100%;
}

.menu {
  height: 60%;
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10vh;
}

.menu #header {
  height: 40%;
  width: 100%;
  display: flex;
  align-items: center;
  color: white;
  font-size: 4em;
}

.menu #text {
  padding-left: 4%;
  text-transform: uppercase;
}

.menu #button-container {
  height: 60%;
  width: 100%;
  font-size: 2em;
  background-image: url("../assets/bg_1_low.jpg");
  background-position: center;
  background-size: 100%;
}

.menu button {
  height: 20%;
  width: 20%;
  min-width: 130px;
  color: white;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  border: 1px solid white;
  border-radius: 10px;
  transition: width 0.5s, height 0.5s, font-size 0.6s;
}

.menu button:hover {
  height: 22%;
  width: 22%;
  font-size: 0.7em;
  cursor: pointer;
}

@media (max-width: 850px) {
  .menu {
    height: 90%;
    width: 90%;
    margin-bottom: 0;
  }

  .menu #header {
    justify-content: center;
    align-items: center;
  }

  .menu #text {
    padding-left: 0;
  }
}
</style>
