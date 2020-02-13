<template>
  <div class="item" @click="setTeam()">
    <div id="item-name-container">
      <div id="padding" />
      <div id="item_name">{{ name }}</div>
    </div>
    <div id="item-name-icon">
      <check-circle v-if="clicked == id" />
      <div id="icon-padding" />
    </div>
  </div>
</template>

<script>
import CheckCircle from "vue-material-design-icons/CheckCircle.vue";

export default {
  props: ["name", "id", "clicked"],
  components: {
    CheckCircle
  },
  methods: {
    setTeam() {
      this.$emit("clicked", this.id)
    }
  }
};
</script>

<style scoped>
.item {
  min-height: 50px;
  height: 100%;
  width: 60%;
  align-self: center;
  border-radius: 10px;
  display: flex;
  align-items: center;
  border: 1px solid white;
  margin-bottom: 20px;
  transition: width 0.3s;
}

.item:hover {
  cursor: pointer;
  width: 62%;
}

#padding {
  height: 100%;
  width: 2.5%;
}

#item-name-container {
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: row;
}

#item-name-icon {
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

#icon-padding {
  width: 20px;
}

@media (max-width: 850px) {
 .item {
    width: 80%;
  }

  .item:hover {
    width: 82%;
  }
}
</style>
