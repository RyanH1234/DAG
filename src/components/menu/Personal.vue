<template>
  <div class="container">
    <div class="center-contents" id="title">Personal Cards</div>
    <div id="items">
      <div v-for="card in personalCards" :key="card.id" class="item">
        <div id="padding" />
        <div id="item_name">{{ card.name }}</div>
      </div>
    </div>
    <div class="items-button-container">
      <Button class="primary-background">New Card</Button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["personalCards"]
};
</script>
