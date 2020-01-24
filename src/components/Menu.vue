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
.box-shadow {
  -webkit-box-shadow: -5px 3px 18px 0px rgba(186, 186, 186, 1);
  -moz-box-shadow: -5px 3px 18px 0px rgba(186, 186, 186, 1);
  box-shadow: -5px 3px 18px 0px rgba(186, 186, 186, 1);
}

.white-background {
  background-color: white;
}

.default-background {
  background-color: #e1e2e1;
}

.primary-background {
  background-color: #f44336;
}

.light-background {
  background-color: #ff7961;
}

.dark-background {
  background-color: #ba000d;
}

.default-font {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}

.center-contents {
  display: flex;
  justify-content: center;
  align-items: center;
}

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
