<template>
  <div class="container">
    <div class="center-contents" id="title">Your Teams</div>
    <div id="items">
      <div v-for="team in teams" :key="team.id" class="item">
        <div id="padding" />
        <div id="item_name">{{ team.team_name }} </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'teams'
  ]
  // data: () => {
  //   return {
  //     teams: []
  //   };
  // },
  // mounted() {
  //   this.teams = [
  //     { id: 1, team_name: "Bell's End", leader: "Ryan" },
  //     { id: 2, team_name: "Perry Salt", leader: "Fraser" },
  //     { id: 3, team_name: "Tap A Lot", leader: "Connor" }
  //   ];
  // }
};
</script>
