<template>
  <div class="teams-container">
    <div class="center-contents" id="title">Teams</div>
    <div id="teams">
      <div v-for="team in teams" :key="team.id" class="team">
        <div id="padding" />
        <div id="team_name">{{ team.team_name }} </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      teams: []
    };
  },
  mounted() {
    this.teams = [
      { id: 1, team_name: "Bell's End", leader: "Ryan" },
      { id: 2, team_name: "Perry Salt", leader: "Fraser" },
      { id: 3, team_name: "Tap A Lot", leader: "Connor" }
    ];
  }
};
</script>

<style scoped>
.teams-container {
  width: 100%;
}

.teams-container #title {
  width: 100%;
  font-size: 2em;
  text-transform: uppercase;
  margin-top: 20px;
  margin-bottom: 20px;
}

.teams-container #teams {
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  font-size: 20px;
}

#teams #padding {
  height: 100%;
  width: 2.5%;
}

#teams .team {
  min-height: 50px;
  height: 100%;
  width: 80%;
  align-self: center;
  border-radius: 10px;
  display: flex;
  align-items: center;
  border: 1px solid white;
  margin-bottom: 20px;
}

#teams .team:hover {
  cursor: pointer;
}
</style>
