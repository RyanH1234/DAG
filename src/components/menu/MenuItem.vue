<template>
  <div class="item" @click="setTeam()">
    <div v-if="editable" id="item-name-container">
      <div id="padding" />
      <input type="text" class="primary-background" v-model="name" />
    </div>
    <div v-else id="item-name-container">
      <div id="padding" />
      <div id="item_name">{{ name }}</div>
    </div>

    <div id="item-name-icon" v-if="clicked == id">
      <content-save v-if="nameUpdated" @click="updateName()" />
      <div id="icon-padding" />
      <check-circle />
      <div id="icon-padding" />
    </div>
  </div>
</template>

<script>
import ContentSave from "vue-material-design-icons/ContentSave.vue";
import CheckCircle from "vue-material-design-icons/CheckCircle.vue";

export default {
  props: ["initialName", "id", "clicked", "editable"],
  data: function() {
    return {
      name: this.initialName,
      nameUpdated: false
    };
  },
  watch: {
    name() {
      this.nameUpdated = true;
    }
  },
  components: {
    CheckCircle,
    ContentSave
  },
  methods: {
    setTeam() {
      this.$emit("clicked", this.id);
    },
    updateName() {
      const data = {
        curr: this.name,
        prev: this.initialName,
        id: this.id
      };

      this.$emit("updateName", data);
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

#item-name-container {
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: row;
}

input {
  width: 70%;
  height: 100%;
  min-height: 35px;
  border: none;
  color: white;
  text-transform: uppercase;
  font-size: 1em;
}

input:focus {
  outline: 0;
}

#padding {
  height: 100%;
  width: 2.5%;
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
