<template>
  <div id="tab-container">
    <div class="tab" v-on:click="clicked('current_card')">
      Current Card
    </div>
    <div class="tab-padding" />
    <div class="tab" v-on:click="clicked('list')">
      List Of Cards
    </div>
  </div>
</template>

<script>
export default {
  name: "tab",
  methods: {
    clicked(identifier) {
      this.$emit('tab_clicked', identifier);
    }
  }
};
</script>

<style scoped>
#tab-container {
  margin-top: 30px;
  height: 7%;
  display: flex;
  justify-content: center;
  width: 100%;
}

.tab {
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5em;
  border-bottom: 1px solid black;
}

.tab:hover {
  cursor: pointer;
  background-color: #f2f2f2;
}

.tab-padding {
  width: 3%;
}
</style>
