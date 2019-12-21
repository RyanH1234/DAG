<template>
  <div id="dash">
    <Header />
    <Tabs @tab_clicked="onTabClicked"/>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Tabs from "./Tabs.vue";

export default {
  name: "dashboard",
  components: {
    Header,
    Tabs
  },
  methods: {
    onTabClicked(val) {
      console.dir(val);
    }
  }
};
</script>

<style scoped>
#dash {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
