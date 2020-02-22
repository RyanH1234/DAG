<template>
  <div class="container default-background center-contents">
    <div class="menu box-shadow white-background primary-background">
      <div class="light-background" id="header">
        <div id="text">Welcome!</div>
      </div>
      <Teams
        :teams="teams"
        @team="setTeam"
        @updateName="updateName"
        @createNewTeam="createNewTeam"
      />
      <members
        :members="members"
        :users="users"
        :teamSelected="teamSelected"
        @retrieveAllUsers="retrieveAllUsers"
        @addNewMember="addNewMember"
      />
      <generic :genres="genres" />
      <personal
        :personalCards="personalCards"
        :teamSelected="teamSelected"
        @createPersonalCard="createPersonalCard"
      />
      <div class="center-contents" id="button-container">
        <Button class="primary-background default-font" @click="goToDash"
          >Start</Button
        >
      </div>
    </div>
  </div>
</template>

<script>
import Teams from "./teams/Teams";
import Members from "./members/Members";
import Generic from "./generic/Generic";
import Personal from "./personal/Personal";

const BASE_URI = "http://localhost:4000";
const USER_ID = 1;

export default {
  data: () => {
    return {
      teamSelected: null,
      users: [],
      teams: [],
      members: [],
      genres: [],
      personalCards: []
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
      this.teamSelected = team_id;

      this.retrieveAllUsers();
      this.retrieveMembers(team_id);
      this.retrievePersonalCards(team_id);
    },
    retrieveTeams(user_id) {
      const uri = BASE_URI + "/teams/" + user_id;
      this.$axios
        .get(uri)
        .then(response => {
          this.teams = response.data;
        })
        .catch(error => {
          console.dir(error);
        });
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
    retrieveAllUsers() {
      const uri = BASE_URI + "/users";

      this.$axios
        .get(uri)
        .then(response => {
          this.users = response.data;
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
          console.dir(error);
        });
    },
    updateName(data) {
      const team_name = data.name;
      const team_id = data.team_id;
      const uri = BASE_URI + "/teams/name/" + team_id;

      this.$axios
        .patch(uri, {
          team_name: team_name
        })
        .then(() => {
          this.retrieveTeams(USER_ID);
        })
        .catch(error => {
          console.dir(error);
        });
    },
    createNewTeam() {
      const uri = BASE_URI + "/teams";

      this.$axios
        .post(uri, {
          team_name: "Default Name",
          leader_id: USER_ID
        })
        .then(response => {
          const team_id = response.data;
          this.addTeamMember(team_id, USER_ID);
        })
        .catch(error => {
          console.dir(error);
        });
    },
    addNewMember(user_id) {
      this.addTeamMember(this.teamSelected, user_id);
      this.retrieveAllUsers();
      this.retrieveMembers(this.teamSelected);
    },
    addTeamMember(team_id, user_id) {
      const uri = BASE_URI + "/teams/members";

      this.$axios
        .post(uri, {
          team_id: team_id,
          user_id: user_id
        })
        .then(() => {
          this.retrieveTeams(USER_ID);
        })
        .catch(error => {
          console.dir(error);
        });
    },
    createPersonalCard(card) {
      const teamID = this.teamSelected;
      const params = { team_id: teamID, ...card };
      const uri = BASE_URI + "/personal-cards/";

      this.$axios
        .post(uri, params)
        .then(() => {
          this.retrievePersonalCards(teamID);
        })
        .catch(error => {
          console.dir(error);
        });
    }
  },
  mounted() {
    this.retrieveTeams(USER_ID);
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
  width: 75%;
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
