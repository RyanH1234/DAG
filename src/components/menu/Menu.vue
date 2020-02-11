<template>
  <div class="container default-background center-contents">
    <div class="menu box-shadow white-background primary-background">
      <div class="light-background" id="header">
        <div id="text">Welcome!</div>
      </div>
      <Teams :teams="teams" @team="setTeam" />
      <members :members="members" />
      <generic />
      <personal />
      <div class="center-contents" id="button-container">
        <Button class="primary-background default-font" @click="goToDash"
          >Start</Button
        >
      </div>
    </div>
  </div>
</template>

<script>
import Teams from "./Teams";
import Members from "./Members";
import Generic from "./Generic";
import Personal from "./Personal";

export default {
  data: () => {
    return {
      teams: [],
      members: []
    };
  },
  components: {
    Teams,
    Members,
    Generic,
    Personal
  },
  methods: {
    goToDash() {
      this.$router.push("Dash");
    },
    setTeam(params) {
      this.retrieveMembers(params.team_id)
    },
    retrieveTeams() {
      this.$axios
        .post("http://localhost:4000/teams/id", {
          team_id: 15
        })
        .then(response => {
          this.teams = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    retrieveMembers(id) {
      this.$axios
        .post("http://localhost:4000/teams/members/id", {
          team_id: id
        })
        .then(response => {
          this.members = response.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  mounted() {
    this.retrieveTeams();
  }
};
</script>

<style>
.container {
  width: 100%;
  height: 100%;
  color: white;
}

.menu {
  height: 80%;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
}

.menu #header {
  min-height: 200px;
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 4em;
}

.menu #text {
  padding-left: 4%;
  text-transform: uppercase;
}

.menu #button-container {
  min-height: 150px;
  width: 100%;
  font-size: 2em;
  background-position: center;
  background-size: 100%;
}

.menu button {
  height: 50%;
  width: 20%;
  min-width: 130px;
  min-height: 60px;
  color: white;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  border: 1px solid white;
  border-radius: 10px;
  transition: width 0.5s, height 0.5s, font-size 0.6s;
}

.menu button:hover {
  height: 54%;
  width: 22%;
  font-size: 0.7em;
  cursor: pointer;
}

.container #title {
  width: 100%;
  font-size: 2em;
  text-transform: uppercase;
  margin-top: 20px;
  margin-bottom: 20px;
}

.container #items {
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  font-size: 20px;
}

#items #padding {
  height: 100%;
  width: 2.5%;
}

#items .item {
  min-height: 50px;
  height: 100%;
  width: 80%;
  align-self: center;
  border-radius: 10px;
  display: flex;
  align-items: center;
  border: 1px solid white;
  margin-bottom: 20px;
  transition: width 0.3s;
}

#items .item:hover {
  cursor: pointer;
  width: 82%;
}

@media (max-width: 850px) {
  .menu {
    height: 90%;
    width: 90%;
    margin-bottom: 0;
  }

  .menu #header {
    justify-content: center;
    align-items: center;
  }

  .menu #text {
    padding-left: 0;
  }
}
</style>
