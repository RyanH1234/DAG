<template>
  <div class="container">
    <menu-heading :title="title" />
    <div id="items">
      <menu-item
        v-for="member in members"
        :key="member.id"
        :initialName="member.username"
        :id="member.id"
      />

      <menu-search
        :nonMembers="nonMembers"
        v-if="nonMembers.length > 0"
        @addNewMember="addNewMember"
      />
    </div>
  </div>
</template>

<script>
import MenuHeading from "./MenuHeading.vue";
import MenuItem from "./MenuItem.vue";
import MenuSearch from "./MenuSearch.vue";

export default {
  props: ["members", "teamSelected", "users"],
  data: function() {
    return {
      title: "Members",
      btnTitle: "New Member",
      nonMembers: []
    };
  },
  components: {
    MenuHeading,
    MenuItem,
    MenuSearch
  },
  watch: {
    members() {
      const users = this.users;
      const members = this.members;
      const filteredUsers = this.filterUsers(users, members);
      this.nonMembers = filteredUsers;
    }
  },
  methods: {
    retrieveAllUsers() {
      this.$emit("retrieveAllUsers", this.teamSelected);
    },
    addNewMember(member) {
      const user_id = member["id"];
      this.$emit("addNewMember", user_id);
    },
    containsUser(user, members) {
      let containsUser = false;

      members.map(member => {
        if (member["username"] === user["username"]) {
          containsUser = true;
        }
      });

      return containsUser;
    },
    filterUsers(users, members) {
      const filteredUsers = users.reduce((accumulator, user) => {
        const containsUser = this.containsUser(user, members);

        if (!containsUser) {
          accumulator.push(user);
        }

        return accumulator;
      }, []);

      return filteredUsers;
    }
  }
};
</script>
