<template>
  <div class="container">
    <div class="center-contents" id="title">Generic Cards</div>
    <div id="items">
      <div v-for="genre in genres" :key="genre.id" class="item">
        <div id="padding" />
        <div id="item_name"> {{ genre.genre }} </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "genres"
  ],
}
</script>