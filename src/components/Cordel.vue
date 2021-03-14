<template>
  <div class="cordel">
    <router-link to="/">
      <img class="btn-back" src="../assets/images/back.png" />
    </router-link>
    <div class="textCordel">
      <h1>{{ this.cordel.title }}</h1>
      <div>
        <p v-for="(line, index) of this.cordel.text" :key="index">
          <span v-html="line"></span>
        </p>
      </div>
      <h3>{{ this.cordel.author }}</h3>
    </div>
    <div class="viewCordel">
      <img v-if="this.cordel.image" class="preview" :src="this.cordel.image" />
      <img v-else class="preview" src="../assets/images/not-found.png" />
    </div>
  </div>
</template>

<script>
import CordeisJson from "../assets/json/cordeis.json";
export default {
  name: "Cordel",
  data() {
    return {
      cordel: CordeisJson[this.$route.params.id],
    };
  },
};
</script>

<style scoped>
.cordel {
  display: flex;
  flex-flow: row;
}
.btn-back {
  position: absolute;
  width: 35px;
  top: 10px;
  left: 5px;
  cursor: pointer;
}
.textCordel div {
  width: 350px;
  height: 65vh;
  overflow: auto;
  text-align: justify;
  text-indent: 30px;
}
.textCordel div p {
  margin: 15px 20px;
}
.textCordel h1 {
  padding: 10px;
  max-width: 500px;
  font-size: 25px;
}
.textCordel h3 {
  font-size: 15px;
  margin: 10px;
  font-style: italic;
  font-weight: 100;
}
.viewCordel img {
  width: 25vw;
  height: 75vh;
  margin: 30px;
}
@media screen and (max-width: 576px) {
  .cordel {
    display: flex;
  }
  .viewCordel img {
    display: none;
  }
  .textCordel h1 {
    padding: 15px 40px;
    font-size: 20px;
  }
}
</style>
