<template>
  <div class="item">
    <div id="item-container">
      Name:
      <input type="text" class="primary-background" v-model="name" />
    </div>
    <div id="item-container">
      Description:
      <input type="text" class="primary-background" v-model="description" />
    </div>
    <div id="item-container" v-if="name.length > 0 && description.length > 0">
      <content-save id="save-icon" @click="saveCard()" />
    </div>
  </div>
</template>

<script>
import ContentSave from "vue-material-design-icons/ContentSave.vue";

export default {
  data: () => {
    return {
      description: "",
      name: ""
    };
  },
  components: {
    ContentSave
  },
  methods: {
    saveCard() {
      const card = {
        name: this.name,
        description: this.description
      };

      this.$emit("saveCard", card);

      this.description = "";
      this.name = "";
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
  flex-direction: column;
}

.item:hover {
  cursor: pointer;
  width: 62%;
}

#item-container {
  width: 95%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  padding-bottom: 10px;
}

input {
  width: 100%;
  height: 100%;
  min-height: 35px;
  border: none;
  color: white;
  font-size: 0.9em;
  border-bottom: 1px solid white;
}

input:focus {
  outline: 0;
}

#padding {
  height: 100%;
  width: 2.5%;
}

#save-icon {
  align-self: flex-end;
}

#save-icon:hover {
  cursor: pointer;
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
