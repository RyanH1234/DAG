<template>
  <div class="container">
    <div class="center-contents" id="title">Generic Cards</div>
    <div id="items">
      <div
        v-for="genre in genres"
        :key="genre.id"
        class="item"
        @click="setGenre(genre)"
      >
        <div id="item-name-container">
          <div id="padding" />
          <div id="item_name">{{ genre.genre }}</div>
        </div>
        <div id="item-name-icon">
          <check-circle v-if="clicked == genre.id" />
          <div id="icon-padding" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckCircle from "vue-material-design-icons/CheckCircle.vue";

export default {
  data: () => {
    return {
      clicked: null
    };
  },
  components: {
    CheckCircle
  },
  methods: {
    setGenre(params) {
      this.clicked = params.id;
    }
  },
  props: ["genres"]
};
</script>

<style scoped>
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
</style>
