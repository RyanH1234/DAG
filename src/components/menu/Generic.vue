<template>
  <div class="container">
    <div class="center-contents" id="title">Generic Cards</div>
    <div id="items">
      <div v-for="genre in genres" :key="genre.id" class="item">
        <div id="padding" />
        <div id="item_name"> {{ genre.title }} </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      genres: []
    }
  },
  mounted() {
    this.genres =[
      {id: 1, title: "Aussie Day"},
      {id: 2, title: "Valentines Day"}
    ]
  }
}
</script>