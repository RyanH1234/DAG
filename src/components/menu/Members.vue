<template>
  <div class="container">
    <div class="center-contents" id="title">Members</div>
    <div id="items">
      <div v-for="user in members" :key="user.id" class="item">
        <div id="padding" />
        <div id="item_name">{{ user.username }} </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "members"
  ]
}
</script>