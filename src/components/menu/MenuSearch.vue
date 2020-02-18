<template>
  <div class="item">
    <input list="new-member" class="primary-background" v-model="newMember" />

    <datalist id="new-member">
      <option
        v-for="member in nonMembers"
        :key="member.id"
        :value="member.username"
      >
        {{ member.username }}
      </option>
    </datalist>

    <content-save
      class="content-save"
      v-if="newMember != null"
      v-on:click="addNewMember"
    />
    <div id="padding" />

    <magnify />
    <div id="padding" />

    <alert v-if="err" />
    <div id="padding" />
  </div>
</template>

<script>
import ContentSave from "vue-material-design-icons/ContentSave.vue";
import Magnify from "vue-material-design-icons/Magnify.vue";
import Alert from "vue-material-design-icons/Alert.vue";

export default {
  props: ["nonMembers"],
  data: () => {
    return {
      newMember: null,
      err: false
    };
  },
  components: {
    ContentSave,
    Magnify,
    Alert
  },
  watch: {
    newMember() {
      this.err = false;
    },
  },
  methods: {
    validateMember(newMember, nonMembers) {
      let validated = false;

      nonMembers.map(nonMember => {
        if (nonMember["username"] === newMember) {
          validated = true;
        }
      });

      return validated;
    },
    retrieveMember(username, members) {
      let retrievedMember = null;

      members.map(member => {
        if (member["username"] === username) {
          retrievedMember = member;
        }
      });

      return retrievedMember;
    },
    addNewMember() {
      const newMemberUsername = this.newMember;
      const nonMembers = this.nonMembers;
      const validated = this.validateMember(newMemberUsername, nonMembers);

      if (validated) {
        const newMember = this.retrieveMember(newMemberUsername, nonMembers);
        this.$emit("addNewMember", newMember);
        this.newMember = null;
      } else {
        this.err = true;
      }
    }
  }
};
</script>

<style scoped>
.item {
  min-height: 50px;
  height: 100%;
  width: 60%;
  align-self: center;
  border-radius: 10px;
  display: flex;
  align-items: center;
  border: 1px solid white;
  margin-bottom: 20px;
  transition: width 0.3s;
}

.item:hover {
  width: 62%;
}

input {
  width: 100%;
  height: 100%;
  min-height: 35px;
  border: none;
  color: white;
  text-transform: uppercase;
  font-size: 1em;
  padding-left: 2.5%;
}

input:focus {
  outline: 0;
}

input::-webkit-calendar-picker-indicator {
  display: none;
}

#padding {
  height: 100%;
  width: 2.5%;
}

.content-save:hover {
  cursor: pointer;
}

@media (max-width: 850px) {
  .item {
    width: 80%;
  }

  .item:hover {
    width: 82%;
  }
}
</style>
