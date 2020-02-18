<template>
  <div class="container">
    <menu-heading :title="title" />
    <div id="items">
      <menu-item
        v-for="card in personalCards"
        :key="card.id"
        :initialName="card.name"
        :id="card.id"
      />

      <menu-card v-if="teamSelected != null" @saveCard="createPersonalCard" />
    </div>
  </div>
</template>

<script>
import MenuHeading from "../MenuHeading.vue";
import MenuItem from "../MenuItem.vue";
import MenuCard from "../MenuCard.vue";

export default {
  props: ["personalCards", "teamSelected"],
  data: () => {
    return {
      title: "Personal Cards",
      btnTitle: "Add Card"
    };
  },
  components: {
    MenuHeading,
    MenuItem,
    MenuCard
  },
  methods: {
    createPersonalCard(card) {
      this.$emit("createPersonalCard", card);
    }
  }
};
</script>
