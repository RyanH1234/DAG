<template>
  <div class="container">
    <div class="menu">
      <div id="text">Welcome!</div>
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
  height: 20%;
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 2em;
  background-color: white;
  border-radius: 10px;
}

.menu #text {
  padding: 20px;
}

.menu button {
  width: 100px;
  height: 40px;
  background-color: white;
  border: 1px solid rgb(158, 177, 176);
  border-radius: 10px;
}

.menu button:hover {
  cursor: pointer;
  background-color:rgb(208, 236, 217);
}
</style>
