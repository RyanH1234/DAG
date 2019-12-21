<template>
  <div id="app">
    <Dashboard />
  </div>
</template>

<script>
import Dashboard from "./components/Dashboard.vue";

export default {
  name: "app",
  components: {
    Dashboard
  }
};
</script>

<style scoped>
#app {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  height: 96vh;
}
</style>
