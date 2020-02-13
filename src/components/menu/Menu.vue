<template>
  <div class="container default-background center-contents">
    <div class="menu box-shadow white-background primary-background">
      <div class="light-background" id="header">
        <div id="text">Welcome!</div>
      </div>
      <Teams :teams="teams" @team="setTeam" />
      <members :members="members" />
      <generic :genres="genres" />
      <personal :personalCards="personalCards" />
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

const BASE_URI = "http://localhost:4000";

export default {
  data: () => {
    return {
      teams: [],
      members: [],
      genres: [],
      personalCards: [],
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
    setTeam(team_id) {
      this.retrieveMembers(team_id);
      this.retrievePersonalCards(team_id);
    },
    retrieveTeams(user_id) {
      const uri = BASE_URI + "/teams/" + user_id;
      this.$axios.
        get(uri)
        .then(response => {
          this.teams = response.data
        })
        .catch(error => {
          console.dir(error)
        })
    },
    retrieveGenres() {
      const uri = BASE_URI + "/generic-cards/genres";

      this.$axios
        .get(uri)
        .then(response => {
          this.genres = response.data;
        })
        .catch(error => {
          console.dir(error);
        });
    },
    retrieveMembers(teamID) {
      const uri = BASE_URI + "/teams/members/" + teamID;

      this.$axios
        .get(uri)
        .then(response => {
          this.members = response.data;
        })
        .catch(error => {
          console.dir(error);
        });
    },
    retrievePersonalCards(teamID) {
      const uri = BASE_URI + "/personal-cards/" + teamID;

      this.$axios
        .get(uri)
        .then(response => {
          this.personalCards = response.data;
        })
        .catch(error => {
          console.dir(error)
        })
    },
  },
  mounted() {
    this.retrieveTeams(15);
    this.retrieveGenres();
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

#button-container button {
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

#button-container button:hover {
  height: 54%;
  width: 22%;
  font-size: 0.7em;
  cursor: pointer;
}

.container #items {
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-transform: uppercase;
  font-size: 20px;
}

.items-button-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
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
