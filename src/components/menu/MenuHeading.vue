<template>
  <div class="center-contents" id="title"> {{ title }} </div>
</template>

<script>
export default {
  props: [
    "title"
  ]
}
</script>

<style scoped>
#title {
  width: 100%;
  font-size: 2em;
  text-transform: uppercase;
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>