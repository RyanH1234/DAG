<template>
  <div id="content">
    <div id="name">{{ currentCard.name }}</div>
    <div id="genre">{{ currentCard.genre }}</div>
    <div id="description">{{ currentCard.description }}</div>
    <div id="button-container">
      <Button> Completed </Button>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      currentCard: {
        id: 1,
        name: "Ryan's Card",
        genre: "Personal",
        conditions: "",
        description:
          "Ryan must automically drink and has the option of participating. Stand as far away as possible and attempt to read the text. The person who can read the furthest wins. Everyone else must drink."
      }
    };
  }
};
</script>

<style scoped>
#content {
  height: 60vh;
  width: 70%;
  margin-top: 30px;
  align-self: center;
  box-shadow: 0px 4px 5px 4px rgba(189, 189, 189, 1);
  display: flex;
  flex-direction: column;
}

#name {
  padding: 20px;
  font-size: 50px;
}

#genre {
  font-size: 25px;
  margin-left: 20px;
}

#description {
  font-size: 20px;
  padding: 20px;
  font-style: italic;
}

#button-container {
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
}

#button-container Button {
  width: 200px;
  height: 50px;
}
</style>
