<template>
  <div class="container">
    <menu-heading :title="title" />
    <div id="items">
      <menu-item
        v-for="genre in genres"
        :key="genre.id"
        :name="genre.genre"
        :id="genre.id"
        :clicked="clicked"
        @clicked="genreClicked"
      />
    </div>
  </div>
</template>

<script>
import MenuHeading from "./MenuHeading.vue";
import MenuItem from "./MenuItem.vue";

export default {
  data: () => {
    return {
      title: 'Generic Cards',
      clicked: null
    };
  },
  components: {
    MenuHeading,
    MenuItem,
  },
  methods: {
    genreClicked(genre_id) {
      this.clicked = genre_id;
    }
  },
  props: ["genres"]
};
</script>
