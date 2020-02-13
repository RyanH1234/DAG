<template>
  <div class="items-button-container">
    <Button class="primary-background">{{title}}</Button>
  </div>
</template>

<script>
export default {
  props: ["title"]
};
</script>

<style scoped>
button {
  height: 40%;
  width: 18%;
  min-width: 130px;
  min-height: 60px;
  color: white;
  font-size: 1em;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  border: 1px solid white;
  border-radius: 10px;
  transition: width 0.5s, height 0.5s, font-size 0.6s;
}

button:hover {
  cursor: pointer;
  height: 44%;
  width: 20%;
}
</style>
