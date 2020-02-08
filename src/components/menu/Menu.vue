<template>
  <div class="container default-background center-contents">
    <div class="menu box-shadow white-background primary-background">
      <div class="light-background" id="header">
        <div id="text">Welcome!</div>
      </div>
      <Teams />
      <members />
      <genre />
      <personal />
      <div class="center-contents" id="button-container">
        <Button class="primary-background default-font" @click="goToDash">Start</Button>
      </div>
    </div>
  </div>
</template>

<script>
import Teams from "./Teams";
import Members from "./Members";
import Genre from "./Genre";
import Personal from "./Personal";

export default {
  components: {
    Teams,
    Members,
    Genre,
    Personal
  },
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
  color: white;
}

.menu {
  height: 80%;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
}

.menu #header {
  min-height: 200px;
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 4em;
}

.menu #text {
  padding-left: 4%;
  text-transform: uppercase;
}

.menu #button-container {
  min-height: 150px;
  width: 100%;
  font-size: 2em;
  /* background-image: url("../../assets/bg_1_low.jpg"); */
  background-position: center;
  background-size: 100%;
}

.menu button {
  height: 50%;
  width: 20%;
  min-width: 130px;
  min-height: 60px;
  color: white;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  border: 1px solid white;
  border-radius: 10px;
  transition: width 0.5s, height 0.5s, font-size 0.6s;
}

.menu button:hover {
  height: 54%;
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
