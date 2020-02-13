<template>
  <div class="container">
    <menu-heading :title="title" />
    <div id="items">
      <menu-item
        v-for="card in personalCards"
        :key="card.id"
        :initalName="card.name"
        :id="card.id"
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
      title: "Personal Cards"
    };
  },
  props: ["personalCards"],
  components: {
    MenuHeading,
    MenuItem
  }
};
</script>
