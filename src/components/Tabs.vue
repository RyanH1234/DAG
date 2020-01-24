<template>
  <div id="tab-container">
    <div class="tab" v-on:click="clicked(0)">
      Current Card
    </div>
    <div class="tab-padding" />
    <div class="tab" v-on:click="clicked(1)">
      List Of Cards
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
/* 
  Increase font size on click/highlight
  Increase width of bottom border on click/highlight
  Animate bottom border on click/highlight
  Change background colour on click/highligh
*/

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
  background-color: white;
  opacity: 0.95;
}

.tab:hover {
  cursor: pointer;
  background-color: #f2f2f2;
  background-color: rgb(208, 236, 217);
}

.tab-padding {
  width: 3%;
}
</style>
