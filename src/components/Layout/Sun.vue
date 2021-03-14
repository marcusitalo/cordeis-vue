<template>
  <div id="sun"></div>
</template>

<script>
export default {
  name: "Sun",
};
</script>

<style scoped>
@import "../../assets/css/keyframes/rotationBackground.css";

#sun {
  background-image: url("../../assets/images/sun.png");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  top: 1vw;
  right: 5vh;
  will-change: animation;
  -webkit-animation: rotationBackground 10s linear infinite;
  animation: rotationBackground 10s linear infinite;
  width: 100px;
  height: 100px;
  z-index: -1;
}
</style>
