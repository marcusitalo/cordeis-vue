<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script></script>

<style>
@import "./assets/css/keyframes/movementBackground.css";
* {
  margin: 0px auto;
  padding: 0px auto;
}
html {
  background-color: #fffffb;
  background-image: url("./assets/images/background.png");
  background-size: 300px;
  background-repeat: repeat-x;
  will-change: animation;
  -webkit-animation: movementBackground 10s linear infinite;
  animation: movementBackground 10s linear infinite;
  width: 100vw;
  height: 100vh;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #615a4d;
}
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
  border: 1px solid #e2e2e2;
  border-radius: 20px;
}
::-webkit-scrollbar-thumb {
  background: #615a4d;
  border-radius: 10px;
  height: 100px;
}
@media screen and (max-width: 576px) {
  html {
    background-size: 300px;
  }
}
</style>
