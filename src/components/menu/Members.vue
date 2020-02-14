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

      <select
        class="primary-background"
        v-if="newMembers.length > 0"
        style="width: 60%; min-height: 50px; align-self: center; margin-bottom: 20px; border-radius: 10px; border: 1px solid white; color: white; text-transform: uppercase; font-size: 20px; padding-left: 10px;"
      >
        <option
          v-for="member in newMembers"
          :key="member.id"
          :value="member.username"
        >
          {{ member.username }}
        </option>
      </select>
    </div>
    <menu-button
      :title="btnTitle"
      v-if="teamSelected != null"
      @clicked="addNewMember"
    />
  </div>
</template>

<script>
import MenuHeading from "./MenuHeading.vue";
import MenuItem from "./MenuItem.vue";
import MenuButton from "./MenuButton.vue";

export default {
  props: ["members", "teamSelected", "users"],
  data: function() {
    return {
      title: "Members",
      btnTitle: "New Member",
      newMembers: []
    };
  },
  components: {
    MenuHeading,
    MenuItem,
    MenuButton
  },
  watch: {
    users() {
      const users = this.users;
      const members = this.members;
      this.newMembers = this.filterUsers(users, members);
    }
  },
  methods: {
    addNewMember() {
      this.$emit("retrieveAllUsers", this.teamSelected);
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
