<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
#app {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  height: 100%;
  width: 100%;
}

.box-shadow {
  -webkit-box-shadow: -5px 3px 18px 0px rgba(186, 186, 186, 1);
  -moz-box-shadow: -5px 3px 18px 0px rgba(186, 186, 186, 1);
  box-shadow: -5px 3px 18px 0px rgba(186, 186, 186, 1);
}

.white-background {
  background-color: white;
}

.default-background {
  background-color: #e1e2e1;
}

.primary-background {
  background-color: #f44336;
}

.light-background {
  background-color: #ff7961;
}

.dark-background {
  background-color: #ba000d;
}

.default-font {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}

.center-contents {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Scrollbar */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
::-webkit-scrollbar-thumb {
  background: #888; 
}

::-webkit-scrollbar-thumb:hover {
  background: #555; 
}

</style>
