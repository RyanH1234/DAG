<template>
  <div class="container">
    <div class="center-contents" id="title">Personal Cards</div>
    <div id="items">
      <div v-for="card in personal_cards" :key="card.id" class="item">
        <div id="padding" />
        <div id="item_name"> {{ card.name }} </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      personal_cards: []
    }
  },
  mounted() {
    this.personal_cards = [
      {id: 1, name: "The Stank", description: "Stank yourself"}
    ]
  }
}
</script>