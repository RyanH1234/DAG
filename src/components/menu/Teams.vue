<template>
  <div class="container">
    <menu-heading :title="title" />
    <div id="items">
      <menu-item
        v-for="team in teams"
        :key="team.team_id"
        :name="team.team_name"
        :id="team.team_id"
        :clicked="clicked"
        @clicked="teamClicked"
      />
    </div>
    <MenuButton :title="btnTitle" />
  </div>
</template>

<script>
import MenuHeading from "./MenuHeading.vue";
import MenuItem from "./MenuItem.vue";
import MenuButton from "./MenuButton.vue";

export default {
  data: () => {
    return {
      title: "Your Teams",
      btnTitle: "New Team",
      clicked: null
    };
  },
  props: ["teams"],
  components: {
    MenuHeading,
    MenuItem,
    MenuButton
  },
  methods: {
    teamClicked(team_id) {
      this.clicked = team_id;
      this.$emit("team", team_id);
    }
  }
};
</script>
