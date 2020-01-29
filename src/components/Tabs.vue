<template>
  <div id="container">
    <div id="tab-container">
      <div class="tab primary-background" v-on:click="clicked(0)">
        Current Card
      </div>
      <div class="tab-padding" />
      <div class="tab primary-background" v-on:click="clicked(1)">
        List Of Cards
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "tab",
  methods: {
    clicked(id) {
      this.$emit("tabClicked", id);
    },
  }
};
</script>

<style scoped>
#container {
  margin-top: 8vh;
  height: 7vh;
  display: flex;
  justify-content: center;
  width: 100%;
}

#tab-container {
  width: 75%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.tab {
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.25em;
  border-bottom: 2px solid #ba000d;
  color: white;
  opacity: 0.95;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  transition: font-size 0.6s;
}

.tab:hover {
  cursor: pointer;
  font-size: 1.5em;
}

.tab-padding {
  width: 3%;
}
</style>
