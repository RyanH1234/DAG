<template>
  <div class="container">
    <div class="center-contents" id="title">Your Teams</div>
    <div id="items">
      <div
        v-for="team in teams"
        :key="team.team_id"
        class="item"
        @click="setTeam(team)"
      >
        <div id="item-name-container">
          <div id="padding" />
          <div id="item_name">{{ team.team_name }}</div>
        </div>
        <div id="item-name-icon">
          <check-circle v-if="clicked == team.team_id" />
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
  props: ["teams"],
  components: {
    CheckCircle
  },
  methods: {
    setTeam(params) {
      this.clicked = params.team_id;
      this.$emit("team", params);
    }
  }
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
