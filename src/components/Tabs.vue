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
  height: 7vh;
  min-height: 40px;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 8vh;
}

#tab-container {
  height: 100%;
  min-height: 60px;
  width: 75%;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.tab {
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.25em;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  transition: font-size 0.6s;
  border-bottom: 2px solid #ba000d;
  opacity: 0.95;
}

.tab:hover {
  cursor: pointer;
  font-size: 1.5em;
}

.tab-padding {
  width: 3%;
}

@media (max-width: 850px) {
  #container {
    margin-top: 4vh;
    margin-bottom: 20px;
  }

  #tab-container {
    width: 100%;
  }

  .tab {
    font-size: 1em;
    letter-spacing: 0.1em;
    width: 41%;
  }

  .tab:hover {
    font-size: 1.25em;
  }
}

</style>
