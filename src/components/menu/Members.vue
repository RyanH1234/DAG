<template>
  <div class="container">
    <menu-heading :title="title" />
    <div id="items">
      <menu-item
        v-for="member in members"
        :key="member.id"
        :name="member.username"
        :id="member.id"
      />
    </div>
    <menu-button :title="btnTitle" />
  </div>
</template>

<script>
import MenuHeading from "./MenuHeading.vue";
import MenuItem from "./MenuItem.vue";
import MenuButton from "./MenuButton.vue";

export default {
  data: () => {
    return {
      title: "Members",
      btnTitle: "New Member"
    };
  },
  props: ["members"],
  components: {
    MenuHeading,
    MenuItem,
    MenuButton
  }
};
</script>
