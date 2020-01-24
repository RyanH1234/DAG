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
@import './assets/css/global.css';


.container {
  height: 100%;
  width: 100%;
}

.menu {
  height: 40%;
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 2em;
  margin-bottom: 10vh;
}

.menu #header {
  height: 40%;
  width: 100%;
  display: flex;
  align-items: center;
  color: white;
}

.menu #text {
  padding-left: 2.5%;
}

.menu #button-container {
  height: 60%;
  width: 100%;
}

.menu button {
  height: 20%;
  width: 20%;
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
  font-size: 0.8em;
  cursor: pointer;
}
</style>
