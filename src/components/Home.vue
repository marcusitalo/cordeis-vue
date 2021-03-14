<template>
  <div>
    <Sun />
    <Title />
    <Cordeis v-if="this.cordeis" :cordeis="this.cordeis" />
  </div>
</template>

<script>
import Sun from "./Layout/Sun.vue";
import Title from "./Title.vue";
import Cordeis from "./Cordeis.vue";
import CordeisJson from "../assets/json/cordeis.json";

export default {
  name: "App",
  components: {
    Sun,
    Title,
    Cordeis,
  },
  data() {
    return {
      cordeis: CordeisJson,
    };
  },
};
</script>

<style></style>
