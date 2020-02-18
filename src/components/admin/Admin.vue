<template>
  <div class="container default-background center-contents">
    <div class="menu box-shadow white-background primary-background">
      <div class="light-background" id="header">
        <div id="text">Admin</div>
      </div>

      <!-- <label for="genre-name">Genre Name :</label>
      <Input type="text" id="genre-name" />

      <div id="card">
        <label for="card-name">Card Name :</label>
        <Input type="text" id="genre-name" />
        <label for="description-name">Description :</label>
        <Input type="text" id="genre-name" />
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "admin"
};
</script>

<style scoped>
.admin-container {
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
}

#api {
  height: 20%;
  width: 100%;
  align-self: center;
  border-bottom: 1px solid white;
}

#api {
}
</style>
